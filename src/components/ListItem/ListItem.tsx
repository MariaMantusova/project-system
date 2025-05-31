import React from 'react';
import './ListItem.css';
import { IListItemProps } from '../../interfaces/propsInterfaces';

function ListItem(props: IListItemProps) {
  return (
    <li className="list__item">
      <p className="list__item__title">{`${props.id}. ${props.title}`}</p>
      {props.children}
    </li>
  );
}

export default ListItem;
