import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyChart from './SurveyChart';

class App extends Component{
  constructor(){
    super()
  }

  render(){
    return (
     <div>
       <SurveyForm />
       <SurveyChart />
     </div>
   );
  }
}

export default App;
