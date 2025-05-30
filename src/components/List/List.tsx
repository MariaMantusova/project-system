import React from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';
import { IBoard } from '../../App';
import { Link } from 'react-router';

interface IListProps {
  children?: React.ReactNode;
  boards: IBoard[];
}

function List(props: IListProps) {
  return (
    <ul className="list">
      {props.boards.map((board: IBoard) => (
        <ListItem key={board.id} board={board}>
          <Link to={`/board/${board.id}`} className="list__item__link">
            Перейти к доске &#8594;
          </Link>
        </ListItem>
      ))}
      {props.children}
    </ul>
  );
}

export default List;
