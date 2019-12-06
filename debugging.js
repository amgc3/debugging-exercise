
// airport constructor function
// dependency injection of weather into airport
function Airport(weather) {
  debugger
  this.weather = weather
}

//weather constructor function
function Weather() {

}
Weather.prototype.isStormy = function() {
  return false
}

// airport land method definition
Airport.prototype.land = function(plane) {
  // console.log(this.weather)
  debugger
  if (plane.isLanded()) {
    console.log("hello1");
  } else if (this.weather.isStormy()) {
    console.log("hello2");
  } else {
    console.log("hello3");
  }
}

// plane constructor function
function Plane() {

}
  Plane.prototype.isLanded = function() {
    return false;
  }
weatherstormy = new Weather()

plane1 = new Plane()
airport = new Airport(weatherstormy)


airport.land(plane1)
