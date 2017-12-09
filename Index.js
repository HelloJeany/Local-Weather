// /*global $ APIKEY*/



// $(document).ready(function() { 
  
//   $('#submitWeather').click(function(){
    
//     var city = $("#city").val();
    
//     if(city != ''){
  
  
//     $.ajax({ 
//         method: "GET", 
//         dataType: "jsonp",
//         url: "", 
//         data: {  apiKey: "ebf0b01d3d9aa8acd0c3668bae2ed6e3" }, 
//         success: function(data){
               
//                 }
//           });
//     }else{
//       $("#error").html('Field cannot be empty');
//     }
    
//     });
// });

/*global $ navigator position APIKEY*/

$(document).ready(function() {
    var lat;
    var long;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            console.log(lat, long);

            $.ajax({
                method: "GET",
                url: "https://api.openweathermap.org/data/2.5/weather",
                data: { lat: lat, lon: long, units: "imperial", appid: APIKEY },
                success: function weatherData(data) {
                    console.log(data);
                    $("#city").text(data.name);
                    $("#current").text(data.weather[0].main);
                    $("#temp").text(data.main.temp);
                    $("#wind").text(data.wind.speed);

                    
                }
            });
        });
    }
});