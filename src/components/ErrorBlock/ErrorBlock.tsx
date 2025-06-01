import React from 'react';
import './ErrorBlock.css';
import { Link } from 'react-router';

function ErrorBlock() {
  return (
    <section className="error-block">
      <p className="error-block_text">Страница не найдена</p>
      <Link className="error-block_link" to={'/boards'}>
        &#8592; &#160; На страницу досок
      </Link>
    </section>
  );
}

export default ErrorBlock;
