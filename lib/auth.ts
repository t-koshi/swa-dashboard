import { AxiosError } from "axios";
import { getRequest } from "./api";
import Cookies from "js-cookie";

export const checkAuthRequest = async (): Promise<any> => {
  const response = await getRequest("/dashboard/api/dashboard/check_auth");
  if (response instanceof AxiosError && response.response?.status == 401) {
    Cookies.remove("uid");
    Cookies.remove("client");
    Cookies.remove("access-token");
    document.location.href = `${process.env.NEXT_PUBLIC_API_ORIGIN}`;
    return false;
  }

  return true;
};
