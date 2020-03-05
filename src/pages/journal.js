import React from 'react';
import JournalList from '../components/journalList';
// import NotFoundPage from './NotFound';
import JournalContent from './journal-content';

const JournalPage = ({ match }) => {
    const date = match.params.date;
    const journal = JournalContent.find(journal => journal.date === date); 

    if (!journal) return <h3>Your journal does not exist :(</h3>
    // if (!journal) return <NotFoundPage />;

    const otherJournals = JournalContent.filter(journal => journal.date !== date);

    return(
        <>
            <h1>{journal.title}</h1>      
            <h4>{journal.date}</h4>  
            {journal.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <br />
            <br />
            <h3>Other Journals</h3>
            <JournalList journals={otherJournals} />
                
        </>    
    );
};

export default JournalPage;