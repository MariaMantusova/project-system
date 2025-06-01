import React, { useEffect, useState } from 'react';
import './KanbanBoard.css';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { IBoardIssue } from '../../interfaces/mainInterfaces';
import { IKanbanBoardProps } from '../../interfaces/propsInterfaces';
import DraggableTask from '../DraggableTask/DraggableTask';

export type ColumnType = 'Backlog' | 'InProgress' | 'Done';
type IssuesState = Record<ColumnType, IBoardIssue[]>;

function KanbanBoard({
  issues: externalIssues,
  changeIssueStatus,
  getIssueById,
  handleOpenPopup,
  className,
}: IKanbanBoardProps) {
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

  const onDragEnd = async (result: DropResult) => {
    const { source, destination } = result;

    if (!destination || !issues) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index)
      return;

    const sourceColumn = source.droppableId as ColumnType;
    const destinationColumn = destination.droppableId as ColumnType;

    const prevIssues: IssuesState = {
      Backlog: [...issues.Backlog],
      InProgress: [...issues.InProgress],
      Done: [...issues.Done],
    }

    const sourceItems = [...issues[sourceColumn]];
    const destinationItems =
      sourceColumn === destinationColumn
        ? [...sourceItems]
        : [...issues[destinationColumn]];

    const [movedIssue] = sourceItems.splice(source.index, 1);

    if (sourceColumn !== destinationColumn) {
      try {
        await changeIssueStatus(movedIssue.id.toString(), destinationColumn);

        destinationItems.splice(destination.index, 0, movedIssue);

        setIssues({
          ...issues,
          [sourceColumn]: sourceItems,
          [destinationColumn]: destinationItems,
        });
      } catch (error) {
        console.error('Ошибка обновления статуса задачи:', error);
        setIssues(prevIssues);
        alert('Не удалось обновить задачу. Она возвращена обратно.');
      }
    } else {
      destinationItems.splice(destination.index, 0, movedIssue);

      setIssues({
        ...issues,
        [sourceColumn]: destinationItems,
      });
    }
  };

  function onClick() {
    handleOpenPopup();
  }

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
                      <DraggableTask
                        getIssueById={getIssueById}
                        task={task}
                        provided={provided}
                        onClick={onClick}
                        className={className}
                      />
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
