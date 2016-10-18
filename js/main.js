// main.js

function getData () {
  return new Promise(function (resolve, reject) {
  setTimeout( function() {
     if (ourData) {
       return dataset
      } else theThing();
    }
  } 2000)
}

console.log('We are up and running!');

// let stateNpData =

function getData() {
  console.log(ourData);
  return ourData
}
// console.log(stateNpData);

document.querySelector('button').onclick = searchStates;
// document.querySelector('.searchBox').onsubmit = searchStates;

function searchStates () {
  let input = document.querySelector('input').value;
  display (input);
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
