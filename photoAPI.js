'use strict';

const photoSearchURL = 'https://api.unsplash.com/search/photos';
const photoApiKey =
  'a579b05eb6be838537052ccfaa4d09934984e0e4afccd490edf207a1d935667d';

function formatQueryParams(params) {
  const queryItems = Object.keys(params).map(
    key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  );
  return queryItems.join('&');
}

function displayPhotos(responseJson) {
  const destination = $('.destination')
    .val()
    .toUpperCase();
  $('.destinationPhotoList').empty();
  $('.destinationName').empty();
  $('.destinationName').append(
    `<h2 class="yourTrip">Your Trip To ${airportCodeData[destination]}</h2>`
  );
  for (let i = 0; i < responseJson.results.length; i++) {
    $('.destinationPhotoList').append(
      `<li class="photo"><img src="${
        responseJson.results[i].urls.full
      }" alt="Picture of ${airportCodeData[destination]}"</li>`
    );
  }
}

function getPhotos() {
  const destination = $('.destination')
    .val()
    .toUpperCase();
  let currentDestination = airportCodeData[destination];
  for (let i = 0; i < airportCodeData.length; i++) {
    for (value in airportCodeData[i]) {
      if (airportCodeData[i][value] == destination) {
        console.log('params store key working: ', airportCodeData[i][key]);
      }
    }
  }
  var params = {
    client_id: photoApiKey,
    query: currentDestination,
    orientation: 'landscape',
    per_page: 5,
    'accept version': 'v1'
  };
  const queryString = formatQueryParams(params);
  const url = photoSearchURL + '?' + queryString;

  fetch(url)
    .then(response => {
      if (currentDestination == undefined) {
        console.log('currentDestination is undefined');
        throw new Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .then(responseJson => displayPhotos(responseJson))
    .catch(error => console.log('Photo API not working'));
}
/*
//creating a function to enlarge selected photo
function enlargePhoto() {
    $('.photo').on('click', function(event) {

    });
}
*/

function watchForm() {
  $('.flightSearchForm').submit(event => {
    event.preventDefault();
    getPhotos();
    console.log('Photo form is working');
  });
}

$(watchForm);
