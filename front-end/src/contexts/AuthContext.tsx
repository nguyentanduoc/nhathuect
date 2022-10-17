import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../constant/LocalStogate";
import { IUser } from "../models/IUser";
import { ApiContext } from "./ApiContext";

interface IAuthContext {
  user?: IUser;
  token?: string;
  onLoginSuccess: (token: string) => void;
  onLogout: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IAuthProviderProps {
  children: ReactElement;
}
export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [token, setToken] = useState<string>();
  const [user, setUser] = useState<IUser>();
  const { doGet } = useContext(ApiContext);
  const navigate = useNavigate();

  const handleLoginSuccess = async (token: string) => {
    setToken(token);
    localStorage.setItem(TOKEN_KEY, token);
  };

  const handleLogout = () => {
    setToken(undefined);
  };

  useEffect(() => {
    const getUser = async () => {
      if (token) {
        const userResponse = await doGet("/auth/user");
        setUser(userResponse);
      }
    };
    getUser();
  }, [token, doGet]);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      setToken(token);
    } else {
      console.log("token", token);
      navigate("/login");
    }
  }, [navigate, setToken]);

  const value: IAuthContext = {
    token,
    onLoginSuccess: handleLoginSuccess,
    onLogout: handleLogout,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
