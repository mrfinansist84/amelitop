import * as React from 'react';
import './UserListItem.scss';

interface Props {
  user: {
    name: string;
    secondName: string;
    id: string;
    email: string;
    userType: string;
    isBlocked: boolean;
  };
  doAction: (id: string, actionType: string) => void;
}

export const UserListItem: React.FC<Props> = ({ user, doAction }) => {
  const getAction = () => (user.isBlocked ? 'block' : 'unblock');

  return (
    <li key={user.id} className="user-info-item">
      <div className="user-info-item__name">
        <div className="name-text">{`${user.name} ${user.secondName}`}</div>
        {user.isBlocked && <span className="badge bg-secondary">Blocked</span>}
      </div>
      <div className="user-info-item__control btn-group" role="group">
        <button type="button" className="btn btn-outline-primary" onClick={() => doAction(user.id, 'delete')}>
          Delete
        </button>
        <button type="button" className="btn btn-outline-primary" onClick={() => doAction(user.id, 'edit')}>
          Edit
        </button>
        <button
          type="button"
          className="btn btn-outline-primary btn---block"
          onClick={() => doAction(user.id, getAction())}
        >
          {user.isBlocked ? 'Unblock' : 'Block'}
        </button>
      </div>
    </li>
  );
};
