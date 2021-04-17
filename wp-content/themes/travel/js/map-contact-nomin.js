jQuery(function($) {
    var mapStyles;
    var markers = [], map, directionsService, directionsDisplay, zoom = 14;
    var geocoder = new google.maps.Geocoder();
    var center = new google.maps.LatLng(49.275026, 23.493101);
    
    var mapStyles = 1;
		if (mapStyles=="1"){
			mapStyles = []
        }
    
    var ibOptions = {
            alignBottom: true,
            content: 'text',
            disableAutoPan: false,
            pixelOffset: new google.maps.Size(-165, -60),
            zIndex: null,
            boxStyle: { 
                width: "250px"
            },
            closeBoxMargin: "0px 0px 0px 0px",
            closeBoxURL: $('#map-canvas').attr("data-close"),
            infoBoxClearance: new google.maps.Size(1, 1),
            isHidden: false,
            enableEventPropagation: false
        },
        ib = new InfoBox(ibOptions);

    var autoCompleteOptions = {
            componentRestrictions: {country: "ua"}
        };


    function addMarker(lat, lng, image, string, map, index){
            var thisLatLng = new google.maps.LatLng(lat, lng),
                marker = new google.maps.Marker({
                    'position': thisLatLng,
                    'icon': image
                });

            var content = '<div class="info-box">'+string+'</div>';

            var fn = markerClickFunction(thisLatLng, content);
            google.maps.event.addListener(marker, 'click', fn);

            if(index) markers[index] = marker;
            else markers.push(marker);
            marker.setMap(map);
    }

    function markerClickFunction(latlng, content) {
        return function(e) {
            ib.setContent(content);
            ib.setPosition(latlng);
            ib.open(map);
        };
    }
    
    function initialize() {
        
        var mapOptions = {
            zoom: zoom,
            scrollwheel: true,
            panControl: false,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE,
                position: google.maps.ControlPosition.LEFT_BOTTOM
            },
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            },
            mapTypeControl: true,
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            center: center,
            styles: mapStyles,
            scrollwheel: false
        };
        
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        $('.marker').each(function(){
            addMarker($(this).data('lat'), $(this).data('lng'), $(this).data('image'), $(this).data('string'), map);
        });

        addMarker($('.marker-main').data('lat'), $('.marker-main').data('lng'), $('.marker-main').data('image'), $('.marker-main').data('string'), map, 'marker-main');

        directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});

        var input = document.getElementById('searchTextField');
        autocomplete = new google.maps.places.Autocomplete(input, autoCompleteOptions);

        google.maps.event.addListener(autocomplete, 'place_changed', function() {
            var place = autocomplete.getPlace();
            calculateAndDisplayRoute(directionsService, directionsDisplay, place);
        });
        
    }


    function calculateAndDisplayRoute(directionsService, directionsDisplay, place) {
        directionsDisplay.setMap(null);
        directionsService.route({
            origin: markers['marker-main'].position,
            destination: place.geometry.location,
            travelMode: google.maps.TravelMode.DRIVING
        }, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsDisplay.setMap(map);
                directionsDisplay.setDirections(response);

                duration = secondsToString(response.routes[0].legs[0].duration.value);
                distance = response.routes[0].legs[0].distance.value/1000;

                if(markers['marker-destination']) markers['marker-destination'].setMap(null);
                ib.close();
                addMarker(place.geometry.location.lat(), place.geometry.location.lng(), '/wp-content/themes/travel/img/marker.png', '<b>'+place.name+'</b><p><b>Расстояние: </b>  '+distance+' km</p> <p><b>Время:</b> <span></span>'+duration+'</p>', map, 'marker-destination');
                $('.map-input-wrapper').addClass('active');
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }

    function secondsToString(seconds) {
        var numyears = Math.floor(seconds / 31536000);
        var numdays = Math.floor((seconds % 31536000) / 86400); 
        var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
        var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
        var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
        return ((numyears!==0)?(numyears + " y. "):'') + ((numdays!==0)?(numdays + " day. "):'') + ((numhours!==0)?(numhours + " h. "):'') + ((numminutes!==0)?(numminutes + " min. "):'');
    }

    $('.marker-click').on('click', function(){
        map.setZoom(14);
        map.setCenter(new google.maps.LatLng($(this).data('lat'), $(this).data('lng')));
    });

    $('.clear-route').on('click', function(){
        directionsDisplay.setMap(null);
        if(markers['marker-destination']) markers['marker-destination'].setMap(null);
        $('.map-input-wrapper').removeClass('active');
        $('#searchTextField').val('');
        ib.close();
        map.setCenter(center);
        map.setZoom(zoom);
    });

    if ($('#map-canvas').length){
        setTimeout(function(){initialize();}, 300);
    };
        
});