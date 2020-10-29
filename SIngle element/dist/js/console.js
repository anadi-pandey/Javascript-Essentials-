// assert()

// expression and message exp. is true or false according to the assert works and pushes the message in case of flase 
console.assert(document.getElementById("NOTPRESENT"),"You have no element with the ID specified 'NOTPRESENT'");
console.assert( 4+5 == 6,"Expression resulted in false");

// write an object to the console 
var myObj = { firsname : "John", lastname : "Doe" };
console.assert(document.getElementById("demo"), myObj);

// Write an array to the console 
var myArr = ["Orange", "Banana", "Mango", "Kiwi" ];
console.assert(document.getElementById("demo"), myArr);

// ===========console.clear() cleards the console screen============

// console.counter() as a counter
for(i = 0; i < 10; i++)
{
    console.count('Counter');
}

// error messages 
console.error("You made a mistake");

// group start end property 
console.log("hello world !");
console.group('Group starts');
console.log("Hello again this time inside a group!");
console.groupEnd();

// 

console.info("Hello world!");

// table in the console,
console.table(["AUdi","Volvo","Ford"]);

var car1 = { name:"Audi",model: "A4", $null:'null'}
var car2 = { name : "Volvo", model: "XC90"}
var car3 = { name: "FOrd", model: "Fusion"}

console.table([car1,car2,car3]);

// Timer in console 
console.time('time took');
for (i = 0; i < 100000; i++)
{
    // 
}
console.timeEnd('time took');

// trace 
function myFunction() {
    myOtherFunction();
  }

  function myOtherFunction() {
      console.trace();
  }

//   Outputs a warning message to the console
