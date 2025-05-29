import React from 'react';
import { useParams } from 'react-router';
import PopupForm from '../components/PopupForm/PopupForm';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function BoardPage() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <p> Это Board Page № {id} </p>
      <PopupForm />
      <Footer />
    </>
  );
}

export default BoardPage;
