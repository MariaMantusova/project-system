import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import BoardPage from './pages/BoardPage';
import BoardsPage from './pages/BoardsPage';
import IssuesPage from './pages/IssuesPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path="/boards" element={<BoardsPage />} />
      <Route path="/board/:id" element={<BoardPage />} />
      <Route path="/issues" element={<IssuesPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
