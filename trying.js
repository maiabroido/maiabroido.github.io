var slideIndex = 1;
showSlides(slideIndex, "portrait");
showSlides(slideIndex, "landscape");

// Next/previous controls
function plusSlides(n, orientation) {
  showSlides(slideIndex += n, orientation);
}

// Thumbnail image controls
function currentSlide(n, orientation) {
  showSlides(slideIndex = n, orientation);
}

function showSlides(n, orientation) {
  var i;
  var slides = document.getElementsByClassName("mySlides " + orientation);
  var dots = document.getElementsByClassName("dot " + orientation);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(function(){
  // Bind the swipeHandler callback function to the swipe event on div.box
  //$( "div.mySlides" ).on( "swipe", swipeHandler );
 
  $("div.mySlides.portrait").on("swiperight",function(event){
    plusSlides (1, "portrait");
  })

  $("div.mySlides.portrait").on("swipeleft",function(event){
    plusSlides (-1, "portrait");
  })
  
  $("div.mySlides.landscape").on("swiperight",function(event){
    plusSlides (1, "landscape");
  })

  $("div.mySlides.landscape").on("swipeleft",function(event){
    plusSlides (-1, "landscape");
  })
  
  // Callback function references the event target and adds the 'swipe' class to it
  //function swipeHandler( event ){
    /*$( event.target ).addClass( "swipe" );*/
    //alert("test");
  //}
});