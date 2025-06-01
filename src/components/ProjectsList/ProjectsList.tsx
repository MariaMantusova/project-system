import React from 'react';
import './ProjectsList.css';
import ListItem from '../ListItem/ListItem';
import { Link } from 'react-router';
import { IProjectsListProps } from '../../interfaces/propsInterfaces';
import { IBoard } from '../../interfaces/mainInterfaces';

function ProjectsList(props: IProjectsListProps) {
  return (
    <ul className="list">
      {props.boards.map((board: IBoard) => (
        <ListItem key={board.id} title={board.name} id={board.id}>
          <Link to={`/board/${board.id}`} className="list__item__link">
            Перейти к доске &#8594;
          </Link>
        </ListItem>
      ))}
    </ul>
  );
}

export default ProjectsList;
