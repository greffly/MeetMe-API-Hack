'use strict';

const flightSearchURL = "https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session";
const flightApiKey = "37815a5062mshb00a5a1e7f13f85p1e7925jsn183b12ff34e5";

let leg = 1;
//${paramsStore[leg].from0} //this equals the departure of the first flight

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
    for (var prop in responseJson.routings) {
        //console.log('step 3: parent value for routings is: ', `${Object.keys(responseJson.routings)}`);
        //console.log('step 2: leg identity code in routings is: '`${Object.values(responseJson.routings[prop].leg_idens)}`)
    }
    for (var prop in responseJson.itins) {
        console.log('step 4: routing iden for itins is: ', `${Object.values(responseJson.itins[prop].routing_idens)}`);
        //console.log('price for itins is: ', `${responseJson.itins[prop].price}`);
    }
    for (var prop in responseJson.legs) {
        departureDate = new Date(`${responseJson.legs[prop].depart_iso}`);
        arrivalDate = new Date(`${responseJson.legs[prop].arrive_iso}`);
        departureAirport = (`${responseJson.legs[prop].from_code}`);
        arrivalAirport = (`${responseJson.legs[prop].to_code}`);
        //console.log('step 1: leg of flight code is: ', `${Object.keys(responseJson.legs)}`);
        

        //console.log('Leaving on:', departureDate.getMonth() + '/' + departureDate.getDate() + '/' + departureDate.getFullYear() + ' at ' + departureDate.getHours() + ':' + departureDate.getMinutes(), 'Arriving to destination on:', arrivalDate.getMonth() + '/' + arrivalDate.getDate() + '/' + arrivalDate.getFullYear() + ' at ' + arrivalDate.getHours() + ':' + arrivalDate.getMinutes());
        if (departureAirport === $('.airport0').val() && arrivalAirport === $('.destination').val()) {
            $('.flightResultsList1').append(
                `<li class="flight1"><h4 class="airportCodeTitle">Departing Flight ${departureAirport} to ${arrivalAirport}</h4><p>Leaving on: ${departureDate.getMonth()}/${departureDate.getDate()}/${departureDate.getFullYear()} at ${departureDate.getHours()}:${departureDate.getUTCMinutes()}<br> Arriving at destination on: ${arrivalDate.getMonth()}/${arrivalDate.getDate()}/${arrivalDate.getFullYear()} at ${arrivalDate.getHours()}:${arrivalDate.getMinutes()}<h4 class="airportCodeTitle">Return Flight ${arrivalAirport} to ${departureAirport}</h4><p>Leaving on: ${departureDate.getMonth()}/${departureDate.getDate()}/${departureDate.getFullYear()} at ${departureDate.getHours()}:${departureDate.getUTCMinutes()}<br> Arriving at destination on: ${arrivalDate.getMonth()}/${arrivalDate.getDate()}/${arrivalDate.getFullYear()} at ${arrivalDate.getHours()}:${arrivalDate.getMinutes()}<br><h4 class="cost">Cost: Insert Cost Here<h4></p></li>`
            )
        }
        if (departureAirport === $('.airport1').val() && arrivalAirport === $('.destination').val()) {
            $('.flightResultsList2').append(
                `<li class="flight1"><h4 class="airportCodeTitle">Departing Flight ${departureAirport} to ${arrivalAirport}</h4><p>Leaving on: ${departureDate.getMonth()}/${departureDate.getDate()}/${departureDate.getFullYear()} at ${departureDate.getHours()}:${departureDate.getUTCMinutes()}<br> Arriving at destination on: ${arrivalDate.getMonth()}/${arrivalDate.getDate()}/${arrivalDate.getFullYear()} at ${arrivalDate.getHours()}:${arrivalDate.getMinutes()}<h4 class="airportCodeTitle">Return Flight ${arrivalAirport} to ${departureAirport}</h4><p>Leaving on: ${departureDate.getMonth()}/${departureDate.getDate()}/${departureDate.getFullYear()} at ${departureDate.getHours()}:${departureDate.getUTCMinutes()}<br> Arriving at destination on: ${arrivalDate.getMonth()}/${arrivalDate.getDate()}/${arrivalDate.getFullYear()} at ${arrivalDate.getHours()}:${arrivalDate.getMinutes()}<br><h4 class="cost">Cost: Insert Cost Here<h4></p></li>`
            )
        }
    }
}

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');   
}

/*function dateFormat() {
    $('#dates').each(function() {
        let newDate = $(this),
        date= newDate.val().split('-'),
    })
}*/

/*
we need one API call for person 1 leaving - we have this
we need one API call for person 2 leaving
we need one API call for person 1 return
we need one API call for person 2 return
*/

//getFlightResults('.airport0', '.destination');
//going to call this function 4 times with different variables

    /*function getFlightResults(departureAirport, arrivalAirport, departureDate) {
        
    }
    */

function getFlightResults() {
    function departureDateFormat() {
        let date = $('.startDate').val().split('-');
        return (date[1] + ' ' + date[2] + ' ' + date[0]);
    }
    function endDateFormat() {
        let date = $('.endDate').val().split('-');
        return (date[1] + ' ' + date[2] + ' ' + date[0]);
    }
    //const departureLocation = $(departureAirport).val();
    const departureLocation0 = $('.airport0').val();
    const departureLocation1 = $('.airport1').val(); //delete this line
    const destination = $('.destination').val();
    //const destination = $(arrivalAirport).val(); change names of consts
    const departureDate = departureDateFormat();
    const returnDate = endDateFormat();
    const params = {
            leg: 1,
            from0: departureLocation0,
            from1: departureLocation1,
            from2: destination,
            from3: destination,
            to0: destination,
            to1: destination,
            to2: departureLocation0,
            to3: departureLocation1,
            date0: departureDate,
            date1: returnDate,
            pax: 1,
            cabin: 'coach'
            }
    const queryString = formatQueryParams(params);
    const url = flightSearchURL + '?' + queryString;

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

function watchForm() {
    $('.flightResults1').hide();
    $('.flightResults2').hide();
    $('.flightSearchForm').submit(event => {
        $('.flightResults1').show();
        $('.flightResults2').show();
        event.preventDefault();
        getFlightResults();
        console.log('form is working');
        //console.log(getFlightResults());
    })
}

$(watchForm);