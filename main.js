'use strict';

var slideIndex = 0;    //START Carousel Animation

        function showSlides() {
            var i;
            var slides = document.querySelectorAll(".slide-container1, .slide-container2, .slide-container3");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            setTimeout(showSlides, 3000); // Change image every 3 seconds
        }

showSlides();
        //END Carousel Animation
        
        //START Accordion buttons
        
var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');
    
    var content = this.nextElementSibling;
    
    if (content.style.maxHeight) {
        //if accordion is open, then close it
      content.style.maxHeight = null;
        }
    else {
      //accordion is closed
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}