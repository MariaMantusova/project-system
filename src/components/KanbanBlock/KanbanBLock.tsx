import React from 'react';
import './KanbanBlock.css';
import KanbanBoard from '../KanbanBoard/KanbanBoard';

function KanbanBlock() {
  return (
    <section className="board-container">
      <h1 className="board__title">Название проекта</h1>
      <KanbanBoard />
    </section>
  );
}

export default KanbanBlock;
