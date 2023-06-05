// import axios, { type AxiosResponse } from 'axios'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class AdminPageService {
  public static async geUserListData() {
    try {
      // const response: AxiosResponse<any> = await axios.get('url')
      // return response.data
      return [{
        name: 'Fist',
        id: '1',
        email: 'f@f.ua',
        secondName: 'FirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirstFirst',
        userType: 'student',
        isBlocked: true
      },
      {
        name: 'Second',
        id: '2',
        email: 'f@f.ua',
        secondName: 'SecondSecond',
        userType: 'teacher'
      },
      {
        name: 'Third',
        id: '3',
        email: 'f@f.ua',
        secondName: 'ThirdThirdThird',
        userType: 'admin',
        isBlocked: true
      },
      {
        name: 'Fist',
        id: '1',
        email: 'f@f.ua',
        secondName: 'FirstFirst',
        userType: 'student'
      },
      {
        name: 'Second',
        id: '2',
        email: 'f@f.ua',
        secondName: 'SecondSecond',
        userType: 'teacher'
      },
      {
        name: 'Third',
        id: '3',
        email: 'f@f.ua',
        secondName: 'ThirdThirdThird',
        userType: 'admin'
      },
      {
        name: 'Fist',
        id: '1',
        email: 'f@f.ua',
        secondName: 'FirstFirst',
        userType: 'student'
      },
      {
        name: 'Second',
        id: '2',
        email: 'f@f.ua',
        secondName: 'SecondSecond',
        userType: 'teacher'
      },
      {
        name: 'Third',
        id: '3',
        email: 'f@f.ua',
        secondName: 'ThirdThirdThird',
        userType: 'admin'
      },
      {
        name: 'Fist',
        id: '1',
        email: 'f@f.ua',
        secondName: 'FirstFirst',
        userType: 'student'
      },
      {
        name: 'Second',
        id: '2',
        email: 'f@f.ua',
        secondName: 'SecondSecond',
        userType: 'teacher'
      },
      {
        name: 'Third',
        id: '3',
        email: 'f@f.ua',
        secondName: 'ThirdThirdThird',
        userType: 'admin'
      },
      {
        name: 'Fist',
        id: '1',
        email: 'f@f.ua',
        secondName: 'FirstFirst',
        userType: 'student'
      },
      {
        name: 'Second',
        id: '2',
        email: 'f@f.ua',
        secondName: 'SecondSecond',
        userType: 'teacher'
      },
      {
        name: 'Third',
        id: '3',
        email: 'f@f.ua',
        secondName: 'ThirdThirdThird',
        userType: 'admin'
      }
      ]
      // eslint-disable-next-line no-unreachable
    } catch (e) {
      throw (e).response.data
    }
  }
}

export default AdminPageService
