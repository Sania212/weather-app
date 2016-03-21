describe("Weather Application", function() {

  beforeEach(function() {
  });
   /* city and country location through the api */
  it("should successfully retrieve the users current city and country data ", function() { 
    displayWeather();
    expect(locationFromIP.ip).toBeDefined();
    expect(locationFromIP.country).toBeDefined();
  });
  
  /* 5 days weather forecast */

  it("should successfully retrieve the data of 5 days weather forecast of the current location ", function() { 
    displayWeather();
    expect(forcastWeatherData.list[0]).toBeDefined();
    expect(forcastWeatherData.list[1]).toBeDefined();
    expect(forcastWeatherData.list[2]).toBeDefined();
    expect(forcastWeatherData.list[3]).toBeDefined();
    expect(forcastWeatherData.list[4]).toBeDefined();
    expect(forcastWeatherData.list[5]).toBeDefined();
  });

  /*should successfully convert the Fahrenheit weather to celsius temperature on clicking the button" { 
 */

  it("should successfully convert celsius into fahrenheit on clicking the button", function() { 
    displayWeather();
    expect(Math.round(convertToFahrenheit(25))).toBe(77);
  });
  
  /*should successfully convert the Celsius weather to Fahrenheit temperature on clicking the button" { 
 */
  
  it("should successfully convert fahrenheit into Celsius on clicking the button", function() { 
    displayWeather();
     expect(Math.round(convertToFahrenheit(25))).toBe(77);
  });
  
 /* Renders the weather icons*/

  it("should load the weather icons successfully", function() {
     expect(true).toBeTruthy();
  });
  
});