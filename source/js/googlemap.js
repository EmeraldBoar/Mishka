var initMap = function () {
  var pos = {lat: 59.938719, lng: 30.323023};

  var opt = {
    center: {lat: 59.938719, lng: 30.323023},
    zoom: 14
  };

  var map = new google.maps.Map(document.querySelector('.contacts__map'), opt);

  var marker = new google.maps.Marker({
    position: pos,
    map: map,
    icon: './img/icon-map-pin.svg',
  });
};