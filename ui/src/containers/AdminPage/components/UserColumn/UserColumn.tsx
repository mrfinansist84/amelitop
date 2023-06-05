import * as React from 'react';

import UserListItem from '../UserListItem';
import './UserColumn.scss';

interface User {
  name: string;
  id: string;
  email: string;
  secondName: string;
  userType: string;
  isBlocked: boolean;
}

export const UserColumn = (props: any) => {
  const createUser = (userType: string) => {
    console.log(userType);
  };

  return (
    <section className="info-column col">
      <button
        type="button"
        className="btn btn-outline-primary create-btn text-uppercase"
        onClick={() => createUser(props.userType)}
      >
        Create {props.userType}
      </button>
      <div className="user-info">
        <div className="user-info__title">{props.userType}s List</div>
        <ul className="user-info__content card">
          {props.userList.map((user: User) => (
            <UserListItem user={user} key={user.id} doAction={props.doAction} />
          ))}
        </ul>
      </div>
    </section>
  );
};
