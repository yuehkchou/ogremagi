import Axios from 'axios';

export const GET_SURVEY = 'GET_SURVEY';

const ROOT_URL = 'http://localhost:3000/api';

export function getSurvey(data){
  const request = Axios.get(ROOT_URL+ '/userSurvey')
  return {
    type: GET_SURVEY,
    payload: request
  }
}
