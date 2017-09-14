import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
        inputText: '',
        pilotName: ''
      };

    // FORM: HANDLE INPUT CHANGES
    // handleNameChange below:
    // See form lesson for details.
    // Enter your code below:

  }

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:

  handleNameChange(event){
    this.setState({
      inputText: event.target.value
    });
  }

  handleFormSubmit(event){
    event.preventDefault();
    this.setState({
      pilotName: this.state.name,
      inputText: ""
    })
  }
  render() {
    return (
      <div className="card">

        <div className="card-block">

          <div className="form-group-row">
            <form onChange={this.handleFormSubmit}>
              <div>
                <label htmlFor="pilotName-text-input" className="col-2 col-form-label">What is your name, pilot?</label>
              </div>
              <div>
                <input className="form-control" name="name" type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Enter your name" />
              </div>
              <div className="col-10">
                <p className="lead">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </p>
              </div>
            </form>
            <h3>{this.state.pilotName}</h3>
          </div>

        </div>
      </div>
    );
  }

}
