import { ColumnType } from '../components/KanbanBoard/KanbanBoard';

export interface IUser {
  avatarUrl: string;
  description: string;
  email: string;
  fullName: string;
  id: number;
  tasksCount: number;
  teamId: number;
  teamName: string;
}

export interface IValidations {
  isEmpty: boolean;
}

export interface IBoardIssue {
  id: number;
  title: string;
  description: string;
  priority: string;
  status: ColumnType;
  assignee: {
    id: number;
    fullName: string;
    email: string;
    avatarUrl: string;
  };
}

export interface INewIssue {
  assigneeId: number | undefined;
  boardId: number | undefined;
  description: string;
  priority: string | undefined;
  title: string;
}

export interface IUpdateIssue {
  assigneeId: number | undefined;
  status: string | null;
  description: string;
  priority: string | undefined;
  title: string;
}

export interface IApiOptions {
  url: string;
  headers: {
    'Content-Type': string;
  };
}

export interface IBoard {
  description: string;
  id: number;
  name: string;
  taskCount: number;
}

export interface IIssue {
  assignee: IAssignee;
  boardId: number;
  boardName: string;
  description: string;
  id: number;
  priority: string;
  status: string;
  title: string;
}

export interface IAssignee {
  avatarUrl: string;
  email: string;
  fullName: string;
  id: number;
}
