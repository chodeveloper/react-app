import React from 'react';
import { Link } from 'react-router-dom';

const journalList = ({ journals }) => (
    <>
        {journals.map((journal, key) => (
            <Link className="article-list-item" key={key} to={`/journal/${journal.date}`}>
                <h4>{journal.date}: {journal.title}</h4>
                <p>{journal.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
    </>    
);

export default journalList;