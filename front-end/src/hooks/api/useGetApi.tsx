import { AxiosRequestConfig } from "axios";
import { useState } from "react";
import apiClient from "../../api/client";
import IApiResponseBase from "../../models/IApiResponseBase";

export interface TApiResponseGet<P extends AxiosRequestConfig>
  extends IApiResponseBase {
  execute: (param: P) => void;
}

export const useApiGet = <P extends AxiosRequestConfig>(
  url: string
): TApiResponseGet<P> => {
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>("");
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const execute = async (param: P) => {
    setLoading(true);
    try {
      const apiResponse = await apiClient.get(url, { ...param });
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
