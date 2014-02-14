$(document).ready(function() {

  // capture input
	$("#trail-lookup").submit(function(e) {
		e.preventDefault();
    	$("#trails").empty(); 

      // get data
    	var location_value = $("#getCity").val(),
			url = "https://outdoor-data-api.herokuapp.com/api.json?api_key=946447205338f498e49d36d1adc07822[city_cont]=" + location_value + "&radius=25&callback=?";

		$.getJSON(url, function(data) {

			console.log(data);

      // loop through data
			$.each(data.places, function(index, activity){

  				 trail =  "<div <div class='col-xs-12 col-sm-6 dashimage well'>" +
                    "<div class='thumbnail'>" +
                    
                    "<div class='caption'>" +
                    "<h4>" + activity.name + "</h4>" +
                    "<h4>" + activity.city + "</h4>" +
                    "<p>" + activity.directions + "</p>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
                    
  				$("#trails").append(trail);

  		}); // end each
		}); // end getJSON
	}); // end submit function
}); // end ready function