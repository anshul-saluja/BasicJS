//functions
function returnName() { 
    return "akash";
};
console.log(returnName())



function returnFullName() { 
    return returnName() + " saluja";
};

console.log(returnFullName())

//global variable
var x  = "hello";

function addWorld(){
     x = x+" world";
}
addWorld()
console.log(x); // similar to java, they can access global, and if declared locally
//they will not ignore the global, so local has more pref. than global like c++/java


/**
 * another way to write functions
 */
var changeLanguage = function(){
    x = "HINDI";
}

changeLanguage();
console.log(x);  

//functions can be defined insiade an function also

/**
 * var something = 1; {
var something = 2;
// Do stuff with variable something ... }
// Outside of the block again ...
But the something inside the block refers to the same variable as the 
one outside the block. In fact,
 although blocks like this are allowed, 
 they are useful only to group the body of an if statement or a loop.
 */


// functions names are like regular variables

var func = function(a, b) {
    return a+b;
}
console.log(func(1, 2)) // will use addition function

func = function(a, b){
    return a-b;
}

console.log(func(1, 2));// will use subtraction function



