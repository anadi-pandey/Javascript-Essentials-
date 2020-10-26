// Selection of the body 
const AREA = document.body;

//  selection of the div element.
const CIRCLE = document.querySelector('.circle');

// Used Window object to get the width and height 
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

// FUnction to reset the position of the circle 
// e here is the event object which here is carrying the attributes of of mousemove 
function mouseCoordinates(e){

    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition = windowHeight - e.clientY - 26;

    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top  = verticalPosition + 'px';

}

// Function to change color when the pointer touches the circle 
function changeColorOnTouch() {
 CIRCLE.style.backgroundColor = "goldenrod";
 CIRCLE.style.borderColor = "black";
}

AREA.addEventListener('mousemove', mouseCoordinates, false);

// ===== TO include more than one event we cannot use onclick because that creates precedence of one task over the other thus we use Event listner 
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

// Here an anonymous function is used to remove the style attribute from CIRCLE
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");});