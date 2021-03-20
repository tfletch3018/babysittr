// mapQuestApi = '8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii';

// var location = userInput;


function restaurants() {
    var restaurantsUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=39.8523,+-75.0679&radius=25&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C581208&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(restaurantsUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
                // .append(searchResults[i].name)
            }
            console.log("-----------------")
        })
    console.log(restaurantsUrl);
}
function aquariums() {
    var aquariumsUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=39.8523,+-75.0679&radius=25&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C842205&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(aquariumsUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
                // .append(searchResults[i].name)
            }
            console.log("-----------------")
        })
    console.log(aquariumsUrl);
}
function iceCream() {
    var iceCreamUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=39.8523,+-75.0679&radius=25&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C581203&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(iceCreamUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
                // .append(searchResults[i].name)
            }
            console.log("-----------------")
        })
    console.log(iceCreamUrl);
}
function bowling() {
    var bowlingUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=39.8523,+-75.0679&radius=25&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C793301&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(bowlingUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
                // .append(searchResults[i].name)
            }
            console.log("-----------------")
        })
    console.log(bowlingUrl);
}
function pools() {
    var poolsUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=39.8523,+-75.0679&radius=25&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C799969&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(poolsUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
                // .append(searchResults[i].name)
            }
            console.log("-----------------")
        })
    console.log(poolsUrl);
}
function amusementPark() {
    var amusementParkUrl = 'https://www.mapquestapi.com/search/v2/radius?origin=39.8523,+-75.0679&radius=50&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C799604&outFormat=json&key=8kMgrQJseESEni1XetBPHUm2Ogcgj9Ii'
    fetch(amusementParkUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.searchResults.length; i++) {
                console.log(data.searchResults[i].name)
                // .append(searchResults[i].name)
            }
            console.log("-----------------")
        })
    console.log(amusementParkUrl);
}
restaurants()
aquariums()
iceCream()
bowling()
pools()
amusementPark()


// $('').on("click", restaurants()){

// }

// $('').on("click", aquariums()){

// }

// $('').on("click", iceCream()){

// }

// $('').on("click", bowling()){

// }

// $('').on("click", pools()){

// }

// $('').on("click", amusementPark()){

// }



$(document).ready(function () {
    $("#modal").addClass("is-active");
    $("#enter-btn").click(function () {
        $("#modal").removeClass("is-active");
    });
});

//Function to display running clock
var currentDay = moment().format('dddd') + " " + moment().format("D MMMM YYYY");
var currentTime = moment().format('hh:mm:ss a');

var interval = setInterval(function () {
    var timeNow = moment();
    $('#clock').html(timeNow.format('YYYY MMMM DD') + ' '
        + timeNow.format('dddd')
            .substring(0, 3).toUpperCase());
    $('#clock').html(currentDay + " " + timeNow.format('hh:mm:ss A'));
}, 1000);

// dynamically generated schedule based on modal input
var hours;
var place;
var sitter;

var container = document.getElementById("main-container");
var sched = document.createElement("div");

$(sched).addClass("box droppable");

container.appendChild(sched);

function populate() {
    hours = $("#time").val();
    place = $("#loc").val();
    sitter = $("#babysitter").val();

    console.log(hours);
    console.log(place);
    console.log(sitter);
    for (i = 0; i < hours; i++) {
        var timeblock = document.createElement("div")
        $(timeblock).addClass("columns")
        sched.appendChild(timeblock);

        var time = document.createElement("div");
        $(time).addClass("column is-1 schedblock");
        timeblock.appendChild(time);

        var block = document.createElement("div");
        $(block).addClass("column is-9 schedblock");
        timeblock.appendChild(block);
    }
}

// weather api call with place pulled from modal
place = $("#loc").val();
var api = "http://api.weatherapi.com/v1/current.json?key=02957dd1b8bc47448a7215119211803&q=" + place + "&aqi=no";
// var rainy_codes = [1183, 1186, 1189, 1192];
function call() {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            console.log(data.current.condition.code);
            console.log(data.location.name);
            console.log(data.current.condition.text);
            console.log(data.current.temp_f);
            console.log('The weather in ' + data.location.name + ' is ' + data.current.temp_f + ' and ' + data.current.condition.text + '.');
            console.log(data);
        });
}
call()