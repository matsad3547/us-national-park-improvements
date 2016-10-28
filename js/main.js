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
    maps.popupMsg(msg, stateInf.coords);
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
      maps.popupMsg(msg, [45, -98.0]);
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
}

})();
