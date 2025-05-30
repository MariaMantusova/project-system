import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import BoardPage from './pages/BoardPage';
import BoardsPage from './pages/BoardsPage';
import IssuesPage from './pages/IssuesPage';
import ErrorPage from './pages/ErrorPage';
import { BoardApi } from './utils/BoardsApi';

export interface IBoard {
  description: string;
  id: number;
  name: string;
  taskCount: number;
}

function App() {
  const [boards, setBoards] = useState<IBoard[]>([]);

  useEffect(() => {
    getBoards();
  }, []);

  function getBoards() {
    BoardApi.getBoards()
      .then(items => {
        setBoards(items.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <Routes>
      <Route path="/boards" element={<BoardsPage boards={boards} />} />
      <Route path="/board/:id" element={<BoardPage />} />
      <Route path="/issues" element={<IssuesPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
