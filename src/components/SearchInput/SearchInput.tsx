import React from 'react';
import { useState } from "react";
import "./SearchInput.css";

function SearchInput() {
  const [query, setQuery] = useState("");
  const [field, setField] = useState<string>("name");

  const handleSearch = () => {
    console.log("Поиск:", query, "по полю:", field);
  };

  return (
    <section className="search-container">
      <select
        className="search-select"
        value={field}
        onChange={(e) => setField(e.target.value)}
      >
        <option value="name">По названию</option>
        <option value="executor">По исполнителю</option>
      </select>

      <input
        className="search-input"
        type="text"
        placeholder="Поиск"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>🔍
      </button>
    </section>
  );
}

export default SearchInput;