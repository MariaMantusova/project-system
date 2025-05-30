import React from 'react';
import './ListItem.css';

interface IListItemProps {
  id: number;
  title: string;
  children?: React.ReactNode;
}

function ListItem(props: IListItemProps) {
  return (
    <li className="list__item">
      <p className="list__item__title">{`${props.id}. ${props.title}`}</p>
      {props.children}
    </li>
  );
}

export default ListItem;
