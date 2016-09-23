import React from 'react';
class SurveyForm extends React.Component {
  constructor() {
    super()
    // initialize state
    this.state = {value: ''};
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  },

  render() {
    return (
      <form>
        <ControlLabel> Hello World </ControlLabel>
        <FormControl
          type="text"
          value={this.state.value}
          placeholder="Enter text"
          onChange={this.handleChange}
        />

        </FormGroup>
        </form>
    );
  }
});

ReactDOM.render(<FormExample />, mountNode);
