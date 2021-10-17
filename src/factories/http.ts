import axios from 'axios';
import type { AxiosInstance } from 'axios';

export type THttp = AxiosInstance;

/**
 * Creates a HTTP client factory
 *
 * @param baseURL - Base URL that will prefix all calls
 * @param key - API key that will be attached to authorise the request
 */
const http = (baseURL: string, key: string): AxiosInstance =>
  axios.create({
    baseURL,
    headers: {
      Authorization: key,
    },
    timeout: 10000,
  });

export default http;
