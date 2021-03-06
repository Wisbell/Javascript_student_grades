/*

Instructions

Loop over an array of student grades (values from 50-100) and 
outputs how many of each grades there are.

A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A
Start with array of random scores in your JavaScript

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
Use console.log to output the following criteria:

How many of each grade?
What is the lowest grade?
What is the highest grade?

*/


var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var grades = {
	'a': 0,
	'b': 0,
	'c': 0,
	'd': 0,
	'f': 0
}

function sort_grades() {
	for (var i = 0; i < scores.length; i++) {
		//console.log(scores[i])
		if (scores[i] > 90) {
			//console.log("a test")
			grades.a+=1;
		} 

		if (scores[i] > 80) {
			grades.b+=1;
		} 

		if (scores[i] > 70) {
			grades.c+=1;
		} 

		if (scores[i] > 60) {
			grades.d+=1;
		} 

		if (scores[i] > 50) {
			grades.f+=1;
		} 
	}
}


function how_many() {
	console.log("How many in each grade?");

	for (letter in grades) {
		console.log(letter + ": " + grades[letter]);
	}
	console.log("\n")
}


function lowest_grade(scores) {
	var lowest = scores[0]

	for (var i = 1; i < scores.length; i++) {

		if (scores[i] < lowest) {
			lowest = scores[i];
		}
	}

	console.log("The lowest grade is " + lowest);
	console.log("\n")
}


function highest_grade(scores){
	var highest = scores[0]

	for (var i = 1; i < scores.length; i++) {

		if (scores[i] > highest) {
			highest = scores[i];
		}
	}

	console.log("The highest grade is " + highest);
	console.log("\n")
}


// Call my functions
sort_grades();
how_many();
lowest_grade(scores);
highest_grade(scores);