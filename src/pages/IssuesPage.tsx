import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Search from '../components/Search/Search';
import { IIssue } from '../components/App/App';
import IssuesBlock from '../components/IssuesBlock/IssuesBlock';
import { IIssuesPageProps } from '../interfaces/propsInterfaces';
import PopupForm from '../components/PopupForm/PopupForm';

function IssuesPage(props: IIssuesPageProps) {
  const [filteredIssues, setFilteredIssues] = React.useState<IIssue[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [searchField, setSearchField] = React.useState<string>('name');
  const [selectStatus, setSelectStatus] = React.useState<string>('');
  const [selectProject, setSelectProject] = React.useState<number>(0);
  const [isSearching, setIsSearching] = React.useState(false);

  useEffect(() => {
    applyFilters();
  }, [searchQuery, searchField, selectStatus, selectProject]);

  function applyFilters() {
    const searchQueryLow = searchQuery.toLowerCase().trim();

    const filtered = props.issues.filter(issue => {
      let matchesSearch = true;
      if (searchQueryLow) {
        if (searchField === 'name') {
          matchesSearch = issue.title.toLowerCase().includes(searchQueryLow);
        } else if (searchField === 'assignee') {
          matchesSearch =
            issue.assignee.fullName.toLowerCase().includes(searchQueryLow) ||
            issue.assignee.email.toLowerCase().includes(searchQueryLow);
        }
      }

      const matchesStatus = selectStatus ? issue.status === selectStatus : true;
      const matchesProject = selectProject ? issue.boardId === selectProject : true;

      return matchesSearch && matchesStatus && matchesProject;
    });

    setFilteredIssues(filtered);

    const isAnyFilterActive = searchQueryLow || selectStatus || selectProject;
    setIsSearching(!!isAnyFilterActive);
  }

  return (
    <>
      <Header pageName="issues" handleOpenPopup={props.handleOpenPopup} />
      <Search
        boards={props.boards}
        query={searchQuery}
        setQuery={setSearchQuery}
        setField={setSearchField}
        field={searchField}
        setSelectStatus={setSelectStatus}
        selectStatus={selectStatus}
        setSelectProject={setSelectProject}
        selectProject={selectProject}
      />
      <IssuesBlock
        getIssueById={props.getIssueById}
        issues={isSearching ? filteredIssues : props.issues}
        handleOpenPopup={props.handleOpenPopup}
      />
      <Footer />
      <PopupForm
        title="Создать задачу"
        users={props.users}
        isOpened={props.isPopupOpen}
        boards={props.boards}
        createIssue={props.createIssue}
        setIsOpened={props.setIsPopupOpen}
      />
    </>
  );
}

export default IssuesPage;
