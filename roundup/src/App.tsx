import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/main';
import LoginPage from './pages/login';

const App: React.FC = () => {
  return (
    <Router>  {}
      <Routes>  {}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
