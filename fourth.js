arr=[1, 2, 3, 4, 5]
var sum = 0;
//passing function in 
arr.forEach(function(element) {
    sum+=element;
});

console.log(sum);


function greatherThan(n){
    return function(m){
        return m>n;
    }
}

var greatherThan10 = greatherThan(10);
console.log(greatherThan10(12));
console.log(greatherThan10(8));

//Chapter 5 talks about high order functions, inbuilt functions, will learn on teh go

//filter function

x = [10, 12, 22, 23, 54, 24];
//calculate greater than 15
var greatherThan18 = function(age) { 
    return age>18;
};
//filter will be called on each element of an array and expects a true or false from each 
// will give result for true elements
console.log(x.filter(greatherThan18));


//"map" is a function for changing the structure of an array
m = [{name: "akash", age:23}, {name:"mummy", age: 56}, {name:"papa", age:60}];
//now we want only names
names = m.map(function(obj){
    return obj.name;
});
console.log(names);

/**
 * Reduce takes an array and gets a single element
 */

// find teh person with largest age
var minimumAge = m.reduce(function (min, obj) {
    if(obj.age<min)
        return obj.age;
    return min;
});

console.log(minimumAge);
//yup, thats me




