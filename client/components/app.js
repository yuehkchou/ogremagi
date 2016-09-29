import React from 'react';
import SurveyForm from './SurveyForm';
import SurveyChart from './SurveyChart';

class App extends React.Component{
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
