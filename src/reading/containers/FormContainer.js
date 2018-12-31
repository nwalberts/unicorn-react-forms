import React, { Component } from 'react';
import Select from '../components/Select';
import TextField from '../components/TextField';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItemConsumed: '',
      mealOptions: ['breakfast', 'lunch', 'dinner', 'snack'],
      mealSelected: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleMealSelection = this.handleMealSelection.bind(this);
  }


  handleFormSubmit(event) {
    event.preventDefault();
      let formPayload = {
        food: this.state.foodItemConsumed,
        meal: this.state.mealSelected
      };
      this.props.trackConsumption(formPayload);
      this.handleClearForm(event);
  }

  handleItemChange(event) {
    this.setState({ foodItemConsumed: event.target.value })
  }

  handleMealSelection(event) {
    this.setState({ mealSelected: event.target.value })
  }

  render() {
    return (
      <form className="callout" onSubmit={this.handleFormSubmit}>
        <TextField
          content={this.state.foodItemConsumed}
          label='Food Item Consumed'
          name='consumed'
          handlerFunction={this.handleItemChange}
        />
        <Select
          handlerFunction={this.handleMealSelection}
          name='meal'
          label='Meal'
          options={this.state.mealOptions}
          selectedOption={this.state.mealSelected}
        />
        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default FormContainer;

// <button className="button" onClick={this.handleClearForm}>Clear</button>

// this.handleClearForm = this.handleClearForm.bind(this);
// handleClearForm(event) {
  //   event.preventDefault();
  //   this.setState({
    //     foodItemConsumed: '',
    //     mealSelected: ''
    //   })
    // }
