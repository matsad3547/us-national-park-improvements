// main.js
"use strict";

var data_processing_module = (function() {
  var data = {};

  function setData(npData){
    console.log('processing data');
    data = npData;
    // console.log(data);
  }

  var clicked = function (){
    console.log('clicked');
    let input = npImprovements.searchInput();
    let abvr = npImprovements.stateAbvr(input);
    let projects = npImprovements.getNpProjects(abvr, data, input);
    let msg = npImprovements.messager(input, projects);
    // console.log('cats');
    npImprovements.display(msg);
    console.log(msg);
  }

  return {
    setData: setData,
    clicked: clicked
  };
})();

var npImprovements = (function (){
  var data = {};

  console.log('We are up and running!');

// initialize the map on the "map" div with a given center and zoom
// var map = L.map('map', {
//   // layers: tilelayer
//     center: [38.5, -98.0],
//     zoom: 13
// }).setView([38.5, -98.0], 4);

var mymap = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     maxZoom: 18,
//     id: 'northAmerica',
//     accessToken: 'pk.eyJ1IjoibWF0c2FkIiwiYSI6ImNpdWZyMGp6ZTAwaHkzM21weXJjb3hzOTMifQ.D7oqQqX-t5YlZ5CeOnCVvQ'
// }).addTo(mymap);

document.querySelector('button').onclick = data_processing_module.clicked;

function display (msg) {
  document.querySelector('.display').innerHTML = msg;
}

function searchInput () {
  let input = document.querySelector('input').value;
  // console.log(input);
  return input;
};

function stateAbvr(stateName) {
  let stateObj = states_hash.find(function (obj) {
    return obj.state === stateName;
  })
  return stateObj.abvr;
};


//TODO: Add error message for undefined states

function getNpProjects(stateAbvr, arr) {
  let stateObj = arr.find(function (obj) {
    if (!(obj.state === stateAbvr)) {
      let msg = 'This state has no National Parks being improved.'
      display(msg);
      return null;
    }
    else {
      return obj.state === stateAbvr;
    }
  })
  return stateObj.national_parks_being_improved;
};

function messager(state, numProjects){
  let msg;
  if (numProjects > 1) {
    msg = state + ' has ' + numProjects + ' National Parks being improved!';
  }
  else if (numProjects <= 1){
    msg = state + ' has ' + numProjects + ' National Park being improved!';
  }
  return msg;
}

return {
  searchInput: searchInput,
  stateAbvr: stateAbvr,
  getNpProjects: getNpProjects,
  messager: messager,
  display: display
}

})();
