import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Search from '../components/Search/Search';
import { IBoard, IIssue } from '../App';
import IssuesBlock from '../components/IssuesBlock/IssuesBlock';

interface IIssuesPageProps {
  issues: IIssue[];
  boards: IBoard[];
}

function IssuesPage(props: IIssuesPageProps) {
  return (
    <>
      <Header pageName="issues" />
      <Search boards={props.boards} />
      <IssuesBlock issues={props.issues} />
      <Footer />
    </>
  );
}

export default IssuesPage;
