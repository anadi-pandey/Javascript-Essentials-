// ========= Properties used to determine the size of browser window.
// ========= Does not include toolbars and scrollbars
var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

var x = document.getElementById("demo");
x.innerHTML = "Browser inner window width:" + w + ", Height: " + h + ".";

document.getElementById("demo_1").innerHTML = "Screen width is " + screen.width + " \n ANd available width  " + screen.availWidth;
// Similarly screen.height gives us the window height.

document.getElementById("demo_2").innerHTML = "Color depth is " + screen.colorDepth + " IN PIXELS " + screen.pixelDepth;


// window.location.href returns the href (URL) of the current page

document.getElementById("demo_3").innerHTML = "URL of current page is: " + window.location.href;

// window.location.hostname returns the domain name of the web host
document.getElementById("demo_4").innerHTML = "Domain name of web host is: " + window.location.hostname;

// window.location.pathname returns the path and filename of the current page
document.getElementById("demo_5").innerHTML = "PATH AND FILE NAME IS: " + location.pathname;


// window.location.protocol returns the web protocol used (http: or https:)
document.getElementById("demo_6").innerHTML = "WEb protocol used: " + location.protocol;


// window.location.assign() loads a new document

function newDoc() {
    window.location.assign("https://www.w3schools.com")
}

// window.history functions allows functionality to go forward in url history or go back 
function goBack() {
    window.history.back()
}

// window.history function allows to go back or forward is url listing in the history
function goAhead(){
    window.history.forward()
}
// Event handling simple example ?

const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

// ======== Event Handler encorporated to keep an eye on click event binded to cta link rel
CTA.onclick = reveal;

// ============== SECOND INPUT NOW TO CHANGE THE NAME AND NOT HIDE =============
const CTAa = document.querySelector(".cta_2 a");
const ALERTt = document.querySelector("#alert_2");

CTAa.classList.remove("hide");
ALERTt.classList.add("hide");

function reveall(e,current){
    e.preventDefault();
    ALERTt.classList.toggle("hide");
    current.innerHTML == "REVEAL" ? current.innerHTML = "HIDE" : current.innerHTML = "REVEAL"
}

CTAa.addEventListener('click' , function(e) { reveall(e,this); }, false);

// ===== Objects =====

// Method 1 OBJECT LITERAL 
let school = {
    name: 'CIty MOntessori School',
    city: 'Lucknow',
    since: '1950',
    displayInfo: function (){
        console.log(`${school.name.split(' ')[0]}`);
        console.log(`${school.city}`);
       
    }
    
}

school.displayInfo();

// Method 2 Object Constructor 

const company = new Object();
company.name = 'Cuelogic';
company.location = 'Bund Garden';
company.employees = '201-500';

school.displayIt = function (){
    console.log(`${company.name} is in ${company.location} with around ${company.employees} employees`);
}

school.displayIt();

// Multiple object Creation to make objects of same type.

function Person(first,last,age,eye)
{
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    // Adding function to the constructor function.
    this.name = function() {return this.firstName + " " + this.lastName;};
   

}

var myFather = new Person("Sunil Kumar ", "Pandey", "50","black");

var mySelf = new Person("Anadi Krishna","Pandey","21","black");



mySelf.name = function () {
    return (this.firstName) + " " + (this.lastName);
}


document.getElementById("personName").innerHTML = "My father is " + myFather.age + " years old." +" Name: " + myFather.name();

// new property cannot be added to constructor functions.

// ------- Adding a method to object-----------

// deleted the last name property from mySelf

delete mySelf.lastName;



console.log(mySelf.name());

// using prototype adding a new property 

Person.prototype.hobby = "DANCE";

console.log(mySelf.hobby);


// The JavaScript prototype property also allows you to add new methods to objects constructors:

Person.prototype.into = function (){
    return this.hobby + " is like by" + this.name();
}

console.log(mySelf.into());

// Iterating over OBject keys 

for (let key in mySelf)
{
    console.log(key);
}