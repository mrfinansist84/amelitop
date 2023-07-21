import * as React from 'react';

import { type User } from '~/global/types';
import { initialUser } from '~/global/constants';
import UserListItem from '../UserListItem';

import './UserColumn.scss';

interface Props {
  userList: User[];
  doAction: (user: User, actionType: string, createMode: boolean) => void;
  userType: string;
}

export const UserColumn: React.FC<Props> = (props) => {
  const createUser = (userType: string) => {
    props.doAction({ ...initialUser, profile: { role: userType } }, 'edit', true);
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
