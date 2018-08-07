import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './landing/index';
import Dashboard from './dashboard/index.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <main>
            <Route exact path="/" component={Home}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/noteItem/:id" component={(props) =>
              <Dashboard
                {...props}
              />
            }/>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}