import { type AxiosResponse } from 'axios';
import { httpClient } from '../../global/api';
import { type ILesson } from '../../global/types';
import { GlobalService } from '../../global/GlobalService';

class LessonCreatorService extends GlobalService {
  public static async saveLesson(lesson: ILesson) {
    try {
      const response: AxiosResponse<any> = await httpClient.post('/lessons/', lesson);
      return response.data;
    } catch (e) {
      throw e.response.data;
    }
  }
}

export default LessonCreatorService;
