
let cards = document.getElementById("js-cards");
let card = document.getElementsByClassName("card");


cards.addEventListener('click', function(e) {

console.log(e.target)

    for(let i = 0; i < card.length; i++) {
        card[i].classList.remove('highlight')
    } 
    if(e.target.parentElement.parentElement.classList.contains('cards')) {
        e.target.parentElement.classList.add('highlight')
    } 

});



// Change dots color
window.onscroll = function() {
  scrollPosY = window.scrollY;
  // console.log(scrollPosY); 
  changeColor();
}  

var dotLink = document.getElementsByClassName("dot-link");

for (var i = 0; i < dotLink.length; i++) {
  dotLink[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

let showcase = document.getElementById("js-showcase");
var showcaseDot = document.getElementById('showcase-dot');

let about = document.getElementById("js-about");
let aboutSectionTop = about.getBoundingClientRect().top;
let aboutDot = document.getElementById('about-dot');

let portfolio = document.getElementById("js-portfolio");
let portfolioSectionTop = portfolio.getBoundingClientRect().top;
let portfolioDot = document.getElementById('portfolio-dot');

let advisors = document.getElementById("js-advisors");
let advisorsSectionTop = advisors.getBoundingClientRect().top;
let advisorsDot = document.getElementById('advisors-dot');

let investors = document.getElementById("js-investors");
let investorsSectionTop = investors.getBoundingClientRect().top;
let investorsDot = document.getElementById('investors-dot');


function changeColor() { 
  if(scrollPosY == 0) {
    removeDotColor();
    showcaseDot.classList.add('active');
    for (var i = 0; i < dotLink.length; i++) {
        dotLink[i].classList.add('active-white');
    }
  } else if (scrollPosY >= aboutSectionTop && scrollPosY <= portfolioSectionTop){
    removeDotColor();
    aboutDot.classList.add('active');
    for (var i = 0; i < dotLink.length; i++) {
      dotLink[i].classList.add('active-black');
    }
  } else if (scrollPosY >= portfolioSectionTop && scrollPosY <= advisorsSectionTop){
    removeDotColor();
    portfolioDot.classList.add('active');
    for (var i = 0; i < dotLink.length; i++) {
      dotLink[i].classList.add('active-white');
    }
} else if (scrollPosY >= advisorsSectionTop && scrollPosY <= document.body.offsetHeight){
    removeDotColor();
    advisorsDot.classList.add('active');
    for (var i = 0; i < dotLink.length; i++) {
      dotLink[i].classList.add('active-black');
    }
}
}
function removeDotColor() {
  for (var i = 0; i < dotLink.length; i++) {
    dotLink[i].classList.remove('active');
    dotLink[i].classList.remove('active-black');
    dotLink[i].classList.remove('active-white');
  }
}


    
    

