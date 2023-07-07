import * as React from 'react';
import { Button } from 'react-bootstrap';
import './Heading.scss';

interface IProps {
  text: string;
  withIcon?: boolean;
  reject?: () => void;
  resolve?: () => void;
  withActions?: boolean;
}

const Heading = (props: IProps) => {
  return (
    <div className="heading">
      <div className="heading__title">
        {props.withIcon && <i className="bi bi-arrow-left heading__icon" />}
        <h1 className="heading__text">{props.text}</h1>
      </div>
      {props.withActions && (
        <div className="heading__buttons">
          <Button variant="outline-secondary" onClick={props.reject}>Cancel</Button>
          <Button variant="primary" onClick={props.resolve}>Save</Button>
        </div>
      )}
    </div>
  );
};

export default Heading;
