import React from 'react';
import { useParams } from 'react-router';
import MainForm from '../components/MainForm/MainForm';

function BoardPage() {
  const { id } = useParams();

  return (
    <>
      <p> Это Board Page № {id} </p>
      <MainForm />
    </>
  );
}

export default BoardPage;
