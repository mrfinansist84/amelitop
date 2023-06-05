import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminPage from './containers/AdminPage';
import Header from './containers/Header';
import './App.scss';

export const App = () => (
  <React.Fragment>
    <div className="header">
      <Header />
    </div>
    <div className="content-container">
      <Routes>
        <Route path="/login" element={<div>login</div>} />
        <Route path="/lesson/:id" element={<div>lesson</div>} />
        <Route path="/lessons" element={<div>lessons</div>} />
        <Route path="/profile" element={<div>profile</div>} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </div>
  </React.Fragment>
);
