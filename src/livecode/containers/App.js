import React, { Component } from 'react';
import UnicornFormContainer from './UnicornFormContainer';
import UnicornsList from '../components/UnicornsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicorns: []
    }
  }

  render() {
    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <h1 className="text-center">Unicorn Tracker</h1>
          <UnicornFormContainer
          />
          <UnicornsList
          />
        </div>
      </div>
    );
  }
}

export default App;
