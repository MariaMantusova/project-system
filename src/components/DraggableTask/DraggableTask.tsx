import React from 'react';
import './DraggableTask.css';
import { DraggableProvided } from '@hello-pangea/dnd';
import { IBoardIssue } from '../../interfaces/mainInterfaces';

function DraggableTask({
  task,
  provided,
  onClick,
  className,
  getIssueById,
}: {
  task: IBoardIssue;
  provided: DraggableProvided;
  onClick: () => void;
  className?: string;
  getIssueById: (id: string) => void;
}) {
  function handleClick() {
    getIssueById(task.id.toString());
    onClick();
  }

  return (
    <div
      onClick={handleClick}
      className={`kanban-task ${className ?? ''}`}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {task.title}
    </div>
  );
}

export default DraggableTask;
