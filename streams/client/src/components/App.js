import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => <div>Home</div>;
const PageTwo = () => <div>About</div>;
const PageThree = () => <div>Contact</div>;

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <p>
          <Link to="/" >Home</Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/about" >About</Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/contact" >Contact</Link>
        </p>

        <Route path="/" component={PageOne} exact />
        <Route path="/about" component={PageTwo} />
        <Route path="/contact" component={PageThree} />

      </BrowserRouter>
    </div>
  );
};

export default App;
