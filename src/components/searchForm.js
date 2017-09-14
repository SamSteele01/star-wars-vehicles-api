import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
        value: '',
        pilotName: ''
      };

  }

  handleNameChange(event){
    this.setState({
      value: event.target.value
    });
  }

  handleFormSubmit(event){
    event.preventDefault();
    this.setState({
      pilotName: this.state.value,
      value: ''
    })
  }
  render() {
    return (
      <div className="card form">
        <div className="card-block">
            <h2 className="card-title">What is your name, pilot?</h2>
              <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <input className="form-control col-md-4 offset-md-4" name="pilotName" type="text" value={this.state.value} onChange={this.handleNameChange} placeholder="Enter your name" />
              </div>
              <div>
                  <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
            <h3>{this.state.pilotName}</h3>
        </div>
      </div>
    );
  }

}
