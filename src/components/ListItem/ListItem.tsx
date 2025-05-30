import React from 'react';
import './ListItem.css';
import { IBoard } from '../../App';

interface IListItemProps {
  board: IBoard;
  children?: React.ReactNode;
}

function ListItem(props: IListItemProps) {
  return (
    <li className="list__item">
      <p className="list__item__title">{`${props.board.id}. ${props.board.name}`}</p>
      {props.children}
    </li>
  );
}

export default ListItem;
