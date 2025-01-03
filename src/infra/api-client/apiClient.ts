import axios from 'axios';

export const apiClient = (baseURL: string) => {
  return axios.create({
    baseURL,
    validateStatus: (status) => status < 400,
  });
}
