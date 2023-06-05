import * as React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Loader.scss';

export const Loader: React.FC<any> = (props) => {
  return (
    <div className="loader-overlay">
      <Spinner animation="border" variant="secondary" role="status" className="loader" />
      <div className="darkness">{props.children}</div>
    </div>
  );
};
