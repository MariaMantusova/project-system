import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import List from '../components/List/List';
import { IBoard } from '../App';

interface IBoardsPageProps {
  boards: IBoard[];
}

function BoardsPage(props: IBoardsPageProps) {
  return (
    <>
      <Header pageName='boards' />
      <List boards={props.boards} />
      <Footer />
    </>
  );
}

export default BoardsPage;
