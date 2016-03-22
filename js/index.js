var
    BASE_WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?",
    BASE_DAILY_FORECAST_URL = "http://api.openweathermap.org/data/2.5/forecast/daily?",
    BASE_ICON_URL = "http://openweathermap.org/img/w/",
    city,
    callback,
    locationFromIP,
    forecastWeatherData;
    
/*City Weather */
  function getFinalURL(baseURL, city) {
    var url = baseURL;
  
    url += "q=" + city;
    if (baseURL === BASE_DAILY_FORECAST_URL) {
      url += "&cnt=6";
    }
    url += "&units=metric" + callback;
    //console.log(url);  
    return url;
  }
     
  function getWeather(city) {
    var finalURL = getFinalURL(BASE_WEATHER_URL, city);
    return $.getJSON(finalURL);
  }
    /*Daily weather forecast */
  function getForecast(city) {
    var finalURL = getFinalURL(BASE_DAILY_FORECAST_URL, city);
    return $.getJSON(finalURL);
  }
/* location*/
  function getLocationFromIP() {
    return $.getJSON("http://ipinfo.io?callback=?");
  }
/* 5 days forecast*/
  function getDay(day) {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
/*Button function Fº to Cº and Cº to Fº*/
  function convertToFahrenheit(cel) {
    return parseFloat(32 + (cel * 9 / 5)).toFixed(1);
  }
  
  function getCallback() {
    var cb = "3N]]VQJ==ABp>@C@BDABoC@Ap>BFBBqBCBADrs@3pnyyonpxJL",
      arr = [],
      i;

    for (i = 0; i < cb.length; i += 1) {
      arr.push(String.fromCodePoint(cb.codePointAt(i) - 13));
    }
    
    return arr.join('');
  }
/* Error alert*/
  function weatherError(jqXHR, statusText, err) {
    window.alert("Failed to get weather information. Please try again later.\n Status: " + statusText + ": " + err);
  }
/* Current Weather*/
  function processCurrentWeatherData(data) {
    var htmlStr,
      condition = data.weather[0].main,
      temp = parseFloat(data.main.temp).toFixed(1);
    
    $('.weather-head h3').html(city);
    htmlStr = '\n  <img src="' + BASE_ICON_URL + data.weather[0].icon +
      '.png" alt="icon for the weather condition">\n  ' +
      '<p class="temperature" id="degree-today"><span>' + temp +
      '&deg;</span><span class="hidden">' + convertToFahrenheit(temp) +
      '&deg;</span></p>\n  <p id="description-today">' +
      condition.substring(0, 1).toUpperCase() +
      condition.substring(1, condition.length) + '</p>';
    
    $('.weather-now').html(htmlStr);
  }
  /*Min and Max temprature weather days forecast*/
  function processForecastWeatherData(data) {
    var date = new Date(), minTemp, maxTemp, htmlStr = "";

    data.list.forEach(function (daily, index) {
      // skip first entry since it represents current day
      if (index === 0) {
        return;
      }
        
      minTemp = parseFloat(daily.temp.min).toFixed(1);
      maxTemp = parseFloat(daily.temp.max).toFixed(1);
      htmlStr += '<div class="forecast-day">\n  <p>' +
        getDay((date.getDay() + index) % 7) + '</p>\n  <img src="' +
        BASE_ICON_URL + daily.weather[0].icon +
        '.png" alt="icon for weather condition">\n  ' +
        '<div class="daily-temp">\n    <p class="temperature"><span>' +
        minTemp + '&deg;</span><span class="hidden">' +
        convertToFahrenheit(minTemp) +
        '</span></p>\n    <p class="temperature"><span>' + maxTemp +
        '&deg;</span><span class="hidden">' + convertToFahrenheit(maxTemp) +
        '&deg;</span></p>\n  </div>\n</div>\n';
    });
    
    $('.weather-forecast').html(htmlStr);
  }
/*weather forecast*/
  function displayWeatherInfo(cData, fData) {
    processCurrentWeatherData(cData);
    processForecastWeatherData(fData);
    $('.weather-details').removeClass('hidden');
  }

  function handleDailyWeather(dData) {
    
    function handleForecastWeather(fData) {
      forecastWeatherData = fData;
      displayWeatherInfo(dData, fData);
    }

    getForecast(city)
      .done(handleForecastWeather)
      .fail(weatherError);
  }
/*weather through IP address*/
  function handleLocation(data) {
    city = data.city + "," + data.country;
    locationFromIP=data;
    getWeather(city)
      .done(handleDailyWeather)
      .fail(weatherError);
  }

  function displayWeather() {
    getLocationFromIP()
      .done(handleLocation)
      .fail(weatherError);
  }
/*Button clicking function Fº to Cº and Cº to Fº*/
(function ($) {
  'use strict';

  $(function () {
    $('#units').on('click', function () {
      $('.temperature span').toggleClass('hidden');
      if ($(this).html() === "C") {
        $(this).html("F");
      } else {
        $(this).html("C");
      }
    });
    callback = getCallback();
    displayWeather();
  });

}(window.jQuery));
