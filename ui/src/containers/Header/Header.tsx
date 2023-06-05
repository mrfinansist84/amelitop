import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Popover from '../../components/Popover';
import './Header.scss';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleLogout = (targetPage: string) => {
    // if logout - request for logout
    closeMenu();
    navigate(`/${targetPage}`);
  };

  const closeMenu = () => {
    setShow(false);
  };

  return (
    <nav className="navbar navbar-light bg-light header-container">
      <div className="container-fluid">
        <a className="navbar-brand">
          AMELITOP <span>(All English In One Place)</span>
        </a>
        <div className="navbar-user-info">
          <div className="navbar-user-info__login">userName</div>
          <Popover
            placement="left"
            show={show}
            closeMenu={closeMenu}
            body={
              <ul className="available-pages">
                <li className="available-pages__item" onClick={() => handleLogout('profile')}>
                  Profile
                </li>
                <li className="available-pages__item" onClick={() => handleLogout('lessons')}>
                  Lessons
                </li>
                <li className="available-pages__item" onClick={() => handleLogout('login')}>
                  Logout
                </li>
              </ul>
            }
            btnName="avatar"
            btnClass="navbar-user-info__avatar"
          >
            <Button className="navbar-user-info__avatar" onClick={() => setShow(true)}>
              avatar
            </Button>
          </Popover>
        </div>
      </div>
    </nav>
  );
};
