// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// Function constructor/blueprint/protoype is allways wrtitten with first capital letter
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth); 
}

Person.prototype.lastname = 'Smith';
var john = new Person('John', 1990, 'teacher'); //this is called instantiation, because this object is an instance of above constructor

var jane = new Person('Jane', 1969, 'designer');

var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastname);
console.log(jane.lastname);
console.log(mark.lastname);

*

// Object.create

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
{
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});

*

// Primitives vs objects


// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);

*

// Lecture: passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    }
    else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

*

//Lecture: Functions returning functions 

function interviewQuestion(job) {
    if( job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    }
    else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

//Return a function and also pass value
interviewQuestion('teacher')('Mark');

*/

// Lecture: IIFE for data privacy, you cannot access elements of IIFE function from outside the func
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//score cannot be accessed
//console.log(score)

//like this
/* But this will give error, because func declaration can not be without a name, we add () to trick parser into believing that this is a function expression not decalaration:
function () {
    
}
*
//IIFE is not a func used to create a reusable code, but creates a new scope that is hidden from outside wourld i.e other part of the program for data protection/privacy purpose
(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

*

// Lecture: Closures

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
        
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

retirement(66)(1990);


*
// Closure p2
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } 
        else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        }
        else {
            console.log('Hello' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');

*/

////////////////////////////////////
// Lecture: Bind, call and apply
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }
        else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');









var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

*/

//////////////////////////////////////////
// CODING CHALLENGE 7 Fun quiz game in the console!

/* 1. Build a function constructor called Question to describe a question. A question should include:
    a) questino itself
    b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
    c) correct answer (I would use a number for this)
*/
/*
// 7. Make sure your code is private and doesn't interfere with programmers code
(function () {
    function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);
    
    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
        console.log('Correct answer!')
    }
    else {
        console.log('Wrong answer. Try again');
    }
}

// 2. Create a couple of questions using the constructor
var q1 = new Question('What is your father name?', 
                      ['Ahmad', 'Mahmood', 'Shafi'],
                      1);

var q2 = new Question('What is your mother name?', 
                      ['Maryam', 'Fatima', 'Asiya'],
                      0);

var q3 = new Question('What is your job?',
                      ['Engineer', 'Doctor', 'Clerk'],
                      2);

// 3. Store them all inside an array & 4. Select one random question from question array
var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

// 5. prompt the user for the answer
var answer = parseInt(prompt('Please select the correct ansswer.'));

// 6. Check answer
questions[n].checkAnswer(answer);

}) ();

*/

// Coding challenge Expert Level
(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
}
    Question.prototype.displayQuestion = function() {
    console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('Correct answer!')
            // callback is keepscore function (closure can use different func names the way we can have different names for callback parameters/arguments)
            sc = callback(true);
        }
        else {
            console.log('Wrong answer. Try again');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is:' + score);
        console.log('---------------------------------------');
    }
    
    var q1 = new Question('What is your father name?', 
                      ['Ahmad', 'Mahmood', 'Shafi'],
                      1);
    
    var q2 = new Question('What is your mother name?', 
                      ['Maryam', 'Fatima', 'Asiya'],
                      0);
    
    var q3 = new Question('What is your job?',
                      ['Engineer', 'Doctor', 'Clerk'],
                      2);

    var questions = [q1, q2, q3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Please select the correct ansswer.');

        
        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
    }
    
    nextQuestion();

}) ();






























