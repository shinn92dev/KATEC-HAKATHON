import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/main';
import LoginPage from './pages/login';
import UserProfile from './pages/profile';
import UserMainPage from './pages/userMain';

const App: React.FC = () => {
  return (
    <Router>  {}
      <Routes>  {}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/usermain" element={<UserMainPage/>} />


      </Routes>
    </Router>
  );
}

export default App;
