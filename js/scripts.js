// First, load jQuery (required)
// jQuery 2.2.2 loaded via `index.html`

// Second, load Semantic UI JS (required)
// @codekit-prepend "semantic.js";

// Third, Add to Homescreen (optional)
// @codekit-prepend "add-to-homescreen.js";

// Third, load any plugins (optional)
// @codekit-prepend "plugins.js";


//tabs activiate 
$('.menu .item')
  .tab()
;


//Get Cheney Weather

$.simpleWeather({
    location: '99004',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('#cheney .city').text(weather.city);
      $('#cheney .temp').text(weather.temp);
      $("#cheney i").addClass("icon-" + weather.code);
        
        
       //forecast
        $("#d1 .day").text(weather.forecast[1].date); 
       $("#d1 .temp").text(weather.forecast[1].high); 
       //$("#d1 .icon i").addClass("icon-" + weather.forecast[1].code);
        
        
        //add custom body class
        if (weather.code >= 26 && weather.code <= 30){
            $("body").removeClass();
            $("body").addClass("bg-1");
        
                                                    
    }
        
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });


//Get spokane Weather

$.simpleWeather({
    location: '99021',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('#spokane .city').text(weather.city);
      $('#spokane .temp').text(weather.temp);
      $("#spokane i").addClass("icon-" + weather.code);
        
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });


//geo




// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com

// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {

    $('.geo button').show(); 

} else {

    $('.geo button').hide();
    $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

$('.geo button').click( function() {
  
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

// get the weather
var getWeather = function(location) {
  
  $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.geo temp').text(weather.temp);
      $('.geo city').text(weather.city);
      $(".geo i").addClass("icon-" + weather.code);
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });
  
};



// add custom body class




  



  




