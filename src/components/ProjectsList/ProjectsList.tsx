import React from 'react';
import './ProjectsList.css';
import ListItem from '../ListItem/ListItem';
import { IBoard } from '../../App';
import { Link } from 'react-router';

interface IProjectsListProps {
  boards: IBoard[];
}

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
