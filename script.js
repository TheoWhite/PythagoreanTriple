'use strict';
//Get inputs from user
var a = prompt("Enter value for A");
var b = prompt("Enter value for B");
var c = prompt("Enter value for C");
//Parse to ints if fails will return NaN
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);


var pythagoreanTriple = (a*a) + (b*b)
//Get the h1 tag and set it equal to output
var output = document.getElementById("Output-H1");

 /*
	* Logic to check if pythagoreanTriple
	* then change innerHTML and style.color
	*/
if (pythagoreanTriple = c*c)
{
	output.innerHTML = "Yes!";
	output.style.color = "#00FF00";
} else if (Number.isNaN(pythagoreanTriple = c*c)) {
	output.innerHTML = "Error";
	output.style.color = "#FF0000";
} else {
	output.innerHTML = "No";
	output.style.color = "#0000FF";
}
