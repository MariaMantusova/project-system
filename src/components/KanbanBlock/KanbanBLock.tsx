import React from 'react';
import './KanbanBlock.css';
import KanbanBoard from '../KanbanBoard/KanbanBoard';
import { IKanbanBlockProps } from '../../interfaces/propsInterfaces';

function KanbanBlock(props: IKanbanBlockProps) {
  return (
    <section className="board-container">
      <h1 className="board__title">{props.boardTitle}</h1>
      <KanbanBoard issues={props.boardIssues} changeIssueStatus={props.changeIssueStatus} />
    </section>
  );
}

export default KanbanBlock;
