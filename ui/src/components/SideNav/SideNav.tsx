import * as React from 'react';
import './SideNav.scss';

const SideNav = (props: any) => {
  return (
    <aside className="side-nav">
      {props.items.map((item: any, index: number) => (
        <div className="side-nav__element" key={item.id}>
          <h3 className="side-nav__element-title">{item.title}</h3>
          <p className="side-nav__element-label">{`Lesson ${++index}`}</p>
        </div>
      ))}
    </aside>
  );
};

export default SideNav;
