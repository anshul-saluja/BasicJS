//Bind methods
//use this article http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/

residents = [1, 2, 3, 4]

society = {
    name: "Shashadri",
    address: "Bangalore",
    residents: [{name: "akash", age: 23}, 
    {name: "anshul", age: "24"}],
    printResidentsName: function(){
            console.log(this.residents.length);
    }
}

society.printResidentsName() // will print length as 2 because socity object called it
//"this" will be for calling object 
var func = society.printResidentsName;
func() // will print 4 becaise now there is no calling object in that case its the global object

//bind will set whatever object we specify for this
var func2 = society.printResidentsName.bind(society);


func2()


/**
 * Another use case for bind, in this case bind can bind few params
 */

var printFullName = function(lastName, firstName){
    console.log(firstName + " " + lastName);
}

var firstNameFunc = printFullName.bind(null, "Saluja"); //first param is for this keyword, 
//no this so null
firstNameFunc("Anshul");
firstNameFunc("Ruchi");
firstNameFunc("Meenu");




