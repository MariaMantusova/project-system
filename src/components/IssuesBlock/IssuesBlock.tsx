import React from 'react';
import './IssuesBlock.css';
import MainButton from '../MainButton/MainButton';
import ListItem from '../ListItem/ListItem';
import { IIssue } from '../App/App';
import { List } from 'antd';
import { IIssuesBlockProps } from '../../interfaces/propsInterfaces';

function IssuesBlock(props: IIssuesBlockProps) {
  return (
    <section className="issues-block">
      <List
        dataSource={props.issues}
        style={{ width: '80%', minHeight: '60vh', gap: '20px' }}
        pagination={{ position: 'bottom', align: 'center', pageSize: 5 }}
        renderItem={(issue: IIssue) => (
          <ListItem id={issue.id} title={issue.title} key={issue.id} />
        )}
      />
      {/*<MainButton handleOpenPopup={} />*/}
    </section>
  );
}

export default IssuesBlock;
