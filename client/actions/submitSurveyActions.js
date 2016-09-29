import Axios from 'axios';

export const SUBMIT_SURVEY = 'SUBMIT_SURVEY';

const ROOT_URL ='http://localhost:3000/api';

export default submitSurvey = (data) => {
  const request = Axios.post('${ROOT_URL}/userSurvey', {
    address: this.state.address,
    brs: this.state.brs,
    price: this.state.price,
    amenity: this.state.amenity
  })

  return {
    type: SUBMIT_SURVEY,
    payload: request
  }
}

                                                                                                \
