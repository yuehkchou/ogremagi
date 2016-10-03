import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyChart from './SurveyChart';
import MainView from './container'

class App extends Component{
  constructor(){
    super()
  }

  render(){
    return (
     <div>
       <SurveyForm />
       <SurveyChart />
       <MainView />
     </div>
   );
  }
}

export default App;
