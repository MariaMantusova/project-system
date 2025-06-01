import React from 'react';
import './ListItem.css';
import { IListItemProps } from '../../interfaces/propsInterfaces';

function ListItem(props: IListItemProps) {
  function onClick() {
    if (props.getIssueById) props.getIssueById(props.id.toString());
    if (props.handleOpenPopup) props.handleOpenPopup();
  }

  return (
    <>
      <li className={`list__item ${props.class}`} onClick={onClick}>
        <p className="list__item__title">{`${props.id}. ${props.title}`}</p>
        {props.children}
      </li>
    </>
  );
}

export default ListItem;
