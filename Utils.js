var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Science/Rollercoasters.csv"

var rollercoasters = getColumn(url, 1)
var amusemnetparks = getColumn(url, 2)
var cities = getColumn(url, 3)
var countries = getColumn (url, 4)
var regions = getColumn(url, 5)
var constructionmaterials = getColumn(url, 6)
var heights = getColumn(url, 7)
var speeds = getColumn(url, 8)
var lengths = getColumn (url, 9)
var inversions = getColumn (url, 10)
var numberofinversions = getColumn (url, 11)
var yearopened = getColumn (url, 12)

//this function calculates the "biggest rollecoaster" by taking all the rollercoasters in the list, averaging them based off of height and speed, and giving an output of one singular rollercoaster. This function returns the max index of the rollercoaster list.
function findmaxrollercoaster() {
  var maxrollercoaster = "";
  var averageheightspeed = [];
for (var i = 0; i < rollercoasters.length; i++){
  var avg = (heights[i] + speeds[i])/2;
    averageheightspeed.push(avg);
  }
  var max=0;
  var maxIndex=0;
  for (var i = 0; i < averageheightspeed.length; i++){
  if (averageheightspeed[i] > max) {
  max = averageheightspeed[i];
  maxIndex = i;
  }
}
  return (rollercoasters[maxIndex]);
}
console.log(findmaxrollercoaster());
//FUNCTION #1


//The paramter is year or (year opened). This function takes the rollercoaster list and finds all the rides that were made after 2010.
function openedAfter(year) {
var matches = [];
for (var i = 0; i < rollercoasters.length; i++) {
  if(parseFloat(yearopened[i]) > year) { 
    matches.push(rollercoasters[i]);
  }
}

  return matches;
}
  console.log(openedAfter("2010"));
//FUNCTION #2
//This function has a paramter of city or (cities) and it takes a specific city, in this case BA, and spits out all the rides that exist in the cities limits.
function rollercoasterlocations(city) {
  var barollercoasters = [];
  for (var i = 0; i < rollercoasters.length; i++) {
  if (cities[i].toLowerCase().includes(city.toLowerCase())) {
    barollercoasters.push(rollercoasters[i]); 
    }
  }
  if(barollercoasters.length == 0 ){
    return "No matches for that input"
  }
  return barollercoasters;
}
console.log(rollercoasterlocations("buenos aires, BA"));
//FUNCTION #3
//This function does not have parameters but it looks at where all the rollerocasters are located, and prints a list of countries that are unique.
function finduniquecountries() {
var uniquecountries = [];
for (var i = 0; i < rollercoasters.length; i++) {
  if (!uniquecountries.includes(countries[i])) {
    uniquecountries.push(countries[i]);
    }
  }
  if(finduniquecountries.length == 1){
    return "Something isn't quite right, try a different input"
   }
  return uniquecountries;
}
console.log(finduniquecountries());
//FUNCTION #4
// This function also does not have paramters but it finds all the rollercoasters that have an american loop (an inversion aka goes upside down) and prints the names of those rollercoaseters.
function findupsidedown () {
  var withinversions = [];
for (var i = 0; i <rollercoasters.length; i++) {
  if (parseFloat(numberofinversions[i]) > 0) {
    withinversions.push(rollercoasters[i]);
  }
}
    if(withinversions.length == 0 ){
    return "No matches for that input" 
    }
    return withinversions;
}
console.log(findupsidedown());
//FUNCTION #5
