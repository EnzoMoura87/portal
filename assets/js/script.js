

var slideItem = 0;
window.onload = function() {
 document.getElementById("button"+slideItem).style.backgroundColor = "#4F4F4F";
 interval = setInterval(passarSlide, 6000);
 var slidewidth = document.getElementById("slideshow").offsetWidth;
 var objs = document.getElementsByClassName("slide");
 for(var i=0;i<objs.length;i++) {
  objs[i].style.width = slidewidth+"px";
 }
}
function passarSlide() {
 document.getElementById("button"+slideItem).style.backgroundColor = "#FFF";
 var slidewidth = document.getElementById("slideshow").offsetWidth;
 
 if(slideItem >= 4) {
  slideItem = 0;
 } else {
  slideItem++;
 }
 document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
 document.getElementById("button"+slideItem).style.backgroundColor = "#4F4F4F";
}
function mudarSlide(pos) {
 document.getElementById("button"+slideItem).style.backgroundColor = "#FFF";
 slideItem = pos;
 var slidewidth = document.getElementById("slideshow").offsetWidth;
 document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
 document.getElementById("button"+slideItem).style.backgroundColor = "#4F4F4F";
 clearInterval(interval);
 interval = setInterval(passarSlide, 6000);
}

function toggleMenu() {

	var menu = document.getElementById("menu");

	if (menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}

}