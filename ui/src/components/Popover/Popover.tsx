/* eslint-disable @typescript-eslint/indent */
import * as React from 'react';
import OverlayTrigger, { type OverlayTriggerRenderProps } from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { type Placement } from 'react-bootstrap/esm/types';

import './Popover.scss';

interface Props {
  children:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | ((props: OverlayTriggerRenderProps) => React.ReactNode);
  placement: Placement;
  header?: string;
  body: any;
  show?: boolean;
  closeMenu: () => void;
}

export const CustomPopover: React.FC<Props> = (props) => {
  return (
    <OverlayTrigger
      trigger="click"
      onToggle={props.closeMenu}
      show={props.show}
      placement={props.placement}
      overlay={
        <Popover id={`popover-positioned-${props.placement}`}>
          {props.header && <Popover.Header as="h3">{props.header}</Popover.Header>}
          <Popover.Body>{props.body}</Popover.Body>
        </Popover>
      }
    >
      {props.children}
    </OverlayTrigger>
  );
};
