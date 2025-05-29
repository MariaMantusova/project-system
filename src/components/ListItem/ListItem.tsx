import React from 'react';
import "./ListItem.css";

function ListItem(props: {children?: React.ReactNode}) {
  return (
    <li className="list__item">
      <p className="list__item__title">Название задачи</p>
      {props.children}
    </li>
  )
}

export default ListItem;