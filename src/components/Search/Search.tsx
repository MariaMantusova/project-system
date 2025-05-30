import React from 'react';
import './Search.css';
import { Input, Select } from 'antd';
import { IBoard } from '../../App';

const { Search } = Input;

interface ISearchProps {
  boards: IBoard[];
}

function SearchSection(props: ISearchProps) {
  const projectOptions: { value: number; label: string }[] = props.boards.map(item => ({
    value: item.id,
    label: `${item.id}. ${item.name}`
  }));

  const statusOptions: { value: string; label: string }[] = [
    { value: 'todo', label: 'To do' },
    { value: 'progress', label: 'In progress' },
    { value: 'done', label: 'Done' },
  ];

  return (
    <section className="search">
      <Search className="search__input" placeholder="Поиск" enterButton />
      <Select placeholder="Выбрать статус" options={statusOptions} />
      <Select placeholder="Выбрать доску" options={projectOptions} />
    </section>
  );
}

export default SearchSection;
