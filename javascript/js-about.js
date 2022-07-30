var slideIndex;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("show");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";

    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
      slideIndex = 0;
    }    
    setTimeout(showSlides, 2500);
}

showSlides(slideIndex = 0);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

$(".shortcuts-liveshow").mouseenter(function(){
  $(this).children("div.content-line").removeClass("show");
})

$(".shortcuts-liveshow").mouseleave(function(){
  $(this).children("div.content-line").addClass("show");
  setTimeout(showSlides,2500);
})

// service hover
$(".blog").mouseenter(function(){
  $(this).css({"height":"280px","width":"400px","position":"absolute"});
  $(".shopping").css({"margin-left":"353.5px"});
})

$(".blog").mouseleave(function(){
  $(this).css({"width":"40%","position":"relative","height":"230px"});
  $(".shopping").css({"margin-left":"0"});
})

$(".shopping").mouseenter(function(){
  $(this).css({"height":"280px","width":"400px","position":"absolute","margin-left":"354px"});
})

$(".shopping").mouseleave(function(){
  $(this).css({"height":"230px","width":"40%","position":"static","margin-left":"0"});
})
// end server hover

// Text animation fade-left,right,bottom
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

