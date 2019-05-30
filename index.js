'use strict';

const flightSearchURL = "https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session";
const flightApiKey = "37815a5062mshb00a5a1e7f13f85p1e7925jsn183b12ff34e5";

const options = {
    headers: new Headers({
        "X-RapidAPI-Key": flightApiKey})
};

function departureDateFormat() {
        let date = $('.startDate').val().split('-');
        return (date[1] + ' ' + date[2] + ' ' + date[0]);
    }

function endDateFormat() {
    let date = $('.endDate').val().split('-');
    return (date[1] + ' ' + date[2] + ' ' + date[0]);
}

function displayFlightResults(responseJson) {
    console.log('displayflightresults working');
    var departureDate;
    var arrivalDate;
    var departureAirport;
    var arrivalAirport;
    var jsonDateFormat;
    for (var prop in responseJson.legs) {
        departureDate = new Date(responseJson.legs[prop].depart_iso);
        arrivalDate = new Date(`${responseJson.legs[prop].arrive_iso}`);
        departureAirport = (`${responseJson.legs[prop].from_code}`);
        arrivalAirport = (`${responseJson.legs[prop].to_code}`);
        jsonDateFormat = (('0' + (departureDate.getMonth() + 1)) + ' ' + departureDate.getDate() + ' ' + departureDate.getFullYear());
        //console.log('json format plus end date format', jsonDateFormat, endDateFormat());
        //console.log('arrival airport: ', arrivalAirport, 'departure airport: ', departureAirport);
        //let newDepartureDate = departureDate.slice(0,9);
    //let newArrivalDate = arrivalDate.slice(0,9);
      //console.log('user input: ', departureDateFormat());
      //console.log('json input: ', jsonDateFormat);

       //console.log(departureDate, $('.startDate').val());
        //this returns 07 10 2019, 2019-07-11T01:30:00.000Z, 2019-07-10
        //I'm going to need to use .slice(start, end) on departureDate to get it to be the same format as departureDateFormat().
        //console.log('step 1: leg of flight code is: ', `${Object.keys(responseJson.legs)}`);
       if (departureAirport === $('.airport0').val() && arrivalAirport === $('.destination').val()) {
            $('.departingFlight1').append(
                `<li class="flight1"><h4 class="airportCodeTitle">Departing Flight ${departureAirport} to ${arrivalAirport}</h4><p>Leaving on: ${departureDate.getMonth()}/${departureDate.getDate()}/${departureDate.getFullYear()} at ${departureDate.getHours()}:${departureDate.getUTCMinutes()}<br> Arriving at destination on: ${arrivalDate.getMonth()}/${arrivalDate.getDate()}/${arrivalDate.getFullYear()} at ${arrivalDate.getHours()}:${arrivalDate.getMinutes()}<br><button class="selectFlight">Select</button></p></li>`
            )
        }
        if (departureAirport === $('.destination').val() && arrivalAirport === $('.airport0').val()) {
            $('.departingFlight2').append(
                `<li class="flight2><h4 class="airportCodeTitle">Return Flight ${departureAirport} to ${arrivalAirport}</h4><p>Leaving on: ${departureDate.getMonth()}/${departureDate.getDate()}/${departureDate.getFullYear()} at ${departureDate.getHours()}:${departureDate.getUTCMinutes()}<br> Arriving at destination on: ${arrivalDate.getMonth()}/${arrivalDate.getDate()}/${arrivalDate.getFullYear()} at ${arrivalDate.getHours()}:${arrivalDate.getMinutes()}<br><button class="selectFlight">Select</button></p></li>`
            )
        }
        if (departureAirport === $('.airport1').val() && arrivalAirport === $('.destination').val()) {
            $('.departingFlight3').append(
                `<li class="flight3"><h4 class="airportCodeTitle">Departing Flight ${departureAirport} to ${arrivalAirport}</h4><p>Leaving on: ${departureDate.getMonth()}/${departureDate.getDate()}/${departureDate.getFullYear()} at ${departureDate.getHours()}:${departureDate.getUTCMinutes()}<br> Arriving at destination on: ${arrivalDate.getMonth()}/${arrivalDate.getDate()}/${arrivalDate.getFullYear()} at ${arrivalDate.getHours()}:${arrivalDate.getMinutes()}<br><button class="selectFlight">Select</button></p></li>`
            )
        }
        if (departureAirport === $('.destination').val() && arrivalAirport === $('.airport1').val()) {
            $('.departingFlight4').append(
                `<li class="flight4"><h4 class="airportCodeTitle">Return Flight ${departureAirport} to ${arrivalAirport}</h4><p>Leaving on: ${departureDate.getMonth()}/${departureDate.getDate()}/${departureDate.getFullYear()} at ${departureDate.getHours()}:${departureDate.getUTCMinutes()}<br> Arriving at destination on: ${arrivalDate.getMonth()}/${arrivalDate.getDate()}/${arrivalDate.getFullYear()} at ${arrivalDate.getHours()}:${arrivalDate.getMinutes()}<br><button class="selectFlight">Select</button></p></li>`
            )
        }
    }
}

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');   
}


//getFlightResults('.airport0', '.destination');
//going to call this function 4 times with different variables

    /*function getFlightResults(departureAirport, arrivalAirport, departureDate) {
        
    }
    */

function departureDateFormat() {
    let date = $('.startDate').val().split('-');
    return (date[1] + ' ' + date[2] + ' ' + date[0]);
}
function endDateFormat() {
    let date = $('.endDate').val().split('-');
    return (date[1] + ' ' + date[2] + ' ' + date[0]);
}
const departureLocation0 = $('.airport0').val();
const departureLocation1 = $('.airport1').val();
const destination = $('.destination').val();
const departureDate = departureDateFormat();
const returnDate = endDateFormat();

function getFlightResults1() {
    const params = {
            from0: departureLocation0,
            to0: destination,
            date0: departureDate,
            pax: 1,
            cabin: 'coach'
            }
    const queryString = formatQueryParams(params);
    const url = flightSearchURL + '?' + queryString;
    console.log(url);

    fetch(url, {
        headers: {"X-RapidAPI-Key": "37815a5062mshb00a5a1e7f13f85p1e7925jsn183b12ff34e5"}
    })
        .then (response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayFlightResults(responseJson) & console.log('getFlightResults1 working'))
        .catch(error => alert('Flight API not working.'));
}

function getFlightResults2() {
    const params = {
        from0: departureLocation1,
        to0: destination,
        date0: departureDate,
        pax: 1,
        cabin: 'coach'
        }
const queryString = formatQueryParams(params);
const url = flightSearchURL + '?' + queryString;
console.log(url);

fetch(url, {
    headers: {"X-RapidAPI-Key": "37815a5062mshb00a5a1e7f13f85p1e7925jsn183b12ff34e5"}
})
    .then (response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayFlightResults(responseJson) & console.log('getFlightResults2 working'))
    .catch(error => alert('Flight API not working.'));
}

function getFlightResults3() {
    const params = {
        from0: destination,
        to0: departureLocation0,
        date0: returnDate,
        pax: 1,
        cabin: 'coach'
        }
const queryString = formatQueryParams(params);
const url = flightSearchURL + '?' + queryString;
console.log(url);

fetch(url, {
    headers: {"X-RapidAPI-Key": "37815a5062mshb00a5a1e7f13f85p1e7925jsn183b12ff34e5"}
})
    .then (response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayFlightResults(responseJson) & console.log('flightresults3 working'))
    .catch(error => alert('Flight API not working.'));
}

function getFlightResults4() {
    const params = {
        from0: destination,
        to0: departureLocation1,
        date0: returnDate,
        pax: 1,
        cabin: 'coach'
        }
const queryString = formatQueryParams(params);
const url = flightSearchURL + '?' + queryString;
console.log(url);

fetch(url, {
    headers: {"X-RapidAPI-Key": "37815a5062mshb00a5a1e7f13f85p1e7925jsn183b12ff34e5"}
})
    .then (response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayFlightResults(responseJson) & console.log(responseJson))
    .catch(error => alert('Flight API not working.'));
}

function getAllFlightResults() {
    getFlightResults1();
    getFlightResults2();
    getFlightResults3();
    getFlightResults4();
}

//maybe run multiple getFlightResults functions, one for each leg

function selectDepartingFlight() {
    $('.flight1 button').click(event => {
        //keep selected flight showing, hide all other departingFlight1 li's
        $('.flight1').hide();
        $(this).show();
    })
}

function watchForm() {
    $('.flightResults1').hide();
    $('.flightResults2').hide();
    selectDepartingFlight();
    $('.flightSearchForm').submit(event => {
        $('.flightResults1').show();
        $('.flightResults2').show();
        event.preventDefault();
        getAllFlightResults();
        console.log('form is working');
    })
}

$(watchForm);