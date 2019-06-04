'use strict';

const flightSearchURL = "https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session";
const flightApiKey = "37815a5062mshb00a5a1e7f13f85p1e7925jsn183b12ff34e5";

var flightCodeList = Object.keys(airportCodeData);
/*var flightCodeList = document.getElementById("airportCode");
function autocompleteFlightCode(destination, flightCodeList) {
    var currentFocus;
    destination.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if(!val) { return false; }

        currentFocus = -1;
    })

}

function getAirportCode() {
    this.list = [Object.keys(airportCodeData)];
}*/
//how do I connect this to the dataStore.js file?

const options = {
    headers: new Headers({
        "X-RapidAPI-Key": flightApiKey})
};

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
        
       if (departureAirport === $('.airport0').val() && arrivalAirport === $('.destination').val()) {
            $('.departingFlight1').append(
                `<li class="flight1"><h4 class="airportCodeTitle">Departing Flight ${departureAirport} to ${arrivalAirport}</h4><p>Leaving on: ${departureDate.getMonth()}/${departureDate.getDate()}/${departureDate.getFullYear()} at ${departureDate.getHours()}:${departureDate.getUTCMinutes()}<br> Arriving at destination on: ${arrivalDate.getMonth()}/${arrivalDate.getDate()}/${arrivalDate.getFullYear()} at ${arrivalDate.getHours()}:${arrivalDate.getMinutes()}<br><button class="selectFlight">Select</button></p></li>`
            )
        }
        if (departureAirport === $('.destination').val() && arrivalAirport === $('.airport0').val()) {
            $('.departingFlight2').append(
                `<li class="flight2"><h4 class="airportCodeTitle">Return Flight ${departureAirport} to ${arrivalAirport}</h4><p>Leaving on: ${departureDate.getMonth()}/${departureDate.getDate()}/${departureDate.getFullYear()} at ${departureDate.getHours()}:${departureDate.getUTCMinutes()}<br> Arriving at destination on: ${arrivalDate.getMonth()}/${arrivalDate.getDate()}/${arrivalDate.getFullYear()} at ${arrivalDate.getHours()}:${arrivalDate.getMinutes()}<br><button class="selectFlight">Select</button></p></li>`
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
    selectFlights();
}

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');   
}

function departureDateFormat() {
    let date = $('.startDate').val().split('-');
    return (date[1] + ' ' + date[2] + ' ' + date[0]);
}

function endDateFormat() {
let date = $('.endDate').val().split('-');
return (date[1] + ' ' + date[2] + ' ' + date[0]);
}

function getFlightResults1() {
    $('.departingFlight1').empty();
    const departureLocation0 = $('.airport0').val();
    const destination = $('.destination').val();
    const departureDate = departureDateFormat();
    const params = {
            from0: departureLocation0,
            to0: destination,
            date0: departureDate,
            pax: 1,
            cabin: 'coach'
            }
    const queryString = formatQueryParams(params);
    const url = flightSearchURL + '?' + queryString;
    console.log('index of destination: ', flightCodeList.indexOf(destination));

    fetch(url, {
        headers: {"X-RapidAPI-Key": "37815a5062mshb00a5a1e7f13f85p1e7925jsn183b12ff34e5"}
    })
        .then (response => {
            if (flightCodeList.indexOf(destination) == -1 || flightCodeList.indexOf(departureLocation0) == -1) {
                alert('Please enter valid airport codes.');
                throw new Error(response.statusText);
            }
            else {
                return response.json();
            }
        })
        .then(responseJson => displayFlightResults(responseJson))
        .catch(error => console.log('Flight API not working.'));
}

function getFlightResults2() {
    $('.departingFlight2').empty();
    const departureLocation1 = $('.airport1').val();
    const destination = $('.destination').val();
    const departureDate = departureDateFormat();
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
            if (flightCodeList.indexOf(departureLocation1) == -1) {
                alert('Please enter valid airport codes.');
                throw new Error(response.statusText);
            }
            else {
                return response.json();
            }
        }    
    })
    .then(responseJson => displayFlightResults(responseJson))
    .catch(error => console.log('Flight API not working.'));
}

function getFlightResults3() {
    $('.departingFlight3').empty();
    const departureLocation0 = $('.airport0').val();
    const destination = $('.destination').val();
    const returnDate = endDateFormat();
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
        if (flightCodeList.indexOf(destination) == -1 ) {
            console.log('Please enter valid airport codes.');
            throw new Error(response.statusText);
        }
        else {
            return response.json();
        }
    })
    .then(responseJson => displayFlightResults(responseJson))
    .catch(error => console.log('Flight API not working.'));
}

function getFlightResults4() {
    $('.departingFlight4').empty();
    const departureLocation1 = $('.airport1').val();
    const destination = $('.destination').val();
    const returnDate = endDateFormat();
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
        if (flightCodeList.indexOf(departureLocation1) == -1) {
            console.log('Please enter valid airport codes.');
            throw new Error(response.statusText);
        }
        else {
            return response.json();
        }
    })
    .then(responseJson => displayFlightResults(responseJson))
    .catch(error => console.log('Flight API not working.'));
}

function getAllFlightResults() {
    getFlightResults1();
    getFlightResults2();
    getFlightResults3();
    getFlightResults4();
}

function selectFlights() {
    $('.flight1 button').click(event => {
        $(event.target).closest('li').removeClass('flight1').addClass('selectedFlight');
        $('.flight1').hide();
    })
    $('.flight2 button').click(event => {
        $(event.target).closest('li').removeClass('flight2').addClass('selectedFlight');
        $('.flight2').hide();
    })
    $('.flight3 button').click(event => {
        $(event.target).closest('li').removeClass('flight3').addClass('selectedFlight');
        $('.flight3').hide();
    })
    $('.flight4 button').click(event => {
        $(event.target).closest('li').removeClass('flight4').addClass('selectedFlight');
        $('.flight4').hide();
    })
}

function watchForm() {
    $('.flightResults1').hide();
    $('.flightResults2').hide();
    $('.flightSearchForm').submit(event => {
        $('.flightResults1').show();
        $('.flightResults2').show();
        event.preventDefault();
        getAllFlightResults();
        console.log('form is working');
    })
}

$(watchForm);