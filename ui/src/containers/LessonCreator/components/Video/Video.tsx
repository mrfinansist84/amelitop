import * as React from 'react';
import './Video.scss';

interface IProps {
  id: any;
  title: any;
  index: number;
}

const Video = (props: IProps) => {
  return (
    <div className="lesson-preview">
      <section className="lesson-preview__content">
        Video
      </section>
      <h2 className="lesson-preview__title">{props.title}</h2>
      <section className="lesson-preview__metadata">
      </section>
    </div>
  );
};

export default Video;
