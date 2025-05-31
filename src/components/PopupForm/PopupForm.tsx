import React from 'react';
import './PopupForm.css';
import MainForm, { IUser } from '../MainForm/MainForm';
import { Link } from 'react-router';
import { INewIssue } from '../../utils/IssuesApi';
import { IBoard } from '../../App';

interface IPopupFormProps {
  title: string;
  users: IUser[];
  isOpened: boolean;
  boards: IBoard[];
  createIssue: (newIssue: INewIssue) => void;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

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
