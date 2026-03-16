import axios, { type AxiosError, type AxiosInstance, type AxiosRequestConfig, type CreateAxiosDefaults } from "axios";
import type { UnauthorizedContext } from "../auth/index";
export * from "./fetch_json";

export type CreateOpenApiClientOptions = {
  axios?: CreateAxiosDefaults;
  onUnauthorized?: (context: UnauthorizedContext) => boolean | void | Promise<boolean | void>;
};

function resolveRequestUrl(instance: AxiosInstance, config?: AxiosRequestConfig): URL | null {
  if (!config?.url) {
    return null;
  }

  try {
    const base = config.baseURL ?? instance.defaults.baseURL ?? window.location.origin;
    return new URL(config.url, base);
  } catch {
    return null;
  }
}

export function createOpenApiClient(options: CreateOpenApiClientOptions = {}) {
  const instance = axios.create({
    withCredentials: true,
    ...options.axios,
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      if (error.response?.status === 401 && options.onUnauthorized) {
        await options.onUnauthorized({
          error,
          requestUrl: resolveRequestUrl(instance, error.config),
        });
      }
      return Promise.reject(error);
    }
  );

  async function request<T>(config: AxiosRequestConfig): Promise<T> {
    const response = await instance.request<T>(config);
    return response.data;
  }

  return {
    instance,
    request,
  };
}
