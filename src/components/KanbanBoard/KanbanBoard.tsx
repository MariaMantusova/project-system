import React, { useState } from 'react';
import './KanbanBoard.css';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';

type ColumnType = 'todo' | 'inProgress' | 'done';

type TasksState = Record<ColumnType, string[]>;

const initialTasks: TasksState = {
  todo: ['Задача 1', 'Задача 3'],
  inProgress: ['Задача 4'],
  done: ['Задача 2'],
};

function KanbanBoard() {
  const [tasks, setTasks] = useState<TasksState>(initialTasks);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index)
      return;

    const sourceColumn = [...tasks[source.droppableId as ColumnType]];
    const [movedTask] = sourceColumn.splice(source.index, 1);

    const destinationColumn = [...tasks[destination.droppableId as ColumnType]];
    destinationColumn.splice(destination.index, 0, movedTask);

    setTasks(prev => ({
      ...prev,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destinationColumn,
    }));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">
        {(Object.keys(tasks) as ColumnType[]).map(columnId => (
          <Droppable droppableId={columnId} key={columnId}>
            {provided => (
              <div className="kanban-column" ref={provided.innerRef} {...provided.droppableProps}>
                <h2 className="kanban-column__title">{getTitle(columnId)}</h2>
                {tasks[columnId].map((task, index) => (
                  <Draggable key={task} draggableId={task} index={index}>
                    {provided => (
                      <div
                        className="kanban-task"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {task}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

const getTitle = (id: ColumnType): string => {
  switch (id) {
    case 'todo':
      return 'To do';
    case 'inProgress':
      return 'In progress';
    case 'done':
      return 'Done';
    default:
      return '';
  }
};

export default KanbanBoard;
