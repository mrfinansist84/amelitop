import axios, { type AxiosResponse } from 'axios';

class LessonsService {
  public static async getLessons() {
    try {
      const response: AxiosResponse<any> = await axios.get('/api/lessons');
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
      throw e.response.data;
    }
  }
}

export default LessonsService;
