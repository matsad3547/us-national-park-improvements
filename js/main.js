// main.js

var dataProcessing = (function (){
  var data = {};

console.log('We are up and running!');

function dataLoad () {
  return new Promise( function(resolve, reject) {
    setTimeout( function() {
      if (ourData) {
        resolve('got it');
      }
      else {
        reject('no go');
      }
    }, 2000);
  })
};

var loaded = dataLoad();

loaded.then(function(result) {
  // console.log(ourData);
  writeObject(ourData);
  }, function(err) {
    console.log(err + ': Try again');
});

console.log(data);

// function getData() {
//   writeObject(ourData);
//   // console.log(ourData);
//   console.log(ourData[0].national_parks_being_improved);
//   return ourData;
// };

function writeObject (arr){
  arr.map(transcribeData)
};

function transcribeData (obj) {
  data = {
    projects: obj.national_parks_being_improved,
    state: obj.state
  }
  console.log(data);
  return data;
};

//TODO: Define a method (within data???) for getting at the objects - need a promise???

//   function getNpProjects (stateAbvr) {
//     let numProjects = this.national_parks_being_improved;
//   }
//   return {
//     getNumProjects: getNpProjects
//   }
// })();

document.querySelector('button').onclick = searchStates;

function searchStates () {
  let input = document.querySelector('input').value;
  let stateAbvr = stateID(input)
  // let msg = input + ' has ' + num + 'National Park improvement projects';
  display (stateAbvr);
  console.log(input);
}

function display (input) {
  document.querySelector('.numImprov').innerHTML = input;
}

function stateID(stateName) {
  return states_hash[stateName];
}

let stateName = 'Idaho';
console.log(stateID(stateName));

})();
