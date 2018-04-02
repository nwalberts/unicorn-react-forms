import React, { Component } from 'react';
import UnicornFormContainer from './UnicornFormContainer';
import UnicornMealsList from '../components/UnicornMealsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicornMeals: []
    }
    this.trackConsumption = this.trackConsumption.bind(this);
  }

  trackConsumption(unicorn){
    let allMeals = this.state.unicornMeals
    this.setState({ unicornMeals: allMeals.concat(unicorn) })
  }

  render() {
    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <h1 className="text-center">Unicorn Food Tracker</h1>
          <UnicornFormContainer
            trackConsumption={this.trackConsumption}
          />
          <UnicornMealsList
            unicornMeals={this.state.unicornMeals}
          />
        </div>
      </div>
    );
  }
}

export default App;
