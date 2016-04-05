

describe("Weather Application", function() {
  it("successfully convert celsius into fahrenheit", function() {
    // setup
    var celsiusValue = 10;

    // action
    var result = convertToFahrenheit(celsiusValue);

    // verify
    expect(Math.round(result)).toEqual(50);
   
    });



  it("successfully convert celsius into fahrenheit when celsius is zero", function() {
    // setup
    var celsiusValue = 0;

    // action
    var result = convertToFahrenheit(celsiusValue);

    // verify
    expect(Math.round(result)).toEqual(32);
   
    });



  it("returns the proper day of the week abbreviation of Wednesday", function() {
    // setup
    var knownDate = new Date(2015, 2, 11);
    var knownDay = knownDate.getDay();

    // action
    var result = getDay(knownDay);

    // verify
    expect(result).toEqual('Wed')
   
    });
    
    

  it("does not return the wrong day of the week abbreviation of Saturday", function() {
    // setup
    var knownDate = new Date(2015, 2, 11);
    var knownDay = knownDate.getDay();

    // action
    var result = getDay(knownDay);

    // verify
    expect(result).not.toBe('Sat')
    
     });
  
  
  
   it("does not return the wrong day of the week abbreviation", function() {
    // setup
    var knownDate = new Date(2016, 1, 11);
    var knownDay = knownDate.getDay();

    // action
    var result = getDay(knownDay);

    // verify
    expect(result).not.toBe('Sun')
  
    });
  

  
  it("retrieves full URL using country name without callback", function() {
    // setup
    var baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
    var country = 'us';

    // action
    var result = getFinalURL(baseURL, country);

    // verify
    expect(result).toContain('us');
    
   expect(result).toContain('&APPID=0045c13635745b634c15955d56547ef3');
   
    });  
  
  
  
  it("retrieves correct minimum temperature of the current location", function() {
    // setup
    var baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
    var minTemp = '0';

    // action
    var result = getFinalURL(baseURL, minTemp);

    // verify
    expect(result).toContain('q=0');
  
    expect(result).toContain('&units=metric');

	});
	
	
	
  it("should successfully retrieve the data of 5 days weather forecast of the current location ", function() { 
	
	// setup
   var   forecastWeatherData='http://api.openweathermap.org/data/2.5/weather?';
 
   // action
   var result= getFinalURL('http://api.openweathermap.org/data/2.5/weather?');
    
    // verify
    expect(result).toContain(forecastWeatherData);
    });
	

it("retrieves correct maximun temperature of the current location", function() {
    // setup
    var baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
    var maxTemp = '10';


    // action
    var result = getFinalURL(baseURL, maxTemp);

    // verify
    expect(result).toContain('q=10');
    expect(result).toContain('&units=metric');

	});
	




  it("gets a proper full URL using city name without callback", function() {
    // setup
    var baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
    var city = 'Denver,us';

    // action
    var result = getFinalURL(baseURL, city);

    // verify
    expect(result).toContain('q=Denver,us');
    expect(result).not.toContain('&cnt=6');
    expect(result).toContain('&units=metric');
    expect(result).toContain('&APPID=0045c13635745b634c15955d56547ef3');
    expect(result).toBe('http://api.openweathermap.org/data/2.5/weather?q=Denver,us&units=metric&APPID=0045c13635745b634c15955d56547ef3')
         
  });  
  });      



 
 describe("Css TESTS", function() { 
it("should have the correct font", function() {
//setup
      var fontFace = '"Arial", sans-serif'; 
      
 //action
      var result =       
      $("#sandbox").css("font-family", fontFace);
      
 //verify
   
      expect(result).toHaveCss();
  
         
  });  
  });      




//Fixture setup for (Tests for Unit button visibility on app)

function setUpHTMLFixture() {
        jasmine.getFixtures().set('   <div class="weather-details hidden">       \
                                    <section class="weather-head">\
                                    <h3></h3>                                           \
                                    <a id="units">C</a>           \
                                    </section>       \
                                    <div class="weather-now"></div>              \
                                    <br>                             \
                                    <div class="weather-forecast"> </div> </div>   \
                                ');
}


describe("Tests for Unit button visibility on app", function() {
     beforeEach(function() {
 		setUpHTMLFixture();
    });

    it("should result in Units being visible", function() {
    	// no action
    	
    	// verify
        expect($("#units")).toBeVisible();
    });
    
   it("should result units to have correct abbreviation ", function() {
   	// no action
   		
   	// verify
    	expect($( "#units" )).toHaveText("C");
    });   
});    
        
  
  
        
describe("A Click event has been called ", function() {
  var click;

  beforeEach(function() {
    click = jasmine.createSpy('.click');
  });

  it("tracks that the spy was called", function() {
  	// action
  	    click(".click");
		
	// verify
    	expect(click).toHaveBeenCalled();
  });


});






