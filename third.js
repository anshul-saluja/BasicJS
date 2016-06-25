//arrays
var arr  = [1, "akash", 3];
var index = 0;

arr.push(4);


while(index < arr.length){
    console.log(arr[index]);
    index++;
}


console.log(typeof arr) //each array is an object as described below
console.log(arr)

//Arrays have useful function search whenever to use


//JSON
//JAVA script obj notation
 

 var cv = {
     "firstSchool": "Doon",
     "school": "DSPS",
     "college": "IIITM"
 }
 console.log(cv)
 console.log(cv.college)

 //Not checked completely but should support all JSON

 delete cv.firstSchool //delete a branch of json

 console.log(cv)


 //number, string and boolean are immmutable, objects have refrences similar to java