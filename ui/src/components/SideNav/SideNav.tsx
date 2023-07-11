import * as React from 'react';
import { Card } from 'react-bootstrap';

import './SideNav.scss';

const SideNav = (props: any) => {
  return (
    <Card className="side-nav">
      <Card.Body className="side-nav-body">
        {props.items.map((item: any) => item)}
      </Card.Body>
    </Card>
  );
};

export default SideNav;
