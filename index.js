'use strict';

const flightSearchURL = "https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session";
const flightApiKey = "37815a5062mshb00a5a1e7f13f85p1e7925jsn183b12ff34e5";

const options = {
    headers: new Headers({
        "X-RapidAPI-Key": flightApiKey})
};

function displayFlightResults(responseJson) {
    $('.flightSearchResults').empty();
    console.log(responseJson);
    for (let i = 0; i < responseJson.length; i++) {
        $('.flightSearchResults').append(
            `<p>${responseJson.data[i].intins[0]}</p>`
        )
    };
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

function getFlightResults() {
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
    const params = {
        from0: departureLocation0,
        from1: departureLocation1,
        to0: destination,
        to1: destination,
        date0: departureDate,
        date1: returnDate,
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
        .then (responseJson => displayFlightResults(responseJson))
        .catch(error => alert('Something went wrong!'));
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