import { combineReducers } from 'redux';

import surveyReducer from './surveyReducer';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  userSurvey: surveyReducer
});

export default rootReducer;
