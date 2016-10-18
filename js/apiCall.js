//apiCall.js

/* https://open.whitehouse.gov/ data from the
   Climate Change Adaptation Task Force
*/

var ourData = {};


  let urlNP = 'https://open.whitehouse.gov/resource/qswu-k8nh.json'
  // let urlStates = https://gist.github.com/matsad3547/f1edc675c7ede3f808f746747d3cbfa6.js

var api_module = function() {
  let url = 'https://open.whitehouse.gov/resource/ybwj-5tg8.json'

  var jQueryPromise = $.ajax({
    dataType: "json",
    url: urlNP,
    data: {
      "$limit" : 100
    }
  });

  var realPromise = Promise.resolve(jQueryPromise);
  realPromise.then(function(response) {
    data_processing_module.setData(response);
  }).catch (function (err) {
    console.log('There is an error');
      // TODO: call error handler here
  });
};

  window.onload = function nationalParkImprovement () {
    api_module();
  };
