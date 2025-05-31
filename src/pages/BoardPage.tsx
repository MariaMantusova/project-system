import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PopupForm from '../components/PopupForm/PopupForm';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import KanbanBlock from '../components/KanbanBlock/KanbanBLock';
import { IBoardPageProps } from '../interfaces/propsInterfaces';
import { IBoardIssue } from '../interfaces/mainInterfaces';

function BoardPage(props: IBoardPageProps) {
  const { id } = useParams<string>();
  const boardIssues: IBoardIssue[] = props.boardIssues;
  const [title, setTitle] = useState<string>('');
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  useEffect(() => {
    if (id) props.getBoardById(id);
  }, [id]);

  useEffect(() => {
    if (!id || props.boards.length === 0) return;

    const board = props.boards.find(b => b.id === +id);
    if (board) {
      setTitle(board.name);
    }
  }, [id, props.boards]);

  function handleOpenPopup() {
    setIsPopupOpen(true);
  }

  return (
    <>
      <Header pageName="board" handleOpenPopup={handleOpenPopup} />
      <KanbanBlock
        changeIssueStatus={props.changeIssueStatus}
        boardIssues={boardIssues}
        boardTitle={title}
      />
      <PopupForm
        boards={props.boards}
        createIssue={props.createIssue}
        setIsOpened={setIsPopupOpen}
        title="Создать задачу"
        isOpened={isPopupOpen}
        users={props.users}
      />
      <Footer />
    </>
  );
}

export default BoardPage;
