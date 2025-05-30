import React from 'react';
import { useParams } from 'react-router';
import PopupForm from '../components/PopupForm/PopupForm';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import KanbanBlock from '../components/KanbanBlock/KanbanBLock';

function BoardPage() {
  const { id } = useParams();

  return (
    <>
      {/*<Header />*/}
      <KanbanBlock />
      <PopupForm />
      <Footer />
    </>
  );
}

export default BoardPage;
