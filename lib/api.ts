import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

const getDefaultHeaders: () => { [key: string]: string } = () => {
  const headers = {} as { [key: string]: string };
  if (!!Cookies.get("uid")) {
    headers["uid"] = Cookies.get("uid") ?? "";
  }
  if (!!Cookies.get("client")) {
    headers["client"] = Cookies.get("client") ?? "";
  }
  if (!!Cookies.get("access-token")) {
    headers["access-token"] = Cookies.get("access-token") ?? "";
  }
  return headers;
};

// GETリクエスト
export const getRequest = async (
  path: string,
  params?: Record<string, any>,
): Promise<any> => {
  const url = `${process.env.NEXT_PUBLIC_API_ORIGIN}${path}`;
  try {
    const response = await axios.get(url, {
      headers: getDefaultHeaders(),
      params: params,
    });
    return response.data;
  } catch (e: any) {
    return e;
  }
};
