import { AxiosRequestConfig } from "axios";
import { useState } from "react";
import apiClient from "../../api/client";
import IApiResponseBase from "../../models/IApiResponseBase";

export interface IApiResponsePost<P extends AxiosRequestConfig>
  extends IApiResponseBase {
  execute: (body?: any, param?: P) => void;
}
export const useApiPost = <R extends AxiosRequestConfig>(
  url: string
): IApiResponsePost<R> => {
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>("");
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const execute = async (body?: any, param?: R) => {
    setLoading(true);
    try {
      const apiResponse = await apiClient.post(url, body, param);
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(apiResponse.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return { status, statusText, data, error, loading, execute };
};
