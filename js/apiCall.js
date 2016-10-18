//apiCall.js

/* https://open.whitehouse.gov/ data from the
   Climate Change Adaptation Task Force
*/

var ourData = {};

window.onload = function getDataSets () {

  let urlNP = 'https://open.whitehouse.gov/resource/qswu-k8nh.json'
  // let urlStates = https://gist.github.com/matsad3547/f1edc675c7ede3f808f746747d3cbfa6.js

  // over 27,000 hits with the following
  // $.get(url, function(data) {
  //   console.log(data);
  // });

  // we'll do the long version to prevent overload
  $.ajax({
    dataType: "json",
    url: urlNP,
    data: {
      "$limit" : 100
    }
  }).done(function(data) {
    ourData = data;
    // getData(ourData);
  })



};
