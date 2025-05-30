import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Search from '../components/Search/Search';
import { IIssue } from '../App';
import IssuesBlock from '../components/IssuesBlock/IssuesBlock';

interface IIssuesPageProps {
  issues: IIssue[];
}

function IssuesPage(props: IIssuesPageProps) {
  return (
    <>
      <Header pageName="issues" />
      <Search />
      <IssuesBlock issues={props.issues} />
      <Footer />
    </>
  );
}

export default IssuesPage;
