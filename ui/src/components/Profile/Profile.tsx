import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { type User } from '~/global/types';
import Form from './components/Form';
import Modal from '../Modal';
import { initialUser } from '~/global/constants';
import './Profile.scss';

interface Props {
  user: User;
  show: boolean;
  onClose: (flag: boolean) => void;
  readOnlyMode?: boolean;
  creatingMode?: boolean;
  createProfile?: (data: User) => any;
  updateProfile?: (data: User) => any;
}

export const Profile: React.FC<Props> = (props) => {
  const transformToFlatData = (user: any) => ({ ...user, ...user.profile });

  const [data, setFormData] = useState(transformToFlatData(props.user));
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData(transformToFlatData(props.user));
  }, [props.user]);

  const handleChanges = (e: any) => {
    const updateData = { ...data, [e.target.id]: e.target.value };
    setFormData(updateData);
  };

  const transformDataForRequest = (user: any) => {
    return {
      id: user.id,
      email: user.email,
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name,
      profile: {
        phone: user.phone,
        role: user.role,
        is_blocked: user.is_blocked
      }
    };
  };

  const saveChangesToProfile = () => {
    if (props.creatingMode) {
      dispatch(props.createProfile(transformDataForRequest(data)));
    } else {
      dispatch(props.updateProfile(transformDataForRequest(data)));
    }
    closeProfile();
  };

  const closeProfile = () => {
    props.onClose(false);
    setFormData(initialUser);
  };

  return (
    <Modal
      show={props.show}
      onHide={closeProfile}
      onSave={saveChangesToProfile}
      header="Profile Userme Name"
      isShowHeader
      isShowFooter={!props.readOnlyMode}
      btnCloseName="Cancel"
      btnSaveName="Save"
      body={<Form handleChanges={handleChanges} user={data} readOnlyMode={props.readOnlyMode} />}
    />
  );
};
