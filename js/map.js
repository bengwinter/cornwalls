'use strict'

$(document).ready(function(){
  // When the window has finished loading create our google map below
  google.maps.event.addDomListener(window, 'load', init);

  function initMap() {
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      var mapOptions = {
          // How zoomed in you want the map to start at (always required)
          zoom: 16,

          scrollwheel: false, 
          disableDoubleClickZoom: true,


          // The latitude and longitude to center the map (always required)
          center: new google.maps.LatLng(42.3493521,-71.0958689),

          // How you would like to style the map. 
          // This is where you would paste any style found on Snazzy Maps.
          styles: [{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#C6E2FF",}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#C5E3BF"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#D1D1B8"}]}]
      };

      // Get the HTML DOM element that will contain your map 
      // We are using a div with id="map" seen below in the <body>
      var mapElement = document.getElementById('goog-map');

      // Create the Google Map using our element and options defined above
      var map = new google.maps.Map(mapElement, mapOptions);

      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(42.3493521,-71.0958689),
          map: map,
          title: "Cornwall's"
      });
  }

});
