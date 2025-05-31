import React, { useEffect, useState } from 'react';
import './KanbanBoard.css';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { IBoardIssue } from '../../pages/BoardPage';

export type ColumnType = 'Backlog' | 'InProgress' | 'Done';
type IssuesState = Record<ColumnType, IBoardIssue[]>;

interface IKanbanBoardProps {
  issues: IBoardIssue[];
  changeIssueStatus: (id: string, status: string) => void;
}

function KanbanBoard({ issues: externalIssues, changeIssueStatus }: IKanbanBoardProps) {
  const [issues, setIssues] = useState<IssuesState>({
    Backlog: [],
    InProgress: [],
    Done: [],
  });

  useEffect(() => {
    if (!externalIssues || !Array.isArray(externalIssues)) return;

    const organized: IssuesState = {
      Backlog: [],
      InProgress: [],
      Done: [],
    };

    for (const issue of externalIssues) {
      organized[issue.status].push(issue);
    }

    setIssues(organized);
  }, [externalIssues]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination || !issues) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index)
      return;

    const sourceColumn = source.droppableId as ColumnType;
    const destinationColumn = destination.droppableId as ColumnType;

    const sourceItems = Array.from(issues[sourceColumn]);
    const destinationItems =
      sourceColumn === destinationColumn ? sourceItems : Array.from(issues[destinationColumn]);

    const [movedIssue] = sourceItems.splice(source.index, 1);

    if (sourceColumn !== destinationColumn) {
      movedIssue.status = destinationColumn;
      changeIssueStatus(movedIssue.id.toString(), destinationColumn)
    }

    destinationItems.splice(destination.index, 0, movedIssue);

    setIssues(prev => {
      if (!prev) return prev;

      return {
        ...prev,
        [sourceColumn]: sourceItems,
        [destinationColumn]: destinationItems,
      };
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">
        {(Object.keys(issues) as ColumnType[]).map(columnId => (
          <Droppable droppableId={columnId} key={columnId}>
            {provided => (
              <div className="kanban-column" ref={provided.innerRef} {...provided.droppableProps}>
                <h2 className="kanban-column__title">{getTitle(columnId)}</h2>
                {issues[columnId].map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                    {provided => (
                      <div
                        className="kanban-task"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {task.title}
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
    case 'Backlog':
      return 'To do';
    case 'InProgress':
      return 'In progress';
    case 'Done':
      return 'Done';
    default:
      return '';
  }
};

export default KanbanBoard;
