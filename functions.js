/* Read about the Array.prototype.sort method. Create a function that can be used with sort. This function should take two strings, 
and return a value that sort can use to determine which is the longest string. Finally, create an array of strings and try to get 
it sorted using your new function. */

function compareLength(a, b) {
  if (a.length > b.length) {   
    return -1;               //If compareLength(a, b) is greater than 0, sort a to a lower index than b, i.e. a comes first.
  }
  if (a.length < b.length) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

//console.log(['cat', 'famous', 'fantome', 'Fumble', 'xylophone' ].sort(compareLength));

/*Create an array of objects (don’t need to use new here, just regular object literals). These objects will contain a name 
and email property. 
Then, run some code that will sort your array by the longest name. 
Then, run some code that will sort your array by e-mail address in alphabetical
order.*/

var dog = {
    name: "woofywoofy",
    email: "dog@dogmail.com"
};

var cat = {
    name: "meow",
    email: "cat@catmail.com"
};

var snake = {
    name: "misster hiss",
    email: "snake@snakemail.com"
};

var menagerie = [dog, cat, snake];

//menagerie.forEach(function (each) {
//console.log(each.email)});

function compareObjectNameLength(a, b) {
  if (a.name.length > b.name.length) {   
    return -1;               //If compareLength(a, b) is greater than 0, sort a to a lower index than b, i.e. a comes first.
  }
  if (a.name.length < b.name.length) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

function compareObjectEmailAlpha(a, b) {
  if (a.email.toUpperCase() > b.email.toUpperCase) {   
    return -1;               //If compareLength(a, b) is greater than 0, sort a to a lower index than b, i.e. a comes first.
  }
  if (a.email.toUpperCase() < b.email.toUpperCase) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

//console.log(menagerie.sort(compareObjectNameLength))
//console.log(menagerie.sort(compareObjectEmailAlpha))


/*Create a function that can be used with Array.prototype.map. This function should take a number and 
return its square. Then, use this function
with map on an array of numbers to check the result.*/

//console.log([1,2].map(function(a){return a*a}));
//console.log([100,-1].map(function(a){return a*a}));


/*Create a function that can be used with Array.prototype.map. This function should be able to take 
an object and square its “num” property. 
Then, use this function with map on an array of objects each containing a “num” property.*/

dog = {
  num: 11
};

snake = {
  num: 9
};

//console.log([dog, snake].map(function(a){return a.num*a.num}));

/*In a previous workshop, you had to create a function that took two numbers and an operation 
(add, sub, mult, …) and returned the result of 
the operation on the two numbers. Here we are going to do the same but at a higher order. 
Create a function called operationMaker that 
takes only a string called operation as argument. 
This string could be “add”, “subtract”, “mult” or “div”. Your function will return a 
function that will take two numbers and return the result of running operation on these numbers. 
The end result should let me do something 
like this:

    ```javascript
var adder = operationMaker(“add”);
var sum = adder(5, 10); //15

var multiplier = operationMaker(“mult”);
var product = mult(5, 10); // 50 */

function operationMaker(input){
  switch(input){
    case "add":
      return function(a,b){return a+b};
    case "subtract":
      return function(a,b){return a-b};
    case "multiply":
      return function(a,b){return a*b};
    case "divide":
      return function(a,b){return a/b};
    default:
      console.log("Error");
  }
}

var adder = operationMaker("add");
console.log(adder(1,2));

var divider = operationMaker("divide");
console.log(divider(10,5));








