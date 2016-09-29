import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button, form} from 'react-bootstrap';
import axios from 'axios';

// action import
import { submitSurveyActions } from '../actions/submitSurveyActions';


class SurveyForm extends React.Component {
  constructor() {
    super()
    // initialize state
    this.state = {
      address: '',
      brs: '',
      price: '',
      amenity: '' }; // sets the intiate state to value with an empty string

    this.handleChange = this.handleChange.bind(this);  // When puting text inside the input field auto change
    this.onFormSubmit = this.onFormSubmit.bind(this); // When submit form, grab the form with something.
  }

  handleChange(name, event) {
    // this.setState({address: event.target.value, price: event.target.price, brs: event.target.brs});
    const newState = {}
    newState[name] = event.target.value;
    this.setState(newState);
  }

  onFormSubmit(data) {
    this.props.submitSurveyActions(data)
      .then((response) => {
        console.log('send succesfully'. response );
      })
    // axios.post('/api/userSurvey', {
    //   address: this.state.address,
    //   brs: this.state.brs,
    //   price: this.state.price,
    //   amenity: this.state.amenity
    // }).then((response) => {
    //   console.log('send successfully')
    // });
    //
    // event.preventDefault(); // prevents refreshing
    // console.log(this.state.value);
    // this.setState({address: '', brs: '', price: '', amenity: ''});
  }




  render() {
    const { data: address, brs, price, amenity } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onFormSubmit(this)) }>
      <FormGroup>
        <ControlLabel> Hello World </ControlLabel>
        <div>
          <ControlLabel> I like the atomsphere and environment in this area? </ControlLabel>
          <FormControl
            type="text"
            value={this.state.address}

            placeholder="180 Trump Building"
            onChange={this.handleChange.bind(this, 'address')}
          />
        </div>
        <br />
        <div>
          <ControlLabel> I am looking for an apartment this big... </ControlLabel>
          <FormControl
            type="text"
            value={this.state.brs}

            placeholder="studio"
            onChange={this.handleChange.bind(this, 'brs')}
          />
        </div>
        <br />
        <div>
          <ControlLabel> I am looking for housing in this price range... </ControlLabel>
          <FormControl
            type="integer"
            value={this.state.price}

            placeholder="1000"
            onChange={this.handleChange.bind(this, 'price')}
          />
        </div>
        <br />
        <div>
          <ControlLabel> It would be nice to have these... </ControlLabel>
          <FormControl
            type="text"
            value={this.state.amenity}

            placeholder="Gym, Rooftop, Common Room"
            onChange={this.handleChange.bind(this, 'amenity')}
          />
        </div>
        <br />
        <Button type="submit"> Submit </Button>
        </FormGroup>
        </form>
    );
  }
};

// ReactDOM.render(<FormExample />, mountNode);
export default reduxForm({
  form: 'SurveyForm',
  fields: ['address', 'brs', 'price', 'amenity'],
  validate
}, null, {submitSurveyActions} )(SurveyForm)
