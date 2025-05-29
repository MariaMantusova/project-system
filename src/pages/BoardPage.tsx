import React from 'react';
import { useParams } from 'react-router';

function BoardPage() {
  const { id } = useParams();

  return <p> Это Board Page № {id} </p>;
}

export default BoardPage;
