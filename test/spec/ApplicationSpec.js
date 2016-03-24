


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
    expect(result).toBe('Wed')
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
  

  
 
  it("successfully convert Fahrenheit into celsuis", function() {
    // setup
    var celsiusValue = 20;

    // action
    var result = convertToFahrenheit(celsiusValue);

    // verify
   expect(Math.round(convertToFahrenheit(25))).toBe(77);
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
 	it("Sections contains the css class", function() {
 	  // setup
	var elem;
	beforeEach(function() {
		elem = $ ('<div id="section"><a id="units">C</a></div>');

  // verify
		expect(elem).toBe("#section");
		expect(elem).toContain('units');
		
	});
});


    
    
    

    
    
    
    
    
    


  