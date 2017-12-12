/*global $ navigator position APIKEY*/


$(document).ready(function() {
    var lat;
    var long;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            long = position.coords.longitude;
           

            $.ajax({
                method: "GET",
                url: "https://api.openweathermap.org/data/2.5/weather",
                data: { lat: lat, lon: long, units: "imperial", appid: APIKEY },
                success: function weatherData(data) {
                    $("#city").text(data.name);
                    $("#current").text(data.weather[0].main);
                    document.getElementById("temperature").innerHTML = (data.main.temp) + " \xB0 F";
                    document.getElementById("wind").innerHTML = (data.wind.speed) + " MPH";
                  
                    document.getElementById("pic").src = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

                    $("#cel").click(function() { 
                        var fahr = data.main.temp;
                        var cels = (fahr - 32) * 0.5556;
                        var celsiusRounded = Number((cels).toFixed(2)); 
                        document.getElementById("temperature").innerHTML = celsiusRounded + " \xB0 C"; 
                        
                        $("#fahr").click(function() { 
                            var fahr = data.main.temp;
                            document.getElementById("temperature").innerHTML = fahr + " \xB0 F";
                        });
                    });
                }

            });
        });
    }
});

