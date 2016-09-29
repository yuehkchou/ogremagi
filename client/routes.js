import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SurveyChart from './components/SurveyChart';
import SurveyForm from './components/SurveyForm';

export default (
  <Route path ='/' component = { App }>
  <Route path = 'surveyform' component = { SurveyForm } />
  <Route path = 'surveychart' component = { SurveyChart } />
  </Route>
)
