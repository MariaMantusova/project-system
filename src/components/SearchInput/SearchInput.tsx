import React from 'react';
import './SearchInput.css';
import { ISearchInputProps } from '../../interfaces/propsInterfaces';

function SearchInput(props: ISearchInputProps) {
  return (
    <section className="search-container">
      <select
        className="search-select"
        value={props.field}
        onChange={e => props.setField(e.target.value)}
      >
        <option value="name">По названию</option>
        <option value="assignee">По исполнителю</option>
      </select>

      <input
        className="search-input"
        type="text"
        placeholder="Поиск"
        value={props.query}
        onChange={e => props.setQuery(e.target.value)}
      />
    </section>
  );
}

export default SearchInput;
