import React, { Component } from 'react';
// import TextField from '../components/TextField';

class UnicornFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicornName: '',
    }
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleUnicornChange = this.handleUnicornChange.bind(this);
  }


  render() {

    return (
      <div>
        <form className="callout" >
          <input
            type="text"
            name="unicornName"
            value=""
          />
          <div className="button-group">
            <input className="button" type="submit" value="Submit" />
          </div>

        </form>
      </div>
    );
  }
}

// handleFormSubmit(event){
  //   event.preventDefault()
  //
  //   let unicornPayload = {
    //     unicornName: this.state.unicornName
    //   }
    //
    //   this.props.trackNewUnicorn(unicornPayload)
    // }

    // handleUnicornChange(event) {
      //   this.setState({ unicornName: event.target.value })
      // }
// <TextField
// content={this.state.unicornName}
// unicornHandler={this.handleUnicornChange}
// />
export default UnicornFormContainer;
