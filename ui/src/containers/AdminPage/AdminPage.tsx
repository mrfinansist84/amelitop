import * as React from 'react';
import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type IRootReducer } from '../../rootReducer';
import { getAllUsersRequest } from './actions';
import UserColumn from './components/UserColumn';

export const AdminPage = () => {
  const dispatch = useDispatch();
  const { userList } = useSelector((state: IRootReducer) => state.adminPageReducer);

  useEffect(() => {
    dispatch(getAllUsersRequest());
  }, []);

  const getUserColumnAccordingType = useCallback(
    (userType: string) => {
      return userList.filter((item) => item.userType === userType);
    },
    [userList]
  );

  const deleteUser = (id: string) => {
    console.log('deleteUser', id);
  };

  const blockUser = (id: string) => {
    console.log('blockUser', id);
  };

  const editUser = (id: string) => {
    console.log('editUser', id);
  };

  const doActionOnUser = (id: string, actionType: string) => {
    const action = {
      delete: () => deleteUser(id),
      block: () => blockUser(id),
      edit: () => editUser(id)
    };

    action[actionType as keyof typeof action]();
  };

  return (
    <div className="admin-page container-fluid">
      <div className="row">
        <UserColumn userType="admin" userList={getUserColumnAccordingType('admin')} doAction={doActionOnUser} />
        <UserColumn userType="student" userList={getUserColumnAccordingType('student')} doAction={doActionOnUser} />
        <UserColumn userType="teacher" userList={getUserColumnAccordingType('teacher')} doAction={doActionOnUser} />
      </div>
    </div>
  );
};
