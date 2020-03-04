import React from 'react';
import journalContent from './journal-content';

const JournalPage = ({ match }) => {
    const date = match.params.date;
    const journal = journalContent.find(journal => journal.date === date); 

    if (!journal) return <h3>Your journal does not exist :(</h3>

    return(
        <>
            <h1>{journal.title}</h1>      
            <h4>{journal.date}</h4>  
            <br/>
            {journal.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
                
        </>    
    );
};

export default JournalPage;