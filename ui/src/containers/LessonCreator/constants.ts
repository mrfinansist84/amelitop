export const SAVE_LESSON_REQUEST = 'SAVE_LESSON_REQUEST' as const;
export const SAVE_LESSON_SUCCESS = 'SAVE_LESSON_SUCCESS' as const;
export const SAVE_LESSON_ERROR = 'SAVE_LESSON_ERROR' as const;

export const defaultElement = {
  text: {
    title: '',
    type: 'text',
    index: 0,
    text: '',
    elementId: ''
  },
  video: {
    title: '',
    type: 'video',
    index: 0,
    link: '',
    elementId: ''
  },
  picture: {
    title: '',
    type: 'picture',
    index: 0,
    link: '',
    elementId: ''
  }
};

export const defaultLesson = {
  title: ''
  // description
  // teacher
};

export const addingBtn: any[] = [
  {
    id: 1,
    title: '+ Text',
    type: 'text'
  },
  {
    id: 2,
    title: '+ Video',
    type: 'video'
  },
  {
    id: 3,
    title: '+ Picture',
    type: 'picture'
  }
];
