/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { BANNER_MESSAGE_STATUSES } from './constants';
import './Banner.scss';

interface Props {
  show: boolean;
  closeBanner: (flag: boolean) => void;
  autoHide: boolean;
  message: string;
  status: string;
}

export const Banner: React.FC<Props> = (props) => {
  const getDataCorrespondingStatus = () => {
    const info = BANNER_MESSAGE_STATUSES[props.status];
    return {
      name: info?.name,
      bannerClass: info?.bannerClassName,
      iconClass: info?.iconClassName
    }
  };

  const getAutoHideStatus = () => props.autoHide || props.status === 'SUCCESS';

  return (
      <ToastContainer
        className="p-3"
        position="top-end"
        style={{ zIndex: 1 }}
    >
      <Toast
        onClose={() => props.closeBanner(false)}
        show={props.show}
        delay={3000}
        autohide={getAutoHideStatus()}
        className="banner"
      >
        <Toast.Header
          closeButton={!getAutoHideStatus()}
          className={getDataCorrespondingStatus().bannerClass}
         >
          <i className={`icon ${getDataCorrespondingStatus().iconClass}`} />
          <strong className="me-auto">{getDataCorrespondingStatus().name}</strong>
        </Toast.Header>
        <Toast.Body
          className={getDataCorrespondingStatus().bannerClass}
        >
          {props.message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  )
};
