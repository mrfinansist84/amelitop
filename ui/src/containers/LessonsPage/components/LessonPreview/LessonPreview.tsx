import * as React from 'react';
import './LessonPreview.scss';

interface IProps {
  id: any;
  title: any;
  index: number;
}

const LessonPreview = (props: IProps) => {
  return (
    <div className="lesson-preview">
      <section className="lesson-preview__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </section>
      <h2 className="lesson-preview__title">{props.title}</h2>
      <section className="lesson-preview__metadata">
        <div>{`Lesson ${props.index + 1}`}</div>
        <div className="lesson-preview__owner">Teacher: Noname</div>
      </section>
    </div>
  );
};

export default LessonPreview;
