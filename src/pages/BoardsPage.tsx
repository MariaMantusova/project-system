import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProjectsList from '../components/ProjectsList/ProjectsList';
import { IBoardsPageProps } from '../interfaces/propsInterfaces';

function BoardsPage(props: IBoardsPageProps) {
  return (
    <>
      {/*<Header pageName="boards" />*/}
      <ProjectsList boards={props.boards} />
      <Footer />
    </>
  );
}

export default BoardsPage;
