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
		"item": "Lavender Oatmilk Matcha",
		"type": "Milktea",
		"taste": "Sweet",
		"price": {
			"small": 5.25,
			"medium": 6.5,
			"large": 7.25
		},
		"size": {
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
		"store": "Starbucks"
	}
];

let container = document.getElementById("container");
 

