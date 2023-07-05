import axios, { type AxiosResponse } from 'axios'
import { type AuthParams } from '../../global/types';

class AuthService {
  public static async getAccessToken(params: AuthParams) {
    try {
      const response: AxiosResponse<any> = await axios.post('/api/token/', params);
      return response.data;
    } catch (e) {
      throw (e).response.data;
    }
  };

  public static async refreshToken(refreshToken: string) {
    try {
      const response: AxiosResponse<any> = await axios.post('/api/token/refresh/', { refresh: refreshToken });
      return response.data;
    } catch (e) {
      throw (e).response.data;
    }
  };
}

export default AuthService
