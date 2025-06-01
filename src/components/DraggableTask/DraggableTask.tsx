import React from 'react';
import './DraggableTask.css';
import { IDraggableTaskProps } from '../../interfaces/propsInterfaces';

export default function DraggableTask({
  task,
  provided,
  onClick,
  className,
  getIssueById,
}: IDraggableTaskProps) {
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
