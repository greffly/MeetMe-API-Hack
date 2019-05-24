'use strict';

const flightSearchURL = "https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session";
const flightApiKey = "37815a5062mshb00a5a1e7f13f85p1e7925jsn183b12ff34e5";


const options = {
    headers: new Headers({
        "X-RapidAPI-Key": flightApiKey})
};

function displayFlightResults(responseJson) {
    //$('.flightSearchResults').empty();
    console.log('displayflightresults working');
    var departureDate;
    var arrivalDate;
    var departureAirport;
    var arrivalAirport;
    for (var prop in responseJson.legs) {
        departureDate = new Date(`${responseJson.legs[prop].depart_iso}`);
        arrivalDate = new Date(`${responseJson.legs[prop].arrive_iso}`);
        departureAirport = (`${responseJson.legs[prop].from_code}`);
        arrivalAirport = (`${responseJson.legs[prop].to_code}`);
        //console.log('Leaving on:', departureDate.getMonth() + '/' + departureDate.getDate() + '/' + departureDate.getFullYear() + ' at ' + departureDate.getHours() + ':' + departureDate.getMinutes(), 'Arriving to destination on:', arrivalDate.getMonth() + '/' + arrivalDate.getDate() + '/' + arrivalDate.getFullYear() + ' at ' + arrivalDate.getHours() + ':' + arrivalDate.getMinutes());
        $('.flightResultsList1').append(
            `<li class="flight1"><h4 class="airportCodeTitle">${departureAirport} to ${arrivalAirport}</h4><p>Leaving on: ${departureDate.getMonth()}/${departureDate.getDate()}/${departureDate.getFullYear()} at ${departureDate.getHours()}:${departureDate.getUTCMinutes()}<br> Arriving at destination on: ${arrivalDate.getMonth()}/${arrivalDate.getDate()}/${arrivalDate.getFullYear()} at ${arrivalDate.getHours()}:${arrivalDate.getMinutes()}</p></li>`
        )
        $('.flightResultsList2').append(
            `<li class="flight1"><h4 class="airportCodeTitle">${departureAirport} to ${arrivalAirport}</h4><p>Leaving on: ${departureDate.getMonth()}/${departureDate.getDate()}/${departureDate.getFullYear()} at ${departureDate.getHours()}:${departureDate.getUTCMinutes()}<br> Arriving at destination on: ${arrivalDate.getMonth()}/${arrivalDate.getDate()}/${arrivalDate.getFullYear()} at ${arrivalDate.getHours()}:${arrivalDate.getMinutes()}</p></li>`
        )
    }
}

    /*var string1 = "";
    var object1 = responseJson;
    //console.log(object1.legs.arrive);
    //var object2 = property1 in object1;
    for (var leg in object1.legs) {
        //console.log(object1.legs[leg].arrive_iso);
        let allLegs = object1.legs[leg];
        let oneLeg = Object.values(allLegs)[3];
        //let theLeg = Object.keys(oneLeg);
        //console.log(oneLeg);
    }*/

   // for (let i = 0; i < 10; i++) {
        //console.log('for loop is working:' + responseJson.legs);
        /*$('.flightSearchResults').append(
            `<p>${oneLeg}</p>`
        )*/

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
    //const departureLocation1 = $('.airport1').val(); delete this line
    const destination = $('.destination').val();
    //const destination = $(arrivalAirport).val(); change names of consts
    const departureDate = departureDateFormat();
    const returnDate = endDateFormat();
    const params = {
        from0: departureLocation0,
        //from1: departureLocation1,
        //from2: 
        to0: destination,
        //to1: destination,
        //to2:
        date0: departureDate,
        date1: returnDate,
        pax: 1,
        cabin: 'coach'
    }
    const queryString = formatQueryParams(params);
    const url = flightSearchURL + '?' + queryString;
    console.log(url);
    //going to have to make separate URL calls

    fetch(url, {
        headers: {"X-RapidAPI-Key": "37815a5062mshb00a5a1e7f13f85p1e7925jsn183b12ff34e5"}
    })
        .then (response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayFlightResults(responseJson))
        .catch(error => alert('Flight API not working.'));
}

function watchForm() {
    $('.flightSearchForm').submit(event => {
        event.preventDefault();
        getFlightResults();
        console.log('form is working');
        //console.log(getFlightResults());
    })
}

$(watchForm);