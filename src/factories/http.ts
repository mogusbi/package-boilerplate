import axios from 'axios';
import type { AxiosInstance } from 'axios';

export type THttp = AxiosInstance;

const http = (baseURL: string, key: string): AxiosInstance =>
  axios.create({
    baseURL,
    headers: {
      Authorization: key,
    },
    timeout: 10000,
  });

export default http;
