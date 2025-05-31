import React from 'react';
import './Search.css';
import { Select } from 'antd';
import SearchInput from '../SearchInput/SearchInput';
import { ISearchProps } from '../../interfaces/propsInterfaces';
import { statusOptions } from '../../data/searchOptions';

function SearchSection(props: ISearchProps) {
  const projectOptions: { value: number; label: string }[] = props.boards.map(item => ({
    value: item.id,
    label: `${item.id}. ${item.name}`,
  }));

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
