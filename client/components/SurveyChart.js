import React from 'react';
import axios from 'axios';

class SurveyChart extends React.Component {
  constructor() {
    super()
    this.loadSurveyInfo()
    }

loadSurveyInfo(){
  axios.get('/api/userSurvey')
  .then((response) => {
    document.getElementById('list').innerHTML = response.data.map((room) => {
      return(
        '<strong>' + room.id + '</strong>'  +
        '<strong>' + room.price + '</strong>' +
        '<strong>' + room.brs + '</strong>' +
        '<strong>' + room.amenity + '</strong>'
      )
    })
    console.log('Get info request')
    console.log(response.status)
    console.log(response.data)
  })
}

render() {
  return (
      <div>
        <h1> Title </h1>
        <table class= 'table'>
          <thead>
            <tr>
              <th> ID </th>
              <th> Price</th>
              <th> Bedrooms </th>
              <th> Amenities</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id='list'> </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }


};

export default SurveyChart;
