import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PopupForm from '../components/PopupForm/PopupForm';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import KanbanBlock from '../components/KanbanBlock/KanbanBLock';
import { IBoardPageProps } from '../interfaces/propsInterfaces';

function BoardPage(props: IBoardPageProps) {
  const { id } = useParams<string>();
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    if (id) props.getBoardById(id);
  }, [id, props.currentIssue, props.issues]);

  useEffect(() => {
    if (!id || props.boards.length === 0) return;

    const board = props.boards.find(b => b.id === +id);
    if (board) setTitle(board.name);
  }, [id, props.boards]);

  return (
    <>
      <Header pageName="board" handleOpenPopup={props.handleOpenPopup} />
      <KanbanBlock
        changeIssueStatus={props.changeIssueStatus}
        boardIssues={props.boardIssues}
        boardTitle={title}
        getIssueById={props.getIssueById}
        handleOpenPopup={props.handleOpenPopup}
      />
      <PopupForm
        changeIssue={props.changeIssue}
        setCurrentIssue={props.setCurrentIssue}
        boards={props.boards}
        createIssue={props.createIssue}
        setIsOpened={props.setIsPopupOpen}
        title="Создать задачу"
        isOpened={props.isPopupOpen}
        users={props.users}
        currentIssue={props.currentIssue}
      />
      <Footer />
    </>
  );
}

export default BoardPage;
