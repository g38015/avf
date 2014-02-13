$(document).ready(function() {

  // capture input
	$("#trail-lookup").submit(function(e) {
		e.preventDefault();
    	$("#trails").empty(); 

      // get data
    	var location_value = $("#getCity").val(),
			url = "https://outdoor-data-api.herokuapp.com/api.json?api_key=4016165acc967a9800153c77a3528d83&q[city_cont]=" + location_value + "&radius=25&callback=?";

		$.getJSON(url, function(data) {

			console.log(data);

      // loop through data
			$.each(data.places, function(index, activity){

  				 trail = "<ul>" + 
  				 		 "<li>" + activity.name + "</li>" +  
  				 		 "</ul>";

  				$("#trails").append(trail);

  		}); // end each
		}); // end getJSON
	}); // end submit function
}); // end ready function