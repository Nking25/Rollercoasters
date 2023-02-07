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
/////////////////////////////////////////////////////////

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
      if(averageheightspeed.length == 0 ){
  return "Your input does not have a corresponding match"
  }
}
  return (rollercoasters[maxIndex]);
}
console.log(findmaxrollercoaster());




////////////////////////////////////////////////////////////////////
//paramter is year opened
function openedAfter(year) {
var matches = [];
for (var i = 0; i < rollercoasters.length; i++) {
  if(parseFloat(yearopened[i]) > year) { 
    matches.push(rollercoasters[i]);
  }
}

  if(matches.length == 0 ){
  return "No matches for that input"
  }
  return matches;
}
  console.log(openedAfter("2010"));
////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////

function finduniquecountries() {
var uniquecountries = [];
for (var i = 0; i < rollercoasters.length; i++) {
  if (!uniquecountries.includes(countries[i])) {
    uniquecountries.push(countries[i]);
    }
  }
  return uniquecountries;
}
console.log(finduniquecountries());
////////////////////////////////////////////////////


function findupsidedown () {
  var withinversions = [];
for (var i = 0; i <rollercoasters.length; i++) {
  if (parseFloat(numberofinversions[i]) > 0) {
    withinversions.push(rollercoasters[i]);
  }
}
    return withinversions;
}
console.log(findupsidedown());
