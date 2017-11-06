import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from './components/Container';
import Search from './components/Search';
import Navtabs from './components/Navtabs';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Container sectionClass="hero is-info" divClass="hero-body">
            <div className="container">
              <a href="/" className="title">New York Times Scrubber</a>
            </div>
          </Container>
          <br />
          <Navtabs tabs={[
            { name: 'Saved Articles', path: '/' },
            { name: 'Search', path: '/search' }
            ]} />
          <Route path="/search" render={() => <Container title="Search">
            <Search />
          </Container>} />
          <Route path="/search/results" render={() => <Container title="Results">
          </Container>} />
          <Route path="/" render={() => <Container title="Saved Articles">
          </Container>} />
        </div>
      </Router>
    );
  }
}

export default App;