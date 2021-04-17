/*#####*/
/* MAP */
/*#####*/
$(function() {
	var marker = [], infowindow = [], map, image = 'img/marker.png';

	/*########################*/
	/* 01 ADD MARKER FUNCTION */
	/*########################*/
	function addMarker(location,name,contentstr,markimg){
		marker[name] = new google.maps.Marker({
			position: location,
			map: map,
			icon: markimg
		});
		marker[name].setMap(map);
		infowindow[name] = new google.maps.InfoWindow({
			content:contentstr
		});
		google.maps.event.addListener(marker[name], 'click', function() {
			infowindow[name].open(map,marker[name]);
		});
	}

	/*#################################*/
	/* 02 GOOGLE MAP API INIT FUNCTION */
	/*#################################*/
	function initialize() {
		var lat = $('#map-canvas').attr("data-lat"),
			lng = $('#map-canvas').attr("data-lng"),
			myLatlng = new google.maps.LatLng(lat,lng),
			setZoom = parseInt($('#map-canvas').attr("data-zoom")),
			/*styles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#c0e4f3"},{"visibility":"on"}]}],*/
			/*styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"}),*/
			mapOptions = {
				zoom: setZoom,
				panControl: false,
				panControlOptions: {
					position: google.maps.ControlPosition.RIGHT_BOTTOM
				},
				zoomControl: true,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.LARGE,
					position: google.maps.ControlPosition.RIGHT_BOTTOM
				},
				fullscreenControl: true,
				fullscreenControlOptions: {
					position: google.maps.ControlPosition.LEFT_BOTTOM
				},
				streetViewControl: true,
				streetViewControlOptions: {
					position: google.maps.ControlPosition.LEFT_BOTTOM
				},
				center: myLatlng,
				mapTypeControl: false
			};

		map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
		/*map.mapTypes.set('map_style', styledMap);*/
		/*map.setMapTypeId('map_style');*/

		$('.addresses-block a').each(function(){
			var mark_lat = $(this).attr('data-lat'),
				mark_lng = $(this).attr('data-lng'),
				this_index = $('.addresses-block a').index(this),
				mark_name = 'template_marker_'+this_index,
				mark_locat = new google.maps.LatLng(mark_lat, mark_lng),
				mark_str = $(this).attr('data-string'),
				mark_img = $(this).attr('data-marker');
			addMarker(mark_locat,mark_name,mark_str,mark_img);  
		});
	}

	/*######################*/
	/* 03 MAP INIT FUNCTION */
	/*######################*/
	setTimeout(function() {
		initialize();
	}, 300);
});