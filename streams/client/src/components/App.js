import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

/**
 * With React Router, each component
 * needs to be designed to work in isolation
 * ( fetch it's own data! )
 */

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={StreamList} exact />
            <Route path="/stream/new" component={StreamCreate} />
            <Route path="/stream/edit/:id" component={StreamEdit} />
            <Route path="/stream/delete/:id" component={StreamDelete} />
            <Route path="/stream/:id" component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
