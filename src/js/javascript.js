
var slideIndex = 0;
var time = 3000;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  time = 3000;
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  time = 3000;
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, time); // Change image every 2 seconds
}