import axios from "axios";
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
export const getRequest = async (path: string): Promise<any> => {
  const url = `${process.env.NEXT_PUBLIC_API_ORIGIN}${path}`;
  const response = await axios.get(url, { headers: getDefaultHeaders() });
  return response.data;
};
