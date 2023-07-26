import * as React from 'react';
import { Dropdown } from 'react-bootstrap';
import { ActionsMenuItem } from '~/global/types';
import './ActionsMenu.scss';

interface IProps {
  items: ActionsMenuItem[];
}

interface IRefProps {
  children: JSX.Element;
  onClick: Function;
}

const ActionsMenu = (props: IProps) => {
  const CustomToggle = React.forwardRef<HTMLButtonElement, IRefProps>((props, ref) => (
    <button
      className="actions-menu__toggle-btn"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        props.onClick(e);
      }}
    >
      {props.children}
    </button>
  ));

  return (
    <Dropdown className="actions-menu">
      <Dropdown.Toggle as={CustomToggle}>
        <i className="bi bi-menu-down" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {props.items.map((item, index) => (
          <Dropdown.Item key={index} onClick={() => item.onClick()}>
            {item.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ActionsMenu;
