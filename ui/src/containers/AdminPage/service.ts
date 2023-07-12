import axios, { type AxiosResponse } from 'axios'
import { type User } from '../../global/types';
import { GlobalService } from '../../global/GlobalService';

class AdminPageService extends GlobalService {
  public static async getUserListData(accessToken: string) {
    try {
      const response: AxiosResponse<any> = await axios.get('/api/users/', AdminPageService.getHeaders(accessToken));
      return response.data;
    } catch (e) {
      console.log((e).response.data)
      throw (e).response.data;
    }
  };

  public static async createProfile(userProfile: User, accessToken: string) {
    try {
      const response: AxiosResponse<any> = await axios.post('/api/users/', userProfile, AdminPageService.getHeaders(accessToken));
      return response.data;
    } catch (e) {
      throw (e).response.data;
    }
  };

  public static async updateProfile(userProfile: User, accessToken: string) {
    try {
      const response: AxiosResponse<any> = await axios.patch(`/api/users/${userProfile.id}/`, userProfile, AdminPageService.getHeaders(accessToken));
      return response.data;
    } catch (e) {
      throw (e).response.data;
    }
  };

  public static async deleteUser(userId: string, accessToken: string) {
    const config = {
      data: {
        id: userId
      },
      ...AdminPageService.getHeaders(accessToken)
    }
    try {
      const response: AxiosResponse<any> = await axios.delete(`/api/users/${userId}/`, config);
      return response.data;
    } catch (e) {
      throw (e).response.data;
    }
  };

  public static async updateStatus(status: string, userId: string, accessToken: string) {
    try {
      const response: AxiosResponse<any> = await axios.patch(`/api/users/${userId}/`, { profile: { is_blocked: status } }, AdminPageService.getHeaders(accessToken));
      return response.data;
    } catch (e) {
      throw (e).response.data;
    }
  };
}

export default AdminPageService
