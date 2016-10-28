"use strict";

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
    let msg = '';
    if (projects) {
      msg = npImprovements.messager(srchInput, projects)
    }
    else {
      msg = srchInput + ' does not have any National Parks being improved.'
    }
    maps.popupMsg(msg, stateInf.coords, stateInf.zoom);
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
      coords: stateObj.coordinates,
      zoom: stateObj.zoom
    };
  };

  function getStateObj (stateAbvr, arr) {
    let stateObj = arr.find( (obj) => obj.state === stateAbvr);
  return stateObj;
  };

  function getNpProjects(stateAbvr, arr) {
    let stateObj = getStateObj(stateAbvr, arr)
    let result;
    if (stateObj) {
      result = stateObj.national_parks_being_improved;
    }
    else {
      result = undefined;
    }
    return result;
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
  };

return {
  searchInput: searchInput,
  stateAbvr: stateAbvr,
  getNpProjects: getNpProjects,
  messager: messager,
}

})();
