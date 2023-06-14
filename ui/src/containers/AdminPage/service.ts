import axios, { type AxiosResponse } from 'axios'
import { type User } from '../../global/types';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class AdminPageService {
  public static async geUserListData() {
    try {
      const response: AxiosResponse<any> = await axios.get('/api/users/');
      return response.data;
    } catch (e) {
      throw (e).response.data;
    }
  };

  public static async createProfile(userProfile: User) {
    try {
      const response: AxiosResponse<any> = await axios.post('/api/users/', userProfile);
      return response.data;
    } catch (e) {
      throw (e).response.data;
    }
  };

  public static async updateProfile(userProfile: User) {
    try {
      const response: AxiosResponse<any> = await axios.patch(`/api/users/${userProfile.id}/`, userProfile);
      return response.data;
    } catch (e) {
      throw (e).response.data;
    }
  };

  public static async deleteUser(userId: string) {
    const config = {
      data: {
        id: userId
      }
    }
    try {
      const response: AxiosResponse<any> = await axios.delete(`/api/users/${userId}/`, config);
      return response.data;
    } catch (e) {
      throw (e).response.data;
    }
  };

  public static async updateStatus(status: string, userId: string) {
    try {
      const response: AxiosResponse<any> = await axios.patch(`/api/users/${userId}/`, { profile: { is_blocked: status } });
      return response.data;
    } catch (e) {
      throw (e).response.data;
    }
  };
}

export default AdminPageService
