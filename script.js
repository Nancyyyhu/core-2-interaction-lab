function add(a, b) {
	return a + b;
}

let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);



function makeItGreen() {
	let circle = document.getElementById('circle');
	circle.style.backgroundColor = 'green';
}



let recipe = [
	{
		"item": "lavender oatmilk matcha",
		"store": "Starbucks",
		"type": "milktea",
		"taste": "sweet",
		"prepTimeMinutes": 5,
		"caloriesKilojoule": 310,
		"priceDollar": {
			"small": 5.25,
			"medium": 6.5,
			"large": 7.25
		},
		"sizeMilliliter": {
			"small": 300,
			"medium": 500,
			"large": 700
		},
		"ingredient": {
			"scoopOfCreme": 2,
			"scoopOfMatcha": 4,
			"scoopOfLavender": 2,
			"cupOfOatmilk": 1,
			"hasIce": true,
			"hassuger": true,
			"hasCoffee": false
		},
	}
];

let container = document.getElementById("container");
console.log(recipe);
 



var apiUrl = "https://api.weather.gov/gridpoints/TOP/31,80/forecast";
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    var forecastContainer = document.getElementById("circle");
    data.properties.periods.forEach(period => {
        var forecastDiv = document.createElement("div");
        forecastDiv.textContent = period.name + ": " + period.temperature + " °F";
        forecastContainer.appendChild(forecastDiv);
    });
  });

