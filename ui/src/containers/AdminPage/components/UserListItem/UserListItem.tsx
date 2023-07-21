import * as React from 'react';
import './UserListItem.scss';
import { type User } from '~/global/types';

interface Props {
  user: User;
  doAction: (user: any, actionType: string, creatingMode: boolean) => void;
}

export const UserListItem: React.FC<Props> = ({ user, doAction }) => {
  const getActionName = () => (user.profile.is_blocked ? 'unblock' : 'block');

  return (
    <li key={user.id} className="user-info-item">
      <div className="user-info-item__name">
        <div className="name-text">{`${user.first_name} ${user.last_name}`}</div>
        {user.profile.is_blocked && <span className="badge bg-secondary">Blocked</span>}
      </div>
      <div className="user-info-item__control btn-group" role="group">
        <button type="button" className="btn btn-outline-primary" onClick={() => doAction(user, 'delete', false)}>
          Delete
        </button>
        <button type="button" className="btn btn-outline-primary" onClick={() => doAction(user, 'edit', false)}>
          Edit
        </button>
        <button
          type="button"
          className="btn btn-outline-primary btn---block"
          onClick={() => doAction(user, getActionName(), false)}
        >
          {user.profile.is_blocked ? 'Unblock' : 'Block'}
        </button>
      </div>
    </li>
  );
};
