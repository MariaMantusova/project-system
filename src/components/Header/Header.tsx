import React from 'react';
import './Header.css';
import { Link } from 'react-router';

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
      <button className="header__button">Создать задачу</button>
    </header>
  );
}

export default Header;
