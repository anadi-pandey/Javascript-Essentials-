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

