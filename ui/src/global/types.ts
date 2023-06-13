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
  id: string;
};
