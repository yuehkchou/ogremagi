import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button, form} from 'react-bootstrap';
class SurveyForm extends React.Component {
  constructor() {
    super()
    // initialize state
    this.state = {value: ''}; // sets the intiate state to value with an empty string
    console.log();

    this.handleChange = this.handleChange.bind(this);  // When puting text inside the input field auto change
    this.onFormSubmit = this.onFormSubmit.bind(this); // When submit form, grab the form with something.
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault(); // prevents refreshing
    console.log(this.state.value);
    this.setState({value: ''});
  }




  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
      <FormGroup>
        <ControlLabel> Hello World </ControlLabel>

        <FormControl
          type="text"
          value={this.state.value}

          placeholder="Enter text"
          onChange={this.handleChange}
        />
        <Button type="submit"> Submit </Button>
        </FormGroup>
        </form>
    );
  }
};

// ReactDOM.render(<FormExample />, mountNode);
export default SurveyForm;
