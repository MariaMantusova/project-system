import React from 'react';
import './PopupForm.css';
import MainForm from '../MainForm/MainForm';
import { Link } from 'react-router';

function PopupForm() {
  return (
    <div className="popup-background">
      <section className="popup">
        <p className="close-icon">&#x2715;</p>
        <h1 className="popup__title">Cоздать задачу</h1>
        <MainForm />
        <Link className="popup__link" to="/board/9">
          Перейти на доску
        </Link>
      </section>
    </div>
  );
}

export default PopupForm;
