import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import BoardPage, { IBoardIssue } from './pages/BoardPage';
import BoardsPage from './pages/BoardsPage';
import IssuesPage from './pages/IssuesPage';
import ErrorPage from './pages/ErrorPage';
import { BoardApi } from './utils/BoardsApi';
import { IssueApi } from './utils/IssuesApi';

export interface IBoard {
  description: string;
  id: number;
  name: string;
  taskCount: number;
}

export interface IIssue {
  assignee: IAssignee;
  boardId: number;
  boardName: string;
  description: string;
  id: number;
  priority: string;
  status: string;
  title: string;
}

export interface IAssignee {
  avatarUrl: string;
  email: string;
  fullName: string;
  id: number;
}

function App() {
  const [boards, setBoards] = useState<IBoard[]>([]);
  const [issues, setIssues] = useState<IIssue[]>([]);
  const [boardIssues, setBoardIssues] = useState<IBoardIssue[]>([]);

  useEffect(() => {
    getBoards();
    getIssues();
  }, []);

  function getBoardById(id: string) {
    BoardApi.getBoardById(id)
      .then(items => setBoardIssues(items.data))
      .catch(err => console.log(err));
  }

  function changeIssueStatus(id: string, status: string) {
    IssueApi.changeIssueStatus(id, status)
      .then(items => setBoardIssues(items.data))
      .catch(err => console.log(err));
  }

  function getBoards() {
    BoardApi.getBoards()
      .then(items => setBoards(items.data))
      .catch(err => console.log(err));
  }

  function getIssues() {
    IssueApi.getIssues()
      .then(items => setIssues(items.data))
      .catch(err => console.log(err));
  }

  return (
    <Routes>
      <Route path="/boards" element={<BoardsPage boards={boards} />} />
      <Route
        path="/board/:id"
        element={
          <BoardPage
            boards={boards}
            changeIssueStatus={changeIssueStatus}
            getBoardById={getBoardById}
            boardIssues={boardIssues}
          />
        }
      />
      <Route path="/issues" element={<IssuesPage issues={issues} boards={boards} />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
