import { type AxiosResponse } from 'axios';
import { httpClient } from '~/global/api';
import { type ILesson } from '~/global/types';

class LessonsService {
  public static async getLessons() {
    try {
      const response: AxiosResponse<ILesson> = await httpClient.get('/lessons/');
      return response.data;
    } catch (e) {
      throw e.response.data;
    }
  }

  public static async deleteLesson(id: number) {
    try {
      await httpClient.delete(`/lessons/${id}/`, { validateStatus: (status) => status === 204 });
    } catch (e) {
      throw e.response.data;
    }
  }
}

export default LessonsService;
