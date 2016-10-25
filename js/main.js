// main.js
"use strict";

var data_processing_module = (function() {
  var data = {};

  function setData(npData){
    console.log('processing data');
    data = npData;
  }

  var clicked = function (){

    let srchInput = npImprovements.searchInput();
    let stateInf = npImprovements.stateAbvr(srchInput);
    let abvr = stateInf.abvr;
    let projects = npImprovements.getNpProjects(abvr, data);
    let msg = npImprovements.messager(input, projects);
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

var mymap = L.map('map').setView([50, -98.0], 3);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 50,
    id: 'mapbox.outdoors',
    accessToken: 'pk.eyJ1IjoibWF0c2FkIiwiYSI6ImNpdWZyMGp6ZTAwaHkzM21weXJjb3hzOTMifQ.D7oqQqX-t5YlZ5CeOnCVvQ'
}).addTo(mymap);

function popupMsg (msg, coords) {
  L.popup()
  .setLatLng(coords)
  .setContent(msg)
  .openOn(mymap);
}


document.querySelector('button').onclick = data_processing_module.clicked;

function display (msg) {
  let coords = [32.7, -86.9];
  popupMsg(msg, coords);
  // document.querySelector('.display').innerHTML = msg;
}

function searchInput () {
  let input = document.querySelector('input').value;
  return input;
};

function stateAbvr(stateName) {
  let stateObj = states_hash.find(function (obj) {
    return obj.state === stateName;
  })
  console.log(stateObj.abvr);
  return stateObj.abvr;
  // {
  //   stateObj.abvr,
  //   stateObj.coordinates
  // };
};

function getNpProjects(stateAbvr, arr) {
  let stateObj = arr.find(function (obj) {
    if (!(obj.state === stateAbvr)) {
      let msg = 'This state has no National Parks being improved.'
      display(msg);
      return null;
    }
    else {
      console.log(obj.state === stateAbvr);
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
