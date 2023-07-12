export interface User {
  id?: string;
  email: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  profile: {
    phone?: string;
    role: string;
    is_blocked?: boolean;
  }
  confirmPassword?: string;
};

export interface Lesson {
  id?: string;
  title: string;
  text: any[];
  picture: any[];
  video: any[];
};

export interface AuthParams {
  refresh: string,
  access: string
};
