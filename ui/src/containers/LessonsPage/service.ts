import axios, { type AxiosResponse } from 'axios';
import { GlobalService } from '../../global/GlobalService';

class LessonsService extends GlobalService {
  public static async getLessons(accessToken: string) {
    try {
      const response: AxiosResponse<any> = await axios.get('/api/lessons', LessonsService.getHeaders(accessToken));
      return response.data;
    } catch (e) {
      throw e.response.data;
    }
  }
}

export default LessonsService;
