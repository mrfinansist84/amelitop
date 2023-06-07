import axios, { type AxiosResponse } from 'axios'
import { type User } from '../../global/types';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class AdminPageService {
  public static async geUserListData() {
    try {
      const response: AxiosResponse<any> = await axios.get('/api/users/');
      return response.data;
      // return [{
      //   name: 'Fist',
      //   id: '1',
      //   email: 'f@f.ua',
      //   surname: 'FirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirst',
      //   type: 'student',
      //   blocked: true
      // },
      // {
      //   name: 'Second',
      //   id: '2',
      //   email: 'f@f.ua',
      //   surname: 'SecondSecond',
      //   type: 'teacher'
      // },
      // {
      //   name: 'Third',
      //   id: '3',
      //   email: 'f@f.ua',
      //   surname: 'ThirdThirdThird',
      //   type: 'admin',
      //   blocked: true
      // },
      // {
      //   name: 'Fist',
      //   id: '4',
      //   email: 'f@f.ua',
      //   surname: 'FirstFirst',
      //   type: 'student'
      // },
      // {
      //   name: 'Second',
      //   id: '5',
      //   email: 'f@f.ua',
      //   surname: 'SecondSecond',
      //   type: 'teacher'
      // },
      // {
      //   name: 'Third',
      //   id: '6',
      //   email: 'f@f.ua',
      //   surname: 'ThirdThirdThird',
      //   type: 'admin'
      // },
      // {
      //   name: 'Fist',
      //   id: '7',
      //   email: 'f@f.ua',
      //   surname: 'FirstFirst',
      //   type: 'student'
      // },
      // {
      //   name: 'Second',
      //   id: '8',
      //   email: 'f@f.ua',
      //   surname: 'SecondSecond',
      //   type: 'teacher'
      // },
      // {
      //   name: 'Third',
      //   id: '9',
      //   email: 'f@f.ua',
      //   surname: 'ThirdThirdThird',
      //   type: 'admin'
      // },
      // {
      //   name: 'Fist',
      //   id: '10',
      //   email: 'f@f.ua',
      //   surname: 'FirstFirst',
      //   type: 'student'
      // },
      // {
      //   name: 'Second',
      //   id: '1',
      //   email: 'f@f.ua',
      //   surname: 'SecondSecond',
      //   type: 'teacher'
      // },
      // {
      //   name: 'Third',
      //   id: '31',
      //   email: 'f@f.ua',
      //   surname: 'ThirdThirdThird',
      //   type: 'admin'
      // },
      // {
      //   name: 'Fist',
      //   id: '12',
      //   email: 'f@f.ua',
      //   surname: 'FirstFirst',
      //   type: 'student'
      // },
      // {
      //   name: 'Second',
      //   id: '22',
      //   email: 'f@f.ua',
      //   surname: 'SecondSecond',
      //   type: 'teacher'
      // },
      // {
      //   name: 'Third',
      //   id: '32',
      //   email: 'f@f.ua',
      //   surname: 'ThirdThirdThird',
      //   type: 'admin'
      // }
      // ]
      // eslint-disable-next-line no-unreachable
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
