$(document).ready(function() {

  $("#locate").submit(function(e){
    e.preventDefault();
    $("#rep").empty(); 

    var zipcode = $("#locateZip").val(),
        api = "75454895946047fd93e1e022ae52295f",
        url = "https://congress.api.sunlightfoundation.com/legislators/locate?callback=?";

      $.getJSON(url, {

          'apikey' : api,
          'zip' : zipcode,

        }, function(data) {

        	console.log(data);

            $.each(data.results, function(index, official){

           representative = 
			               		"<div <div class='col-xs-12 col-sm-6'>" +
			                    "<div class='thumbnail'>" +
			                    
			                    "<div class='caption'>" +
			                    "<h4>" + official.first_name + " " + official.last_name + "</h4>" +
			                    "<h4>" + "Political Party " + official.party + "</h4>" +
			                    "<h4>" + "Phone: " + official.phone + "</h4><br />" +
			                    "</div>" +
			                    "</div>" +
			                    "</div>";

          $("#rep").append(representative);

          }); // each

        }); // end getJSON

  }); // end submit

}); // end document ready
