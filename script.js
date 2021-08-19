
let slideIndex = 1;
showSlides(slideIndex);


setInterval(function(){
    showSlides(slideIndex += 1);
}, 3000);


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 
}



var items = document.getElementsByClassName('service');
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('mouseenter', enterFunction);
  items[i].addEventListener('mouseleave', leaveFunction);

}

function enterFunction(e) {
  console.log("Clicked " + '#service-description'+this.id);
  document.getElementById('service-description'+this.id).style.display="block";
  document.getElementById('service-description'+this.id).style.color='#FAFAFA';
  document.getElementById('service-title'+this.id).style.color='#FAFAFA';


  this.style.backgroundColor='#15263E'

}

function leaveFunction(e) {
    console.log("Clicked " + '#service-description'+this.id);
    document.getElementById('service-description'+this.id).style.display="none";
    document.getElementById('service-description'+this.id).style.color="black";
    document.getElementById('service-title'+this.id).style.color="black";

    this.style.backgroundColor='#FAFAFA'
  
  }