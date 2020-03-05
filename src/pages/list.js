import React from 'react';
import JournalList from '../components/journalList';
import JournalContent from './journal-content';

const ListPage = () => (
    <>
        <h1>Journal List</h1>
        <JournalList journals={JournalContent} />
    </>    
);

export default ListPage;