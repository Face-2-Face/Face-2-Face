import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';
import ChatRoom from './components/ChatRoom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/settings" component={Settings} />
      <Route path="/chat" component={ChatRoom} />
    </div>
  </Router>, document.getElementById('root'));