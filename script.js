/*

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';

console.log(job);

var $3years = 3;

*/

/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried =false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married?' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName)



/******************************Basic Operators***************

var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than john');
var x;
console.log(typeof x);

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;

console.log(isFullAge);

// Grouping
var ageJohn = now -yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 -6 // 32 -6 // 26
console.log(x,y);

// More operators
x *= 2;
console.log(x);
x += 10; 
console.log(x);
x--;
console.log(x);

/*************************************
* CODING CHALLENGE 1
*/

/* BMI formula = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

*

var massJohn, massMark, heightJohn, heightMark;
massJohn = 63;
massMark = 80;
heightJohn = 1.68;
heightMark = 1.85;

var bmiJohn, bmiMark;
bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);
console.log(bmiJohn, bmiMark);

var compareBmi = true;
compareBmi = bmiMark > bmiJohn;

console.log('Is Mark\'s BMI higher than John\'s? ' + compareBmi);


/*************************************
* If / else statements
*

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus == 'married') {
    console.log(firstName + ' is married!');
}
else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
}
else {
    console.log(firstName + ' will hopefully marry soon :)');
}

//BMI assignment with if/else
if(bmiMark >  bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.')
}
else {
        console.log('John\'s BMI is higher than Mark\'s.')
}

*

var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy');
} 
else if (age >= 13 && age < 20) { //Between 13 and 20 === age >= 13 AND age < 20
        console.log(firstName + ' is a teenager');
}
else {
        console.log(firstName + ' is a man');
}

*/

/********************************
* The Ternary Operator and Switch Statements
*

var firstName = 'John';
var age = 14;

// Ternary Operator
age >= 18 ? console.log(fir  + ' dringks Dogh :).')
: console.log(firstName + ' drinks Chai :);)');

var drink = age >= 18 ? 'Dogh' : 'Chai';
console.log(drink);

/*
if (age >= 18) {
    var drink = 'Dogh';
}
else {
    var drink = 'Chai'
} *

// Switch Statement
var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
            console.log(firstName + ' teaches kids how to code.');
            break;
    case 'driver':
            console.log(firstName + ' drives an uber in Lisbon.');
            break;
    case 'designer':
            console.log(firstName + ' designs beautiful websites.');
            break;
    default:
        console.log(firstName + ' does something else');
}

*/

/*****************************************
* Truthy and Falsy values and equality operators
*

// falsy values: undefined, null, 0, '', NaN
// truth values: NOT falsy values

var height = 0;

if (height || height === 0) {
    console.log('Variable is defined');
}
else {
    console.log('Variable has not been defined');
}

*/

/******************************************
* CODING CHALLENGE 2
*
var johnGame1, johnGame2, johnGame3;
johnGame1 = 89;
johnGame2 = 120;
johnGame3 = 103;

var mikeGame1, mikeGame2, mikeGame3;
mikeGame1 = 116;
mikeGame2 = 94;
mikeGame3 = 123;

var maryGame1, maryGame2, maryGame3;
maryGame1 = 97;
maryGame2 = 134;
maryGame3 = 105;


var johnAvgScore;
johnAvgScore = (johnGame1 + johnGame2 + johnGame3) / 3;

var mikeAvgScore;
mikeAvgScore = (mikeGame1 + mikeGame2 + mikeGame3) / 3;

var maryAvgScore;
maryAvgScore = (maryGame1 + maryGame2 + maryGame3) / 3;

if (johnAvgScore > mikeAvgScore && johnAvgScore > maryAvgScore) {
    console.log(' John team is the winner, their average score is: ' + johnAvgScore);
    console.log(' Other teams averages are: Mike: ' + mi    + ' Mary: ' + maryAvgScore);
}
else if(mikeAvgScore > johnAvgScore && mikeAvgScore > maryAvgScore) {
    console.log(' Mike team is the winner, their average score is: ' + mikeAvgScore);
    console.log(' Other teams averages are: John: ' + johnAvgScore + ' Mary: ' + maryAvgScore);
}
else if (maryAvgScore > johnAvgScore && maryAvgScore > mikeAvgScore) {
    console.log(' Mary team is the winner, their average score is: ' + maryAvgScore);
    console.log(' Other teams averages are: Mike: ' + mikeAvgScore + ' John: ' + johnAvgScore);
}
else {
    console.log(' There is a draw ');
}
*/

/*************************************************
* FUNCTIONS
*/

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
   
    if(retirement > 0 ) {
         console.log(firstName + ' retires in ' + retirement + ' years.');
    }
    else {
        console.log(firstName + ' is already retired');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');