export class GlobalService {
  public static getHeaders(accessToken: string) {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    };
  };
};
