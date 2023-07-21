import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

import { logoutRequest } from '~/containers/Auth/actions';
import { type User } from '~/global/types';
import Profile from '~/components/Profile';
import Popover from '~/components/Popover';
import './Header.scss';

const mockUser: User = {
  id: '123',
  email: '23',
  password: '123',
  first_name: 'fdgdfg',
  last_name: '324',
  profile: {
    phone: '234234343',
    role: '0',
    is_blocked: false
  }
};

// after autharization we get in store current user and use him here
// should add mechanizm for checking and updating current user
export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const handleNavigation = (targetPage: string) => {
    if (targetPage === 'profile') {
      setOpenProfile(true); // open modal with users data
    }

    if (targetPage === 'logout') {
      dispatch(logoutRequest());
      localStorage.clear();
    }

    if (targetPage === 'lessons') {
      navigate('/lessons');
    }

    if (targetPage === 'admin') {
      navigate('/admin');
    }

    closeMenu();
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      {openProfile && <Profile user={mockUser} readOnlyMode onClose={() => setOpenProfile(false)} show={openProfile} />}
      <nav className="navbar navbar-light bg-light header-container">
        <div className="container-fluid">
          <a className="navbar-brand">
            AMELITOP <span>(All English In One Place)</span>
          </a>
          <div className="navbar-user-info">
            <div className="navbar-user-info__login">userName</div>
            <Popover
              placement="left"
              show={showMenu}
              closeMenu={closeMenu}
              body={
                <ul className="available-pages">
                  <li className="available-pages__item" onClick={() => handleNavigation('admin')}>
                    Admin
                  </li>
                  <li className="available-pages__item" onClick={() => handleNavigation('profile')}>
                    Profile
                  </li>
                  <li className="available-pages__item" onClick={() => handleNavigation('lessons')}>
                    Lessons
                  </li>
                  <li className="available-pages__item" onClick={() => handleNavigation('logout')}>
                    Logout
                  </li>
                </ul>
              }
            >
              <Button className="navbar-user-info__avatar" onClick={() => setShowMenu(true)}>
                avatar
              </Button>
            </Popover>
          </div>
        </div>
      </nav>
    </>
  );
};
