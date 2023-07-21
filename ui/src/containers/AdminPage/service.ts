import { type AxiosResponse } from 'axios';
import { httpClient } from '~/global/api';
import { type User } from '~/global/types';

class AdminPageService {
  public static async getUserListData() {
    try {
      const response: AxiosResponse<any> = await httpClient.get('/users/');
      return response.data;
    } catch (e) {
      console.log(e.response.data);
      throw e.response.data;
    }
  }

  public static async createProfile(userProfile: User) {
    try {
      const response: AxiosResponse<any> = await httpClient.post('/users/', userProfile);
      return response.data;
    } catch (e) {
      throw e.response.data;
    }
  }

  public static async updateProfile(userProfile: User) {
    try {
      const response: AxiosResponse<any> = await httpClient.patch(`/users/${userProfile.id}/`, userProfile);
      return response.data;
    } catch (e) {
      throw e.response.data;
    }
  }

  public static async deleteUser(userId: string) {
    try {
      const response: AxiosResponse<any> = await httpClient.delete(`/users/${userId}/`, {
        data: { id: userId }
      });

      return response.data;
    } catch (e) {
      throw e.response.data;
    }
  }

  public static async updateStatus(status: string, userId: string) {
    try {
      const response: AxiosResponse<any> = await httpClient.patch(`/users/${userId}/`, {
        profile: { is_blocked: status }
      });

      return response.data;
    } catch (e) {
      throw e.response.data;
    }
  }
}

export default AdminPageService;
