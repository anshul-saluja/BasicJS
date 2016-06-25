arr=[1, 2, 3]
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