import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleBannerAction, pollTokenStop, getAccessTokenSuccess, pollTokenStart } from './actions';

import { type IRootReducer } from '../../rootReducer';
import { LoginForm } from './components/LoginForm';
import Loader from '../../components/Loader';
import Banner from '../../components/Banner';
import './Auth.scss';

export const Auth: React.FC<any> = ({ children }) => {
  const dispatch = useDispatch();
  const {
    isAuthenticated,
    loading,
    showBanner,
    bannerStatus,
    bannerMessage
  } = useSelector((state: IRootReducer) => state.authenticatedReducer);

  const closeBanner = (state: boolean) => {
    dispatch(toggleBannerAction(state, '', ''));
  }

  const checkAuth = () => {
    const authData = JSON.parse(localStorage.getItem('auth'));
    if (authData && Date.now() - authData.date < 240000) {
      dispatch(getAccessTokenSuccess({ access: authData.access, refresh: authData.refresh }));
      dispatch(pollTokenStart());
    }
  };

  useEffect(() => {
    checkAuth()
    return () => {
      dispatch(pollTokenStop());
      localStorage.clear();
    };
  }, [])

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
    />)}
      <div>
        {!isAuthenticated && <div className="login-container"><LoginForm /></div>}
        {isAuthenticated && (children)}
      </div>
      </>
  )
}
