import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProjectsList from '../components/ProjectsList/ProjectsList';
import { IBoardsPageProps } from '../interfaces/propsInterfaces';
import PopupForm from '../components/PopupForm/PopupForm';

function BoardsPage(props: IBoardsPageProps) {
  return (
    <>
      <Header pageName="boards" handleOpenPopup={props.handleOpenPopup} />
      <ProjectsList boards={props.boards} />
      <Footer />
      <PopupForm
        title="Создать задачу"
        users={props.users}
        isOpened={props.isPopupOpen}
        boards={props.boards}
        createIssue={props.createIssue}
        setIsOpened={props.setIsPopupOpen}
      />
    </>
  );
}

export default BoardsPage;
