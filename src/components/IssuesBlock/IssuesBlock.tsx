import React from 'react';
import './IssuesBlock.css';
import MainButton from '../MainButton/MainButton';
import ListItem from '../ListItem/ListItem';
import { List } from 'antd';
import { IIssuesBlockProps } from '../../interfaces/propsInterfaces';
import { IIssue } from '../../interfaces/mainInterfaces';

function IssuesBlock(props: IIssuesBlockProps) {
  return (
    <section className="issues-block">
      <List
        dataSource={props.issues}
        style={{ width: '80%', minHeight: '60vh', gap: '20px' }}
        pagination={{ position: 'bottom', align: 'center', pageSize: 5 }}
        renderItem={(issue: IIssue) => (
          <ListItem
            handleOpenPopup={props.handleOpenPopup}
            getIssueById={props.getIssueById}
            class="list__item_button"
            id={issue.id}
            title={issue.title}
            key={issue.id}
          />
        )}
      />
      <MainButton handleOpenPopup={props.handleOpenPopup} />
    </section>
  );
}

export default IssuesBlock;
