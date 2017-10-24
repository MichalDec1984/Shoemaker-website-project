//Infinite slider
document.addEventListener("DOMContentLoaded", function() {
	var nextButton = document.querySelectorAll(".ArrowLeft");
	console.log(nextButton);
	var prevButton = document.querySelectorAll(".ArrowRight");
	console.log(prevButton);
	var slides = document.querySelectorAll(".slider");
	console.log(slides)
	var picturePosition = 0;
	console.log(picturePosition);
	slides[picturePosition].classList.add("visible");
	var clickCount =0;
	function clickCounter1 (event) {
		clickCount += 1;
		slides[picturePosition].classList.remove("visible");
		picturePosition +=1;
		if (picturePosition>=3) {
			picturePosition = 0;
		}
		console.log("Nr kliknięcia:", clickCount);
		slides[picturePosition].classList.add("visible");
	}
	function clickCounter2 (event) {
		clickCount += 1;
		slides[picturePosition].classList.remove("visible");
		picturePosition +=1;
		if (picturePosition<1) {
			picturePosition = slides.length;
		} else if (picturePosition>=3) {
			picturePosition = 0;
		}
		console.log("Nr kliknięcia:", clickCount);
		slides[picturePosition].classList.add("visible");
	}
	for (var i = 0 ; i < nextButton.length ; i++) {
		nextButton[i].addEventListener("click", clickCounter1);
	}
	for (var i = 0 ; i < prevButton.length ; i++) {
		prevButton[i].addEventListener("click", clickCounter2);
	}	
//Dots auto slider
	var slideIndex = 0;
	showSlides();

	function showSlides() {
    	var i;
    	var slides = document.getElementsByClassName("mySlides");
    	var dots = document.getElementsByClassName("dot");
    	for (i = 0; i < slides.length; i++) {
       		slides[i].style.display = "none";  
    	}
    	slideIndex++;
    	if (slideIndex > slides.length) {
    		slideIndex = 1
    	}    
    	for (i = 0; i < dots.length; i++) {
        	dots[i].className = dots[i].className.replace(" active", "");
    	}
    	slides[slideIndex-1].style.display = "block";  
    	dots[slideIndex-1].className += " active";
    	setTimeout(showSlides, 4000); // Change image every 2 seconds
	}

//First multi-item slider 
	var links = document.querySelectorAll(".itemLinks");
	var wrapper1 = document.querySelector(".wrapper1");
	var activeLink = 0;
	function changePosition(link) {
    	var position = link.getAttribute("data-pos");
    	var translateValue = "translate3d(" + position + ", 0px, 0)";
    	wrapper1.style.transform = translateValue;
	}
	var timeoutID;
	function startTimer() {
    	timeoutID = window.setInterval(goToNextItem, 2000);
	}
	startTimer();
	function resetTimer() {
    	window.clearInterval(timeoutID);
    	startTimer();
	}
	function goToNextItem() {
    	//removeActiveLinks();
    	if (activeLink < links.length - 4) {
        	activeLink++;
    	} else {
        	activeLink = 0;
    	}
    	var newLink = links[activeLink];
    	changePosition(newLink);
	}
//Second multi-item slider 
	var links1 = document.querySelectorAll(".itemLinks2");
	var wrapper2 = document.querySelector(".wrapper2");
	var activeLink1 = 0;
	function changePosition1(link1) {
    	var position1 = link1.getAttribute("data-pos");
    	var translateValue1 = "translate3d(" + position1 + ", 0px, 0)";
    	wrapper2.style.transform = translateValue1;
	}
	var timeoutID1;
	function startTimer1() {
    	timeoutID1 = window.setInterval(goToNextItem1, 2000);
	}
	startTimer1();
	function resetTimer1() {
    	window.clearInterval(timeoutID1);
    	startTimer1();
	}
	function goToNextItem1() {
    	if (activeLink1 < links1.length - 4) {
        	activeLink1++;
    	} else {
        	activeLink1 = 0;
    	}
    	var newLink1 = links1[activeLink1];
    	changePosition1(newLink1);
	}
//Change nav on scroll
	window.addEventListener('scroll', function (e) {
        var nav = document.querySelector('nav');
        var logo = document.getElementById("logo");
        var fb = document.getElementById("FB");
        var navbar= document.querySelector('.navbar-toggle');
        var navbarLine= document.querySelectorAll('.icon-bar');
        if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
                nav.classList.add('navbar-color');
                nav.classList.remove('navbar-default');
                logo.src ="./images/logoBlack.png";
                fb.classList.add('fbIconBlack');
                fb.classList.remove('fbIconWhite');
                //fb.src ="./images/fbIconBlack.png";
                navbar.style.borderColor = "black";
                for (i = 0; i < navbarLine.length; i++) {
        			navbarLine[i].style.backgroundColor = "black";
    			}
            } else {
                nav.classList.add('navbar-default');
                nav.classList.remove('navbar-color');
                logo.src ="./images/logoWhite.png";
                fb.classList.add('fbIconWhite');
                fb.classList.remove('fbIconBlack');
                //fb.src ="./images/fbIconWhite.png";

                navbar.style.borderColor = "white";
                 for (i = 0; i < navbarLine.length; i++) {
        			navbarLine[i].style.backgroundColor = "white";
    			}
            }
    });
//smooth scroller
	function scroll(toElement, speed) {
  		var windowObject = window;
  		var windowPosition = windowObject.pageYOffset;
  		var pointer = toElement.getAttribute('href').slice(1);
  		var element = document.getElementById(pointer);
  		var elementOffset = element.offsetTop;
  		var counter = setInterval(function() {
    		windowPosition;
    		if (windowPosition > elementOffset) {
      			windowObject.scrollTo(0, windowPosition);
      			windowPosition -= speed;
      			if (windowPosition <= elementOffset) { 
        			clearInterval(counter);
        			windowObject.scrollTo(0, elementOffset);
      			}
    		} else { // from top to bottom
      			windowObject.scrollTo(0, windowPosition);
      			windowPosition += speed;
				if (windowPosition >= elementOffset) {
        			clearInterval(counter);
        			windowObject.scrollTo(0, elementOffset);
      			}
    		}
		}, 1);
	}
	var navPointer = document.getElementsByClassName('nav__anchor');
	for (i = 0; i < navPointer.length; i++) {
  		navPointer[i].addEventListener('click', function(e) {
    		scroll(this, 8);
    		e.preventDefault();
  		});
	}
});
//hamburger menu
$(document).ready(function() {   
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            sideslider.click(function(event){
                $(sel).toggleClass('in');
            });
});
//google map 
function initMap() {
	var uluru = {lat: 52.257475, lng: 21.031505};
    var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 14,
        center: uluru
    });
    var marker = new google.maps.Marker({
    	position: uluru,
    	map: map
    });
}