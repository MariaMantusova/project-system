import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Search from '../components/Search/Search';
import List from '../components/List/List';
import MainButton from '../components/MainButton/MainButton';

function IssuesPage() {
  return (
    <>
      <Header />
      <Search />
      <List>
        <MainButton />
      </List>
      <Footer />
    </>
  );
}

export default IssuesPage;
