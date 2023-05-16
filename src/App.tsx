import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResourcePage from './pages/ResourcePage';
import BaseLayout from './components/BaseLayout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resource" element={<ResourcePage />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
};

export default App;
