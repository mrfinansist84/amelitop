import * as React from 'react';
import './Text.scss';

interface IProps {
  id: any;
  title: any;
  index: number;
}

const Text = (props: IProps) => {
  return (
    <div className="lesson-preview">
      <section className="lesson-preview__content">
        Text
      </section>
      <h2 className="lesson-preview__title">{props.title}</h2>
      <section className="lesson-preview__metadata">
      </section>
    </div>
  );
};

export default Text;
