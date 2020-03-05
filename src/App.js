import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ListPage from './pages/list';
import JournalPage from './pages/journal';
import NotFoundPage from './pages/NotFound';
import NavBar from './NavBar';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/journal-list" component={ListPage} />
            <Route path="/journal/:date" component={JournalPage} />
            <Route component={NotFoundPage} />
          </Switch>          
        </div>        
      </div>
    </Router>
    
  );
}

export default App;
