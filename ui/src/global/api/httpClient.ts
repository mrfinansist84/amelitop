import axios from 'axios';
import store from '../../store';
import { API_BASE_URL } from '../constants';

const httpClient = axios.create({
  baseURL: API_BASE_URL
});

httpClient.interceptors.request.use(async (request) => {
  const state = store.getState();
  const { accessToken, isAuthenticated } = state.authenticatedReducer;

  if (isAuthenticated) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }

  return request;
});

export default httpClient;
