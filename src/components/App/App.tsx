import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import BoardPage, { IBoardIssue } from '../../pages/BoardPage';
import BoardsPage from '../../pages/BoardsPage';
import IssuesPage from '../../pages/IssuesPage';
import ErrorPage from '../../pages/ErrorPage';
import { BoardApi } from '../../utils/BoardsApi';
import { INewIssue, IssueApi } from '../../utils/IssuesApi';
import { UserApi } from '../../utils/UsersApi';
import { IUser } from '../MainForm/MainForm';

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
  const [users, setUsers] = useState<IUser[]>([]);
  const [boardIssues, setBoardIssues] = useState<IBoardIssue[]>([]);

  useEffect(() => {
    getBoards();
    getIssues();
    getUsers();
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

  function getUsers() {
    UserApi.getUsers()
      .then(items => setUsers(items.data))
      .catch(err => console.log(err));
  }

  function createIssue(newIssue: INewIssue) {
    IssueApi.createIssue(newIssue)
      .then(items => {
        if (issues) {
          setIssues([...issues, items.data]);
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <Routes>
      <Route path="/boards" element={<BoardsPage boards={boards} />} />
      <Route
        path="/board/:id"
        element={
          <BoardPage
            users={users}
            createIssue={createIssue}
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
