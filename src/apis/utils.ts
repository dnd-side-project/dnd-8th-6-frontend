import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

const axiosApi = (url: string, options?: AxiosRequestConfig) => {
  const instance = axios.create({ baseURL: url, ...options });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 404) {
        // API endpoint 오류 처리
        console.log("Not Found");
      } else {
        // 기타 오류 처리
        console.log("Error:", error);
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

const axiosAuthApi = (url: string, options?: AxiosRequestConfig) => {
  const instance = axios.create({ baseURL: url, ...options });

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        // 인증 오류 처리
        console.log("Unauthorized");
      } else if (error.response?.status === 404) {
        // API endpoint 오류 처리
        console.log("Not Found");
      } else {
        // 기타 오류 처리
        console.log("Error:", error);
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

export const defaultInstance = axiosApi(BASE_URL);
export const authInstance = axiosAuthApi(BASE_URL);
