var slideIndex = 0;
     
showSlides();
      
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function plusSlides(index) {
    var slides = document.getElementsByClassName("mySlides"); 
    for(var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (index < 0) {
        slideIndex--;    
    } else {
        slideIndex++;
    }

    if (slideIndex < 0) {
        slideIndex = slides.length-1;
    }
    else if (slideIndex > slides.length-1) {
        slideIndex = 0
    }
    slides[slideIndex].style.display = "block"; 
}

function currentSlide(index) {
    var slides = document.getElementsByClassName("mySlides"); 
    for(var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    index--;
    slides[index].style.display = "block";
}