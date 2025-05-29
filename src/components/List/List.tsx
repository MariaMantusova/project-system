import React from 'react';
import "./List.css";
import ListItem from '../ListItem/ListItem';

function List(props: {children?: React.ReactNode}) {
  return (
    <ul className="list">
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />

      {props.children}
    </ul>
  )
}

export default List;