import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/main';
import LoginPage from './pages/login';
import UserProfile from './pages/profile';

const App: React.FC = () => {
  return (
    <Router>  {}
      <Routes>  {}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfile />} />

      </Routes>
    </Router>
  );
}

export default App;
