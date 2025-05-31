import React from 'react';
import './SearchInput.css';

interface ISearchInputProps {
  query: string;
  field: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

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
