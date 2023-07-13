import axios, { type AxiosResponse } from 'axios';
import { type ILesson } from '../../global/types';
import { GlobalService } from '../../global/GlobalService';

class LessonCreatorService extends GlobalService {
  public static async saveLesson(lesson: ILesson, accessToken: string) {
    try {
      const response: AxiosResponse<any> = await axios.post(
        '/api/lessons/',
        lesson,
        LessonCreatorService.getHeaders(accessToken)
      );
      return response.data;
    } catch (e) {
      throw e.response.data;
    }
  }
}

export default LessonCreatorService;
