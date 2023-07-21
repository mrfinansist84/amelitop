import { type AxiosResponse } from 'axios';
import { httpClient } from '../../global/api';
import { GlobalService } from '../../global/GlobalService';
import { type ILesson } from '../../global/types';

class LessonsService extends GlobalService {
  public static async getLessons() {
    try {
      const response: AxiosResponse<ILesson> = await httpClient.get('/lessons/');
      return response.data;
    } catch (e) {
      throw e.response.data;
    }
  }
}

export default LessonsService;
