import axios, { type AxiosResponse } from 'axios';
import { GlobalService } from '../../global/GlobalService';
import { type ILesson } from '../../global/types';

class LessonsService extends GlobalService {
  public static async getLessons(accessToken: string) {
    try {
      const response: AxiosResponse<ILesson> = await axios.get('/api/lessons/', LessonsService.getHeaders(accessToken));
      return response.data;
    } catch (e) {
      throw e.response.data;
    }
  }
}

export default LessonsService;
