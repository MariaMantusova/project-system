import React from 'react';
import './MainButton.css';
import { IMainButtonProps } from '../../interfaces/propsInterfaces';

function MainButton(props: IMainButtonProps) {
  return (
    <button className="header__button" onClick={props.handleOpenPopup}>
      Создать задачу
    </button>
  );
}

export default MainButton;
