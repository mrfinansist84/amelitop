import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './Modal.scss';

// for using Modal you need transfer from component show flag and controling func whick will be change value of flag
// use Modal in front of the component
interface Props {
  show: boolean;
  onHide: () => void;
  btnCloseName: string | 'Close';
  btnSaveName: string | 'Save';
  title: string;
  body: any;
  isShowFooter?: boolean;
  isShowHeader?: boolean;
}

export const CustomModal: React.FC<Props> = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      {props.isShowHeader && (
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>{props.body}</Modal.Body>
      {props.isShowFooter && (
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            {props.btnCloseName}
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            {props.btnSaveName}
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};
