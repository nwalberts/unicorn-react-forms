import React, { Component } from 'react';
import UnicornFormContainer from './UnicornFormContainer';
import UnicornsList from '../components/UnicornsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicorns: []
    }
    this.trackNewUnicorn = this.trackNewUnicorn.bind(this);
  }

  trackNewUnicorn(unicorn){
    // debugger;
    let allUnicorns = this.state.unicorns
    this.setState({ unicorns: allUnicorns.concat(unicorn) })
  }

  render() {
    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <h1 className="text-center">Unicorn Tracker</h1>
          <UnicornFormContainer
            trackNewUnicorn={this.trackNewUnicorn}
          />
          <UnicornsList
            unicorns={this.state.unicorns}
          />
        </div>
      </div>
    );
  }
}

export default App;
