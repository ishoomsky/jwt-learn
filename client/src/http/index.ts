import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { localStorageSet, localStorageRemove } from "../services/LocalStorageAPI";

export const API_URL = `http://localhost:5000/api`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    console.log("response on fulfiled");
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(`http://localhost:5000/api/refresh`, { withCredentials: true });
        localStorageSet("token", response.data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log("Не авторизован");
      }
    }
    throw error;
  }
);

export default $api;
