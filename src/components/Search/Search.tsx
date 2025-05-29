import React from 'react';
import "./Search.css";
import { Input, Select } from 'antd';

const { Search } = Input;

function SearchSection() {
  const projectOptions: { value: string; label: string }[] = [
    { value: 'JS project', label: 'JS project' },
    { value: 'Mariia', label: 'Mariia' },
    { value: 'Sevak', label: 'Sevak' },
  ];

  const statusOptions: { value: string; label: string }[] = [
    { value: 'todo', label: 'To do' },
    { value: 'progress', label: 'In progress' },
    { value: 'done', label: 'Done' },
  ];

  return (<section className="search">
    <Search className="search__input" placeholder="Поиск" enterButton />
    <Select placeholder="Выбрать статус" options={statusOptions}/>
    <Select placeholder="Выбрать доску" options={projectOptions}/>
  </section>)
}

export default SearchSection;