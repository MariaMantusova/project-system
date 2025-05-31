import React from 'react';
import './Header.css';
import { Link } from 'react-router';
import MainButton from '../MainButton/MainButton';

interface IHeaderProps {
  pageName: string;
  handleOpenPopup: () => void;
}

function Header(props: IHeaderProps) {
  return (
    <header className="header">
      <menu className="header__menu">
        <Link
          className={`header__link ${props.pageName === 'issues' && 'header__link_active'}`}
          to="/issues"
        >
          Все задачи
        </Link>
        <Link
          className={`header__link ${props.pageName === 'boards' && 'header__link_active'}`}
          to="/boards"
        >
          Проекты
        </Link>
      </menu>
      <MainButton handleOpenPopup={props.handleOpenPopup} />
    </header>
  );
}

export default Header;
