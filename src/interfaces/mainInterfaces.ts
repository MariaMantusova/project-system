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

export interface IApiOptions {
  url: string;
  headers: {
    'Content-Type': string;
  };
}
