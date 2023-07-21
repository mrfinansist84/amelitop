import * as React from 'react';
import { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { type IRootReducer } from '~/rootReducer';
import {
  getAllUsersRequest,
  createUserRequest,
  updateUserRequest,
  deleteUserRequest,
  updateUserStatusRequest,
  toggleBannerAction
} from './actions';

import Loader from '~/components/Loader';
import Banner from '~/components/Banner';

import Profile from '~/components/Profile';
import UserColumn from './components/UserColumn';
import { type User } from '~/global/types';
import { USER_TYPES } from './constants';
import './AdminPage.scss';

export const AdminPage: React.FC = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [user, setUser] = useState(null);
  const [isCreatingMode, setCreateMode] = useState(false);
  const dispatch = useDispatch();
  const { userList, loading, showBanner, bannerStatus, bannerMessage } = useSelector(
    (state: IRootReducer) => state.adminPageReducer
  );

  useEffect(() => {
    dispatch(getAllUsersRequest());
  }, [dispatch]);

  const getUserColumnAccordingType = useCallback(
    (userType: string) => userList.filter((item) => item.profile.role === userType),
    [userList]
  );

  const deleteUser = (user: User) => {
    dispatch(deleteUserRequest(user));
  };

  const blockUser = (id: string) => {
    dispatch(updateUserStatusRequest(true, id));
  };

  const unblockUser = (id: string) => {
    dispatch(updateUserStatusRequest(false, id));
  };

  const editUser = (user: User, createMode: boolean) => {
    setCreateMode(Boolean(createMode));
    setUser(user);
    setOpenProfile(true);
  };

  const doActionOnUser = (user: User, actionType: string, createMode: boolean) => {
    const action = {
      delete: () => deleteUser(user),
      block: () => blockUser(user.id),
      edit: () => editUser(user, createMode),
      unblock: () => unblockUser(user.id)
    };

    action[actionType as keyof typeof action]();
  };

  const closeBanner = (state: boolean) => {
    dispatch(toggleBannerAction(state, '', ''));
  };

  return (
    <>
      {loading && <Loader />}
      {showBanner && (
        <Banner
          show={showBanner}
          closeBanner={closeBanner}
          message={bannerMessage}
          status={bannerStatus}
          autoHide={false}
        />
      )}
      {openProfile && (
        <Profile
          user={user}
          creatingMode={isCreatingMode}
          onClose={() => setOpenProfile(false)}
          show={openProfile}
          createProfile={createUserRequest}
          updateProfile={updateUserRequest}
        />
      )}
      <div className="admin-page container-fluid">
        <div className="row">
          <UserColumn
            userType={USER_TYPES.ADMIN}
            userList={getUserColumnAccordingType(USER_TYPES.ADMIN)}
            doAction={doActionOnUser}
          />
          <UserColumn
            userType={USER_TYPES.STUDENT}
            userList={getUserColumnAccordingType(USER_TYPES.STUDENT)}
            doAction={doActionOnUser}
          />
          <UserColumn
            userType={USER_TYPES.TEACHER}
            userList={getUserColumnAccordingType(USER_TYPES.TEACHER)}
            doAction={doActionOnUser}
          />
        </div>
      </div>
    </>
  );
};
