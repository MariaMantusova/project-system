import React, { useEffect, useState } from 'react';
import './PopupForm.css';
import MainForm from '../MainForm/MainForm';
import { Link } from 'react-router';
import { IPopupFormProps } from '../../interfaces/propsInterfaces';

function PopupForm(props: IPopupFormProps) {
  const [boardId, setBoardId] = useState<number | null>();
  function handleClose() {
    props.setIsOpened(false);
    if (props.setCurrentIssue) props.setCurrentIssue(null);
  }

  useEffect(() => {
    if (props.currentIssue) {
      props.boards.forEach((item) => {
        if (item.name === props.currentIssue?.boardName) setBoardId(item.id);
      })
    }
  }, [props.currentIssue]);

  return (
    <div className={`popup-background ${props.isOpened && 'popup-background_visible'}`}>
      <section className="popup">
        <p className="close-icon" onClick={handleClose}>
          &#x2715;
        </p>
        <h1 className="popup__title">
          {props.currentIssue ? 'Редактировать задачу' : 'Создать задачу'}
        </h1>
        <MainForm
          currentIssue={props.currentIssue}
          users={props.users}
          boards={props.boards}
          handleClose={handleClose}
          createIssue={props.createIssue}
          changeIssue={props.changeIssue}
        />
        {props.currentIssue && (
          <Link className="popup__link" to={`/board/${boardId}`} onClick={handleClose}>
            Перейти на доску
          </Link>
        )}
      </section>
    </div>
  );
}

export default PopupForm;
