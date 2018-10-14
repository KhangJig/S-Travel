/*var loginbox = document.getElementById('login-form');
window.onclick = function(event) {
    if (event.target == loginbox) {
        modal.style.display = "none";
    }
}*/
//Slide
var myIndex = 0;
carousel();
function carousel()
{
	"use strict";
    var x = document.getElementsByClassName("mySlides");
    for (var i = 0; i < x.length; i++)
	{
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length)
	{
		 myIndex = 1;
	}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 9000);    
}