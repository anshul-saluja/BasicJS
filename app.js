var a = 5;
var b = 10;
console.log(typeof a);
var c = a+b+8;
console.log("Hello World, I am finally here. My age is " + c)


if(isNaN(a)){
    console.log("NAN");
} else{
    console.log("AN")
}


var i=0;
while(i<19){
    if(i%5==0)
        console.log("This number is " + i);
    i++;
}



for(var index = 0; index < 100; index+=2){
    //tight check equal operator, comparable to == in c++/JAVA
    if(index === 50){
        break;
    }
    //cotinue also works the same way
}

/**
 * Multi Line comments
 */
console.log("Value of index is " + index);