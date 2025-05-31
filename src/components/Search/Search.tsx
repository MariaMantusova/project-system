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
  setSelectStatus: React.Dispatch<React.SetStateAction<string>>;
  selectStatus: string;
  setSelectProject: React.Dispatch<React.SetStateAction<number>>;
  selectProject: number;
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

  function onChangeSelectStatus(value: string) {
    props.setSelectStatus(value);
  }

  function onChangeSelectProject(value: number) {
    props.setSelectProject(value);
  }

  return (
    <section className="search">
      <SearchInput
        field={props.field}
        setField={props.setField}
        query={props.query}
        setQuery={props.setQuery}
      />
      <Select
        onChange={onChangeSelectStatus}
        placeholder="Выбрать статус"
        options={statusOptions}
      />
      <Select
        placeholder="Выбрать доску"
        options={projectOptions}
        onChange={onChangeSelectProject}
      />
    </section>
  );
}

export default SearchSection;
