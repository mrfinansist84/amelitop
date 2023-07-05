import * as React from 'react';
import './Heading.scss';

interface IProps {
  text: string;
  withIcon?: boolean;
}

const Heading = ({ text, withIcon = false }: IProps) => {
  return (
    <div className="heading">
      <div className="heading__title">
        {withIcon && <i className="bi bi-arrow-left heading__icon" />}
        <h1 className="heading__text">{text}</h1>
      </div>
      <div className="heading__buttons">{/** TBD */}</div>
    </div>
  );
};

export default Heading;
