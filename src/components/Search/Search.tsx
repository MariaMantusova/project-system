import React from 'react';
import './Search.css';
import { Select } from 'antd';
import { IBoard } from '../../App';
import SearchInput from '../SearchInput/SearchInput';

interface ISearchProps {
  boards: IBoard[];
  query: string;
  field: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function SearchSection(props: ISearchProps) {
  const projectOptions: { value: number; label: string }[] = props.boards.map(item => ({
    value: item.id,
    label: `${item.id}. ${item.name}`,
  }));

  const statusOptions: { value: string; label: string }[] = [
    { value: 'Backlog', label: 'To do' },
    { value: 'InProgress', label: 'In progress' },
    { value: 'Done', label: 'Done' },
  ];

  return (
    <section className="search">
      <SearchInput
        field={props.field}
        setField={props.setField}
        query={props.query}
        setQuery={props.setQuery}
      />
      <Select placeholder="Выбрать статус" options={statusOptions} />
      <Select placeholder="Выбрать доску" options={projectOptions} />
    </section>
  );
}

export default SearchSection;
