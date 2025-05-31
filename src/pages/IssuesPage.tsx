import React, { useEffect } from 'react';
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
  const [filteredIssues, setFilteredIssues] = React.useState<IIssue[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [searchField, setSearchField] = React.useState<string>('name');
  const [isSearching, setIsSearching] = React.useState(false);

  useEffect(() => {
    filterIssues();
  }, [searchField, searchQuery]);

  function filterIssues() {
    const searchQueryLow = searchQuery.toLowerCase();
    let filtered: IIssue[] = [];

    if (searchField === 'name')
      filtered = props.issues.filter(issue => issue.title.toLowerCase().includes(searchQueryLow));
    if (searchField === 'assignee')
      filtered = props.issues.filter(
        issue =>
          issue.assignee.fullName.toLowerCase().includes(searchQueryLow) ||
          issue.assignee.email.toLowerCase().includes(searchQueryLow)
      );

    setFilteredIssues(filtered);
    setIsSearching(searchQuery.trim() !== '');
  }

  return (
    <>
      <Header pageName="issues" />
      <Search
        boards={props.boards}
        query={searchQuery}
        setQuery={setSearchQuery}
        setField={setSearchField}
        field={searchField}
      />
      <IssuesBlock issues={isSearching ? filteredIssues : props.issues} />
      <Footer />
    </>
  );
}

export default IssuesPage;
