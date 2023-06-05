// import axios, { type AxiosResponse } from 'axios'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class AdminPageService {
  public static async geUserListData () {
    try {
      // const response: AxiosResponse<any> = await axios.get('url')
      // return response.data
      return [1, 2, 3]
    // eslint-disable-next-line no-unreachable
    } catch (e) {
      throw (e).response.data
    }
  }
}

export default AdminPageService
