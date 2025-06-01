import React from 'react';
import './KanbanBlock.css';
import KanbanBoard from '../KanbanBoard/KanbanBoard';
import { IKanbanBlockProps } from '../../interfaces/propsInterfaces';

function KanbanBlock(props: IKanbanBlockProps) {
  return (
    <section className="board-container">
      <h1 className="board__title">{props.boardTitle}</h1>
      <KanbanBoard
        className="kanban-task_button"
        issues={props.boardIssues}
        getIssueById={props.getIssueById}
        handleOpenPopup={props.handleOpenPopup}
        changeIssueStatus={props.changeIssueStatus}
      />
    </section>
  );
}

export default KanbanBlock;
