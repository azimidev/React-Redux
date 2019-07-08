import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => <>Page One</>;
const PageTwo = () => <>Page Two</>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={PageOne} exact />
        <Route path="/about" component={PageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
