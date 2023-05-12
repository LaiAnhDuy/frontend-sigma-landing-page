import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ResourcePage from '../pages/ResourcePage/ResourcePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resource" element={<ResourcePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
