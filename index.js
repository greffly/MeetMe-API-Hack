'use strict';

const flightSearchURL = "https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session";
const flightApiKey = "37815a5062mshb00a5a1e7f13f85p1e7925jsn183b12ff34e5";
var flightCodeList = Object.keys(airportCodeData);

const options = {
    headers: new Headers({
        "X-RapidAPI-Key": flightApiKey})
};

/*
function noAvailableFlights() {
    if ($('.flight1').length == 0 && $('.flight2').length == 0) {
        $('.departingFlight1').html(
            `<p class="errorMessage">There are no direct flights available for your trip at this time.</p>`
        )
    }
    if ($('.flight3').length == 0 && $('.flight4').length == 0) {
        $('.departingFlight3').html(
            `<p class="errorMessage">There are no direct flights available for your trip at this time.</p>`
        )
    }
    console.log($('.flight1').length, $('.flight2').length, $('.flight3').length, $('.flight4').length);
}
*/

function displayFlightResults(responseJson) {
    console.log('displayflightresults working');
    var departureDate;
    var arrivalDate;
    var departureAirport;
    var arrivalAirport;
    var jsonDateFormat;
    var hoursArrive;
    var minutesArrive;
    var arrivalTime;
    var hoursDepart;
    var minutesDepart;
    var departureTime;

    //this is the for loop I use to isolate and access each leg of a flight
    for (var prop in responseJson.legs) {
        departureDate = new Date(responseJson.legs[prop].depart_iso);
        arrivalDate = new Date(`${responseJson.legs[prop].arrive_iso}`);
        departureAirport = (`${responseJson.legs[prop].from_code}`);
        arrivalAirport = (`${responseJson.legs[prop].to_code}`);
        jsonDateFormat = (('0' + (departureDate.getMonth() + 1)) + '/' + departureDate.getDate() + '/' + departureDate.getFullYear()); 
        hoursArrive = arrivalDate.getHours();
        minutesArrive = arrivalDate.getMinutes();
        hoursDepart = departureDate.getHours();
        minutesDepart = departureDate.getMinutes();

        //this code converts military time to standard time with AM and PM tags
        if (minutesArrive < 6) {
            minutesArrive += '0';
        }
        if ((minutesArrive >=6 ) && (minutesArrive < 10)) {
            minutesArrive = '0' + minutesArrive;
        }
        if (hoursArrive < 12) {
            arrivalTime = hoursArrive + ':' + minutesArrive + ' AM';
        }
        if (hoursArrive > 12) {
            hoursArrive -= 12;
            arrivalTime = hoursArrive + ':' + minutesArrive + ' PM';
        } 
        if (hoursArrive === 0) {
            hoursArrive = 12;
            arrivalTime = hoursArrive + ':' + minutesArrive + ' PM';
        }

        if (minutesDepart < 6){
            minutesDepart += '0';
        }
        if ((minutesDepart >=6 ) && (minutesDepart < 10)) {
            minutesDepart = '0' + minutesDepart;
        }
        if (hoursDepart < 12) {
            departureTime = hoursDepart + ':' + minutesDepart + ' AM';
        }
        if (hoursDepart > 12) {
            hoursDepart -= 12;
            departureTime = hoursDepart + ':' + minutesDepart + ' PM';
        } 
        if (hoursDepart === 0) {
            hoursDepart = 12;
            departureTime = hoursDepart + ':' + minutesDepart + ' PM';
        }

        $('.flightResults1').show();
        $('.flightResults2').show();

       if (departureAirport === $('.airport0').val().toUpperCase() && arrivalAirport === $('.destination').val().toUpperCase()) {
            $('.departingFlight1').append(
                `<li class="flight1"><h4 class="airportCodeTitle">${departureAirport} &rarr; ${arrivalAirport}</h4><p class="departureAndArrivalInfo">Leaving on: ${jsonDateFormat} at ${departureTime}<br> Arriving at: ${jsonDateFormat} at ${arrivalTime}<br><button class="selectFlight" id="button1">Select</button></p></li>`
            )
        }
        if (departureAirport === $('.destination').val().toUpperCase() && arrivalAirport === $('.airport0').val().toUpperCase()) {
            $('.departingFlight2').append(
                `<li class="flight2"><h4 class="airportCodeTitle">${departureAirport} &rarr; ${arrivalAirport}</h4><p class="departureAndArrivalInfo">Leaving on: ${jsonDateFormat} at ${departureTime}<br> Arriving at: ${jsonDateFormat} at ${arrivalTime}<br><button class="selectFlight" id="button2">Select</button></p></li>`
            )
        }
        if (departureAirport === $('.airport1').val().toUpperCase() && arrivalAirport === $('.destination').val().toUpperCase()) {
            $('.departingFlight3').append(
                `<li class="flight3"><h4 class="airportCodeTitle">${departureAirport} &rarr; ${arrivalAirport}</h4><p class="departureAndArrivalInfo">Leaving on: ${jsonDateFormat} at ${departureTime}<br> Arriving at: ${jsonDateFormat} at ${arrivalTime}<br><button class="selectFlight" id="button3">Select</button></p></li>`
            )
        }
        if (departureAirport === $('.destination').val().toUpperCase() && arrivalAirport === $('.airport1').val().toUpperCase()) {
            $('.departingFlight4').append(
                `<li class="flight4"><h4 class="airportCodeTitle">${departureAirport} &rarr; ${arrivalAirport}</h4><p class="departureAndArrivalInfo">Leaving on: ${jsonDateFormat} at ${departureTime}<br> Arriving at: ${jsonDateFormat} at ${arrivalTime}<br><button class="selectFlight" id="button4">Select</button></p></li>`
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

function getFlightResults() {
    $('.departingFlight1').empty();
    $('.departingFlight2').empty();
    $('.departingFlight3').empty();
    $('.departingFlight4').empty();

    const departureLocation0 = $('.airport0').val().toUpperCase();
    const departureLocation1 = $('.airport1').val().toUpperCase();
    const destination = $('.destination').val().toUpperCase();
    const departureDate = departureDateFormat();
    const returnDate = endDateFormat();

    //I am currently declaring separate params for each flight leg. I plan to come back and consolidate these into one API call.
    const paramsFlight1 = {
            from0: departureLocation0,
            to0: destination,
            date0: departureDate,
            pax: 1,
            cabin: 'coach'
            }
    const queryString1 = formatQueryParams(paramsFlight1);
    const urlFlight1 = flightSearchURL + '?' + queryString1;
    fetch(urlFlight1, {
        headers: {"X-RapidAPI-Key": "37815a5062mshb00a5a1e7f13f85p1e7925jsn183b12ff34e5"}
    })
        .then (response => {
            if (response.status == 503) {
                $('.ifError').append(`<p class='errorMessage'>Sorry, something went wrong! Please try your search again.</p>`)
                throw new Error(response.statusText);
            }
            else if (flightCodeList.indexOf(destination) == -1) {
                $('.ifError').append(`<p class='errorMessage'>Please enter a valid US destination airport code.</p>`)
                throw new Error(response.statusText);
            }
            else {
                return response.json();
            }
        })
        .then(responseJson => displayFlightResults(responseJson))
        .catch(error => console.log('Flight1 API not working.'));    

    const paramsFlight2 = {
        from0: departureLocation1,
        to0: destination,
        date0: departureDate,
        pax: 1,
        cabin: 'coach'
    }
    const queryString2 = formatQueryParams(paramsFlight2);
    const urlFlight2 = flightSearchURL + '?' + queryString2;

fetch(urlFlight2, {
    headers: {"X-RapidAPI-Key": "37815a5062mshb00a5a1e7f13f85p1e7925jsn183b12ff34e5"}
})
    .then (response => {
            if (flightCodeList.indexOf(departureLocation1) == -1) {
                $('.ifError').append(`<p class='errorMessage'>Please enter a valid US airport code for traveler 2.</p>`)
                throw new Error(response.statusText);
            }
            else {
                return response.json();
            }
        }    
    )
    .then(responseJson => displayFlightResults(responseJson))
    .catch(error => console.log('Flight2 API not working.'));

    const paramsFlight3 = {
        from0: destination,
        to0: departureLocation0,
        date0: returnDate,
        pax: 1,
        cabin: 'coach'
    }
    const queryString3 = formatQueryParams(paramsFlight3);
    const urlFlight3 = flightSearchURL + '?' + queryString3;

fetch(urlFlight3, {
    headers: {"X-RapidAPI-Key": "37815a5062mshb00a5a1e7f13f85p1e7925jsn183b12ff34e5"}
})
    .then (response => {
        if (flightCodeList.indexOf(departureLocation0) == -1) {
            $('.ifError').append(`<p class='errorMessage'>Please enter a valid US airport code for traveler 1.</p>`)
            throw new Error(response.statusText);
        }
        else {
            return response.json();
        }
    })
    .then(responseJson => displayFlightResults(responseJson))
    .catch(error => console.log('Flight3 API not working.'));

    const paramsFlight4 = {
        from0: destination,
        to0: departureLocation1,
        date0: returnDate,
        pax: 1,
        cabin: 'coach'
    }
    const queryString4 = formatQueryParams(paramsFlight4);
    const urlFlight4 = flightSearchURL + '?' + queryString4;

fetch(urlFlight4, {
    headers: {"X-RapidAPI-Key": "37815a5062mshb00a5a1e7f13f85p1e7925jsn183b12ff34e5"}
})
    .then (response => {
        if (flightCodeList.indexOf(destination) == -1) {
            $('.ifError').append(`<p class='errorMessage'>Please enter a valid US destination airport code.</p>`)
            throw new Error(response.statusText);
        }
        else {
            return response.json();
        }
    })
    .then(responseJson => displayFlightResults(responseJson))
    .catch(error => console.log('Flight4 API not working.'));
}

function selectFlights() {
    //this function selects the user selected flight, and deletes all other flights for that trip, allowing the user to select one departing and one returning flight.
    $('.flight1 button').click(event => {
        $(event.target).closest('li').removeClass('flight1').addClass('selectedFlight');
        event.target.innerHTML = "Selected!";
        $('.flight1').hide();
    })
    $('.flight2 button').click(event => {
        $(event.target).closest('li').removeClass('flight2').addClass('selectedFlight');
        event.target.innerHTML = "Selected!";
        $('.flight2').hide();
    })
    $('.flight3 button').click(event => {
        $(event.target).closest('li').removeClass('flight3').addClass('selectedFlight');
        event.target.innerHTML = "Selected!";
        $('.flight3').hide();
    })
    $('.flight4 button').click(event => {
        $(event.target).closest('li').removeClass('flight4').addClass('selectedFlight');
        event.target.innerHTML = "Selected!";
        $('.flight4').hide();
    })
}

function watchForm() {
    $('.flightResults1').hide();
    $('.flightResults2').hide();
    $('.flightSearchForm').submit(event => {
        event.preventDefault();
        $('.errorMessage').empty();
        getFlightResults();
        console.log('flight form is working');
    })
}

$(watchForm);