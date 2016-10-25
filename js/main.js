// main.js
"use strict";

//TODO: Set popupMsg to zoom map and center on coordinates given
//TODO: Fix lame message for states without projects

var data_processing_module = (function() {
  var data = {};

  function setData(npData){
    console.log('processing data');
    data = npData;
  }

  var clicked = function (){

    let srchInput = npImprovements.searchInput();
    let stateInf =  npImprovements.stateAbvr(srchInput);
    let projects = npImprovements.getNpProjects(stateInf.abvr, data);
    let msg = npImprovements.messager(srchInput, projects);
    npImprovements.popupMsg(msg, stateInf.coords);
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

  document.querySelector('button').onclick = data_processing_module.clicked;

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

function searchInput () {
  let input = document.querySelector('input').value;
  return input;
};

function stateAbvr(stateName) {
  let stateObj = states_hash.find(function (obj) {
    return obj.state === stateName;
  })
  return {
    abvr: stateObj.abvr,
    coords: stateObj.coordinates
  };
};

function getNpProjects(stateAbvr, arr) {
  let stateObj = arr.find(function (obj) {
    if (!(obj.state === stateAbvr)) {
      let msg = 'This state has no National Parks being improved.'
      popupMsg(msg, [45, -98.0]);
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
  popupMsg: popupMsg
}

})();
