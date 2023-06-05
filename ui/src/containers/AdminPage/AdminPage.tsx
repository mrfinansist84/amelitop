import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type IRootReducer } from '../../rootReducer';
import { getAllUsersRequest } from './actions';

export const AdminPage = () => {
  const dispatch = useDispatch()
  const { userList } = useSelector((state: IRootReducer) => state.adminPageReducer)

  useEffect(() => {
    dispatch(getAllUsersRequest())
  }, []);

  return (<div>Admin Page {userList}</div>)
};
