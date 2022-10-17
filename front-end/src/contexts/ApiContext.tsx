import { message, Spin } from "antd";
import axios, { Axios, AxiosRequestConfig } from "axios";
import {
  createContext,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import { TOKEN_KEY } from "../constant/LocalStogate";

interface IApiContext {
  setToken: (token: string) => void;
  doPost: (url: string, data: any) => Promise<any>;
  doGet: (url: string) => Promise<any>;
}

export const ApiContext = createContext<IApiContext>({} as IApiContext);

interface IApiProviderProps {
  children: ReactElement;
}

const ApiProvider = ({ children }: IApiProviderProps) => {
  const [loading, setLoading] = useState(false);

  const axiosClient = useMemo<Axios>(() => {
    const client = axios.create({
      baseURL: process.env.REACT_APP_MAIN,
    });
    client.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
          config.headers!.Authorization = `Bearer ${localStorage.getItem(
            TOKEN_KEY
          )}`;
        }
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );
    client.interceptors.response.use(
      (response: any) => response.data,
      (error: any) => {
        if (error.code === "ERR_NETWORK") {
          message.error(error.message);
          return Promise.reject(error);
        }
        let res = error.response;
        if (res.status === 401) {
          // window.location.href = “https://example.com/login”;
        } else if (res.status === 403) {
          refreshToken();
        } else if (res.status === 500) {
          message.error("Interal Error");
        } else if (res.status === 400) {
          return Promise.reject(error.response.data);
        }
        return Promise.reject(error);
      }
    );
    return client;
  }, []);

  const refreshToken = useCallback(() => {
    const response = axiosClient.get("/auth/refreshToken", {
      headers: { isRefreshToken: "true" },
    });
    console.log(response);
  }, [axiosClient]);

  const setToken = useCallback((token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
  }, []);

  const doPost = useCallback(
    async (url: string, data: any) => {
      try {
        setLoading((pre) => !pre);
        return await axiosClient.post(url, data);
      } finally {
        setLoading((pre) => !pre);
      }
    },
    [axiosClient]
  );

  const doGet = useCallback(
    (url: string) => {
      return axiosClient.get(url);
    },
    [axiosClient]
  );

  const value = {
    setToken,
    doPost,
    doGet,
  };
  return (
    <SpinStyled spinning={loading}>
      <ApiContext.Provider value={value}>{children}</ApiContext.Provider>
    </SpinStyled>
  );
};

const SpinStyled = styled(Spin)`
  .ant-spin-spinning {
    height: 100%;
  }
`;
export default ApiProvider;
