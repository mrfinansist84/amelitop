import * as React from 'react'
import { Routes, Route } from 'react-router-dom';
import AdminPage from './containers/AdminPage';

export const App = () => (
  <React.Fragment>
      <div id="header-container">
        {/* <Header /> */}
      </div>
      <div className="content-container">
        <Routes>
        <Route path="/" element={(<div>login</div>)} />
          <Route path="/lesson" element={<div>lesson</div>} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </div>
  </React.Fragment>
);
