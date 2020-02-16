
// Variable declaration

// Scroll position of window
let scrollPosY = window.scrollY;

// DOM collection of sections and nav dots
let dotLink = document.getElementsByClassName("dot-link");

let showcase = document.getElementById("js-showcase");
let showcaseDot = document.getElementById('showcase-dot');
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

// Card Items
let cards = document.getElementById("js-cards");
let card = document.getElementsByClassName("card");

// Login modal and btns
let loginModal = document.getElementById('js-login-modal');
let btn = document.getElementById('js-login-btn');
let btnClose = document.getElementById('js-login-modal-close');

////////////////////////////
// Adding style on cards //
cards.addEventListener('mouseover', function (e) {
  // console.log(e.target)

  for (let i = 0; i < card.length; i++) {
    card[i].classList.remove('highlight')
  }
  if (e.target.parentElement.parentElement.classList.contains('cards')) {
    e.target.parentElement.classList.add('highlight')
  } else if (e.target.classList.contains('card')) {
    e.target.classList.add('highlight');
  }
});

////////////////////////
// Change dots color //
window.onscroll = function () {
  scrollPosY = window.scrollY;
  // console.log(scrollPosY);
  changeColor();
}

for (let i = 0; i < dotLink.length; i++) {
  dotLink[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function changeColor() {
  if (scrollPosY == 0) {
    removeDotColor();
    showcaseDot.classList.add('active');
    for (let i = 0; i < dotLink.length; i++) {
      dotLink[i].classList.add('active-white');
    }
  } else if (scrollPosY >= aboutSectionTop && scrollPosY <= portfolioSectionTop) {
    removeDotColor();
    aboutDot.classList.add('active');
    for (let i = 0; i < dotLink.length; i++) {
      dotLink[i].classList.add('active-black');
    }
  } else if (scrollPosY >= portfolioSectionTop && scrollPosY <= advisorsSectionTop) {
    removeDotColor();
    portfolioDot.classList.add('active');
    for (let i = 0; i < dotLink.length; i++) {
      dotLink[i].classList.add('active-white');
    }
  } else if (scrollPosY >= advisorsSectionTop && scrollPosY <= investorsSectionTop) {
    removeDotColor();
    advisorsDot.classList.add('active');
    for (let i = 0; i < dotLink.length; i++) {
      dotLink[i].classList.add('active-black');
    }
  } else if (scrollPosY >= investorsSectionTop) {
    removeDotColor();
    investorsDot.classList.add('active');
    for (let i = 0; i < dotLink.length; i++) {
      dotLink[i].classList.add('active-white');
    }
  }
}

// Remove class active on nav dots
function removeDotColor() {
  for (let i = 0; i < dotLink.length; i++) {
    dotLink[i].classList.remove('active');
    dotLink[i].classList.remove('active-black');
    dotLink[i].classList.remove('active-white');
  }
}

///////////////////////////////
// Show and hide login modal//
btn.addEventListener('click', () => {
  loginModal.classList.add('login-active');
});

btnClose.addEventListener('click', () => {
  loginModal.classList.remove('login-active');
});

