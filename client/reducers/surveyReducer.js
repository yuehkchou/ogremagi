import Axios from 'axios';
import { SUBMIT_SURVEY } from '../actions/submitSurveyActions';
import { GET_SURVEY } from '../actions/getSurveyActions'

const INITIAL_STATE = { all: [], userSurvey: null }

export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case SUBMIT_SURVEY:
      return {...state, all: action.payload.data }
    default:
      return state;
  }
}
