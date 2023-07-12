import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Auth from './containers/Auth';
import AdminPage from './containers/AdminPage';
import Header from './containers/Header';
import LessonsPage from './containers/LessonsPage';
import LessonCreator from './containers/LessonCreator';
import './App.scss';

export const App = () => (
  <React.Fragment>
    <Auth>
    <div className="header">
      <Header />
    </div>
    <div className="content-container">
      <Routes>
        <Route path="/login" element={<div>login</div>} />
        <Route path="/lesson/:id" element={<div>lesson</div>} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/create-lesson" element={<LessonCreator />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </div>
    </Auth>
  </React.Fragment>
);
