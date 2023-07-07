import axios, { type AxiosResponse } from 'axios';
import { type Lesson } from '../../global/types';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class LessonCreatorService {
  public static async saveLesson(lesson: Lesson) {
    try {
      const response: AxiosResponse<any> = await axios.post('/api/lessons/', lesson);
      return response.data;
    } catch (e) {
      throw e.response.data;
    }
  }
}

export default LessonCreatorService;
