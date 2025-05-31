import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PopupForm from '../components/PopupForm/PopupForm';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import KanbanBlock from '../components/KanbanBlock/KanbanBLock';
import { ColumnType } from '../components/KanbanBoard/KanbanBoard';
import { IBoard } from '../App';

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

interface IBoardPageProps {
  boardIssues: IBoardIssue[];
  boards: IBoard[];
  getBoardById: (id: string) => void;
}

function BoardPage(props: IBoardPageProps) {
  const { id } = useParams<string>();
  const boardIssues: IBoardIssue[] = props.boardIssues;
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    if (id) props.getBoardById(id);
  }, [id]);

  useEffect(() => {
    if (!id || props.boards.length === 0) return;

    const board = props.boards.find(b => b.id === +id);
    if (board) {
      setTitle(board.name);
    }
  }, [id, props.boards]);
  return (
    <>
      <Header pageName="board" />
      <KanbanBlock boardIssues={boardIssues} boardTitle={title} />
      <PopupForm />
      <Footer />
    </>
  );
}

export default BoardPage;
