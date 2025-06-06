import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import BoardPage from '../../pages/BoardPage';
import BoardsPage from '../../pages/BoardsPage';
import IssuesPage from '../../pages/IssuesPage';
import ErrorPage from '../../pages/ErrorPage';
import { BoardApi } from '../../utils/BoardsApi';
import { IssueApi } from '../../utils/IssuesApi';
import { UserApi } from '../../utils/UsersApi';
import {
  IBoard,
  IBoardIssue,
  IIssue,
  INewIssue,
  IUpdateIssue,
  IUser,
} from '../../interfaces/mainInterfaces';

function App() {
  const [boards, setBoards] = useState<IBoard[]>([]);
  const [issues, setIssues] = useState<IIssue[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [boardIssues, setBoardIssues] = useState<IBoardIssue[]>([]);
  const [currentIssue, setCurrentIssue] = useState<IIssue | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  useEffect(() => {
    getBoards();
    getUsers();
    getIssues();
  }, []);

  useEffect(() => {
    getIssues();
  }, [currentIssue]);

  function getBoardById(id: string) {
    BoardApi.getBoardById(id)
      .then(items => setBoardIssues(items.data))
      .catch(err => alert(err));
  }

  const changeIssueStatus = async (id: string, status: string): Promise<void> => {
    try {
      const data = await IssueApi.changeIssueStatus(id, status);
      setBoardIssues(data);
    } catch (error) {
      console.error('Ошибка при обновлении задачи:', error);
      throw error;
    }
  };

  function getBoards() {
    BoardApi.getBoards()
      .then(items => setBoards(items.data))
      .catch(err => alert(err));
  }

  function getIssues() {
    IssueApi.getIssues()
      .then(items => setIssues(items.data))
      .catch(err => alert(err));
  }

  function getUsers() {
    UserApi.getUsers()
      .then(items => setUsers(items.data))
      .catch(err => alert(err));
  }

  function createIssue(newIssue: INewIssue) {
    IssueApi.createIssue(newIssue)
      .then(res => {
        const createdId = res.data.id;
        return IssueApi.getIssueById(createdId);
      })
      .then(fullIssue => {
        if (issues) {
          setIssues([...issues, fullIssue.data]);
        }
      })
      .catch(err => alert(err));
  }

  function getIssueById(id: string) {
    IssueApi.getIssueById(id)
      .then(issue => setCurrentIssue(issue.data))
      .catch(err => alert(err));
  }

  function updateIssue(id: string, updateIssue: IUpdateIssue) {
    IssueApi.updateIssue(id, updateIssue)
      .then(res => {
        return IssueApi.getIssueById(id);
      })
      .then(fullIssue => {
        if (issues) {
          setIssues([...issues, fullIssue.data]);
        }
      })
      .catch(err => alert(err));
  }

  function handleOpenPopup() {
    setIsPopupOpen(true);
  }

  return (
    <Routes>
      <Route
        path="/boards"
        element={
          <BoardsPage
            boards={boards}
            handleOpenPopup={handleOpenPopup}
            users={users}
            createIssue={createIssue}
            setIsPopupOpen={setIsPopupOpen}
            isPopupOpen={isPopupOpen}
          />
        }
      />
      <Route
        path="/board/:id"
        element={
          <BoardPage
            issues={issues}
            changeIssue={updateIssue}
            setCurrentIssue={setCurrentIssue}
            currentIssue={currentIssue}
            getIssueById={getIssueById}
            setIsPopupOpen={setIsPopupOpen}
            isPopupOpen={isPopupOpen}
            handleOpenPopup={handleOpenPopup}
            users={users}
            createIssue={createIssue}
            boards={boards}
            changeIssueStatus={changeIssueStatus}
            getBoardById={getBoardById}
            boardIssues={boardIssues}
          />
        }
      />
      <Route
        path="/issues"
        element={
          <IssuesPage
            changeIssue={updateIssue}
            setCurrentIssue={setCurrentIssue}
            createIssue={createIssue}
            setIsPopupOpen={setIsPopupOpen}
            isPopupOpen={isPopupOpen}
            users={users}
            handleOpenPopup={handleOpenPopup}
            issues={issues}
            boards={boards}
            getIssueById={getIssueById}
            currentIssue={currentIssue}
          />
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
