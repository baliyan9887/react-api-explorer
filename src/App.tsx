import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ApiDetails from './pages/APIDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/:providerName" element={<ApiDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
