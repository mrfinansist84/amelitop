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
  };
  confirmPassword?: string;
}

export interface ILesson {
  id?: number;
  title: string;
  text?: ITextBlock[];
  picture?: IPicBlock[];
  video?: IVideoBlock[];
}

export interface ILessonPreview {
  id: number;
  title: string;
  index: number;
}

interface IBlock {
  id: number;
  title: string;
  index: number;
}

interface ITextBlock extends IBlock {
  text: string;
  type: 'text';
}

interface IPicBlock extends IBlock {
  link: string;
  type: 'pic';
}

interface IVideoBlock extends IBlock {
  link: string;
  type: 'video';
}

export interface AuthParams {
  refresh: string;
  access: string;
}
