import React from 'react';
import { IBoard, IIssue } from '../components/App/App';
import { IUser, INewIssue, IBoardIssue } from './mainInterfaces';

export interface ISearchInputProps {
  query: string;
  field: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
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
}

export interface IMainFormProps {
  createIssue: (newIssue: INewIssue) => void;
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
}

export interface IKanbanBoardProps {
  issues: IBoardIssue[];
  changeIssueStatus: (id: string, status: string) => void;
}

export interface IKanbanBlockProps {
  boardIssues: IBoardIssue[];
  boardTitle: string;
  changeIssueStatus: (id: string, status: string) => void;
}

export interface IIssuesBlockProps {
  issues: IIssue[];
}

export interface IHeaderProps {
  pageName: string;
  handleOpenPopup: () => void;
}

export interface IIssuesPageProps {
  issues: IIssue[];
  boards: IBoard[];
  handleOpenPopup: () => void;
  users: IUser[];
  createIssue: (newIssue: INewIssue) => void;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isPopupOpen: boolean;
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
  boardIssues: IBoardIssue[];
  createIssue: (newIssue: INewIssue) => void;
  boards: IBoard[];
  users: IUser[];
  getBoardById: (id: string) => void;
  changeIssueStatus: (id: string, status: string) => void;
  handleOpenPopup: () => void;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isPopupOpen: boolean;
}
