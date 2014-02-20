$(document).ready(function() {
  $("#apicapture").submit(function(e){
    e.preventDefault();
    $("#apidata").empty(); 

    // pulling data from instagram api
  		var $results = $("#apidata"),
			tag = $("#tag").val(),
			url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=f3e6e1e44cb84332b6985ffdec7d1fdd";


  		$.getJSON(url, function(apidata) {

  			// looping through each item in the returned data
  			$.each(apidata.data, function(i, image){

  				// creates html template, passing in data from api
  				 image = "<div class='col-xs-6 col-sm-3 dashimage'>" + 
  				 		 "<img class='img-responsive' src='" + image.images.standard_resolution.url + "' />" +
  				 		 "<a href='profile.html'>" + "<h4>" + image.user.username + "</h4>" + "</a>" +
  				 		 "<span class='glyphicon glyphicon-thumbs-up'> " + image.likes.count + "</span>" +  
  				 		 "</div>";

  				$results.append(image);

  			}); // end each
  		}); // end getJSON
    }); // end submit
}); // end document ready