import React from 'react';
import './PopupForm.css';
import MainForm from '../MainForm/MainForm';
import { Link } from 'react-router';
import { IPopupFormProps } from '../../interfaces/propsInterfaces';

function PopupForm(props: IPopupFormProps) {
  function handleClose() {
    props.setIsOpened(false);
  }

  return (
    <div className={`popup-background ${props.isOpened && 'popup-background_visible'}`}>
      <section className="popup">
        <p className="close-icon" onClick={handleClose}>
          &#x2715;
        </p>
        <h1 className="popup__title">{props.title}</h1>
        <MainForm
          users={props.users}
          boards={props.boards}
          handleClose={handleClose}
          createIssue={props.createIssue}
        />
        <Link className="popup__link" to="/board/9">
          Перейти на доску
        </Link>
      </section>
    </div>
  );
}

export default PopupForm;
