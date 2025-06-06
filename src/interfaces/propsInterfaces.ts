import React from 'react';
import { IUser, INewIssue, IBoardIssue, IUpdateIssue, IIssue, IBoard } from './mainInterfaces';
import { DraggableProvided } from '@hello-pangea/dnd';

export interface ISearchInputProps {
  query: string;
  field: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface IDraggableTaskProps {
  task: IBoardIssue;
  provided: DraggableProvided;
  onClick: () => void;
  className: string;
  getIssueById: (id: string) => void;
}

export interface ISearchProps {
  boards: IBoard[];
  query: string;
  field: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setSelectStatus: React.Dispatch<React.SetStateAction<string>>;
  selectStatus: string;
  setSelectProject: React.Dispatch<React.SetStateAction<number>>;
  selectProject: number;
}

export interface IProjectsListProps {
  boards: IBoard[];
}

export interface IPopupFormProps {
  title: string;
  users: IUser[];
  isOpened: boolean;
  boards: IBoard[];
  createIssue: (newIssue: INewIssue) => void;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  changeIssue?: (id: string, updateIssue: IUpdateIssue) => void;
  currentIssue?: IIssue | null;
  setCurrentIssue?: React.Dispatch<React.SetStateAction<IIssue | null>>;
}

export interface IMainFormProps {
  createIssue: (newIssue: INewIssue) => void;
  changeIssue?: (id: string, updateIssue: IUpdateIssue) => void;
  currentIssue?: IIssue | null;
  boards: IBoard[];
  users: IUser[];
  handleClose: () => void;
}

export interface IMainButtonProps {
  handleOpenPopup: () => void;
}

export interface IListItemProps {
  id: number;
  title: string;
  children?: React.ReactNode;
  class?: string;
  getIssueById?: (id: string) => void;
  handleOpenPopup?: () => void;
}

export interface IKanbanBoardProps {
  issues: IBoardIssue[];
  handleOpenPopup: () => void;
  className: string;
  getIssueById: (id: string) => void;
  changeIssueStatus: (id: string, status: string) => Promise<void>;
}

export interface IKanbanBlockProps {
  boardIssues: IBoardIssue[];
  boardTitle: string;
  getIssueById: (id: string) => void;
  handleOpenPopup: () => void;
  changeIssueStatus: (id: string, status: string) => Promise<void>;
}

export interface IIssuesBlockProps {
  issues: IIssue[];
  handleOpenPopup: () => void;
  getIssueById: (id: string) => void;
}

export interface IHeaderProps {
  pageName: string;
  handleOpenPopup: () => void;
}

export interface IIssuesPageProps {
  setCurrentIssue: React.Dispatch<React.SetStateAction<IIssue | null>>;
  issues: IIssue[];
  boards: IBoard[];
  handleOpenPopup: () => void;
  users: IUser[];
  createIssue: (newIssue: INewIssue) => void;
  changeIssue: (id: string, updateIssue: IUpdateIssue) => void;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isPopupOpen: boolean;
  getIssueById: (id: string) => void;
  currentIssue: IIssue | null;
}

export interface IBoardsPageProps {
  boards: IBoard[];
  handleOpenPopup: () => void;
  users: IUser[];
  createIssue: (newIssue: INewIssue) => void;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isPopupOpen: boolean;
}

export interface IBoardPageProps {
  issues: IIssue[];
  boardIssues: IBoardIssue[];
  getIssueById: (id: string) => void;
  currentIssue: IIssue | null;
  setCurrentIssue: React.Dispatch<React.SetStateAction<IIssue | null>>;
  createIssue: (newIssue: INewIssue) => void;
  boards: IBoard[];
  users: IUser[];
  changeIssue: (id: string, updateIssue: IUpdateIssue) => void;
  getBoardById: (id: string) => void;
  changeIssueStatus: (id: string, status: string) => Promise<void>;
  handleOpenPopup: () => void;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isPopupOpen: boolean;
}
