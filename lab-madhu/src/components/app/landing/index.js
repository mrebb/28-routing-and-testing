import React from 'react';
import { NavItem } from 'react-bootstrap';
import Footer from '../footer/footer';
export default class Home extends React.Component {
  
  render() {
    
    return (
      <React.Fragment>
        <main>
          <div>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/dashboard">Dashboard</NavItem>
          </div>
          <div>
            <h2>Welcome to notes app</h2>
            <p>This app lets you do following actions on notes through dashboard.<br/><br/><li>create notes</li><li>view notes</li><li>delete notes</li></p>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }

}