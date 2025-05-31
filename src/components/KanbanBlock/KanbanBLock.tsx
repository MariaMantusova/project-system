import React from 'react';
import './KanbanBlock.css';
import KanbanBoard from '../KanbanBoard/KanbanBoard';
import { IBoardIssue } from '../../pages/BoardPage';

interface IKanbanBlockProps {
  boardIssues: IBoardIssue[];
  boardTitle: string;
  changeIssueStatus: (id: string, status: string) => void;
}

function KanbanBlock(props: IKanbanBlockProps) {
  return (
    <section className="board-container">
      <h1 className="board__title">{props.boardTitle}</h1>
      <KanbanBoard issues={props.boardIssues} changeIssueStatus={props.changeIssueStatus} />
    </section>
  );
}

export default KanbanBlock;
