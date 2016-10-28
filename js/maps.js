'use strict';

var maps = (function() {

  var mymap = L.map('map', {
    center: [55, -98],
    zoom: 3,
    minZoom: 3,
    zoomControl: false
  });

  // var mymap = L.map('map').setView([50, -98.0], 3);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 50,
      id: 'mapbox.outdoors',
      accessToken: 'pk.eyJ1IjoibWF0c2FkIiwiYSI6ImNpdWZyMGp6ZTAwaHkzM21weXJjb3hzOTMifQ.D7oqQqX-t5YlZ5CeOnCVvQ'
  }).addTo(mymap);

  function popupMsg (msg, coords, zoom) {
    L.popup()
    .setLatLng(coords)
    .setContent(msg)
    .openOn(mymap);
    mymap.setView(coords, zoom);
  }

  return {
    popupMsg: popupMsg
  }
})();
