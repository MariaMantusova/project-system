import React from 'react';
import './Header.css';
import { Link } from 'react-router';
import MainButton from '../MainButton/MainButton';

function Header() {
  return (
    <header className="header">
      <menu className="header__menu">
        <Link className="header__link" to="/issues">
          Все задачи
        </Link>
        <Link className="header__link" to="/boards">
          Проекты
        </Link>
      </menu>
      <MainButton />
    </header>
  );
}

export default Header;
