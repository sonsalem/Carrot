'use strict'


// Loading

let loading = document.querySelector('.loading');

window.addEventListener('load', function () {
  setTimeout(() => {
    loading.classList.add('hide')
  }, 500);
})

// Functions

// Menu
function activeOne(main, secondrau) {
  return main.forEach(mainEl => {
    // Set Active Class
    mainEl.addEventListener('click', function () {
      main.forEach(el => el.classList.remove('active'));
      this.classList.add('active');
      // Loop Who Is Active
      if (this.id == 'all') {
        secondrau.forEach(el => el.classList.remove('hide'));
      } else {
        secondrau.forEach(el => el.classList.add('hide'));
        secondrau.forEach(content => {
          if (this.id === content.dataset.content) {
            content.classList.remove('hide')
          }
        })
      }
    });
  })
}

// ASide
function aside (open, close, menu) {
  // Open Menu
  return open.addEventListener('click', function () {
      menu.classList.add('show')
    }) ,
    // Close Menu
    close.addEventListener('click', function () {
      menu.classList.remove('show')
    })
  }

// Mesage
function message (item, message, va) {
  return item.forEach(el => {
    el.addEventListener('click', function () {
      // Animate Mesage
      message.classList.add('animateShow');
      setTimeout(() => {
        message.classList.remove('animateShow');
      }, 5000);
      // Change Maggese
      if (this.classList.contains("active")) {
        this.classList.remove('active')
        va.innerHTML = 'Remove'
      } else {
        this.classList.add('active')
        va.innerHTML = 'Add'
      }
    })
  })
}

// Fixed Nav

let downnav =  document.querySelector('.downnav');
let scrollValue = scrollY;

window.onscroll = function () {
  if (scrollY >= 200) {
    downnav.classList.add('fixed_top');
    if (scrollValue > scrollY) {
      downnav.classList.add('active');
      scrollValue = scrollY;
    } else {
      downnav.classList.remove('active');
      scrollValue = scrollY;
    }
  } else {
    downnav.classList.remove('fixed_top');
  }
}


// Menu Info Heading

let headings = document.querySelectorAll('.navbar .downnav .infoMenu .menu .headings .heading:not(:last-child)');
let contents = document.querySelectorAll('.navbar .downnav .infoMenu .menu .contents .content');

activeOne(headings, contents);

// Aside Menu

let openAsideButton = document.querySelector('.openSideMenu');
let closeAsideButton = document.querySelector('.closeSideMenu');
let asideMenu = document.querySelector('.menuMobile');

aside(openAsideButton, closeAsideButton, asideMenu);

let openLinkAside = document.querySelectorAll('.menuMobile .links .link .heading');
// Toggle Links In Aside
openLinkAside.forEach(el => {
  el.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('show');
  })
})

// Landing

// Carousel
$(document).ready(function () {
  $(".owl-land").owlCarousel({
    nav: false,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 8000,
    margin: 20,
    items: 1,
  })
});

// categories

// Carousel
$(document).ready(function () {
  $(".owl-cat").owlCarousel({
    nav: false,
    loop: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 6000,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      375: {
        items: 2,
      },
      767: {
        items: 4,
      },
      992: {
        items: 6,
      }
    }
  })
});

// Products

// Filter Products

let filterPanleProducst = document.querySelectorAll('.popular-prod .items-panle .item');
let ProductsFilters = document.querySelectorAll('.popular-prod .productFilter');

activeOne(filterPanleProducst, ProductsFilters);

// filterPanleProducst.forEach(el => {
//   el.addEventListener('click', function () {
//     // Loop Who Is Active
//     if (this.id == 'all') {
//       ProductsFilters.forEach(el => el.classList.add('hide'));
//       ProductsFilters.forEach(el => el.classList.remove('delete'));
//       setTimeout(() => {
//         ProductsFilters.forEach(el => el.classList.remove('hide'));
//         ProductsFilters.forEach(el => el.classList.remove('delete'));
//       }, 800);
//     } else {
//       ProductsFilters.forEach(el => el.classList.add('hide'));
//       setTimeout(() => {
//         ProductsFilters.forEach(el => el.classList.add('delete'));
//       }, 800);
//       setTimeout(() => {
//         ProductsFilters.forEach(content => {
//           if (this.id === content.dataset.content) {
//             content.classList.remove('hide')
//             content.classList.remove('delete')
//           }
//         })
//       }, 800);
//     }
//   });
// });

filterPanleProducst.forEach(el => {
  el.addEventListener('click', function () {
    // Loop Who Is Active
    if (this.id == 'all') {
      ProductsFilters.forEach(el => el.classList.remove('hide'));
    } else {
      ProductsFilters.forEach(el => el.classList.add('hide'));
      ProductsFilters.forEach(content => {
        if (this.id === content.dataset.content) {
          content.classList.remove('hide')
        }
      })
    }
  });
});

// lock Card

let lockCard = document.querySelectorAll('.product .lockCart');
let massgeCartProd = document.querySelector('.massge.cartProd');
let massgeCartProdVa = document.querySelector('.massge.cartProd .va');

message(lockCard, massgeCartProd, massgeCartProdVa);

let loveProd = document.querySelectorAll('.product .loveProduct');
let massgeloveProd = document.querySelector('.massge.loveProd');
let massgeloveProdVa = document.querySelector('.massge.loveProd .va');

message(loveProd, massgeloveProd, massgeloveProdVa);

// Zoom Product

let ProductsZoom = document.querySelectorAll('.product .image');
let zoomImage = document.querySelectorAll('.product .zoomeImage');

ProductsZoom.forEach(el => {
  el.addEventListener('mousemove', function(e) {
    zoomImage.forEach(ele => {
      ele.style.setProperty('top', `${Math.ceil((e.pageY - scrollY) - this.getBoundingClientRect().top)}px`);
      ele.style.setProperty('left', `${Math.ceil((e.pageX - scrollX) - this.getBoundingClientRect().left)}px`);
    })
  })
})

// Great Daal

// Time Deal

let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

// Review

// Carousel
$(document).ready(function () {
  $(".owl-review").owlCarousel({
    nav: false,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 6000,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      1199: {
        items: 3,
      }
    }
  })
});

// Great Works

// Carousel
$(document).ready(function () {
  $(".owl-custmers").owlCarousel({
    nav: false,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 6000,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      }
    }
  })
});

// Aside Tools

let openAsideTools = document.querySelector(".openTools");
let closeAsideTools = document.querySelector(".closeSideTools");
let toolsMenu = document.querySelector(".asidetools");
let overlay = document.querySelector('.overlay');

openAsideTools.addEventListener('click', () => overlay.classList.add('active'));
closeAsideTools.addEventListener('click', () => overlay.classList.remove('active'));

aside(openAsideTools, closeAsideTools, toolsMenu)

// Set Theme Color

let colors = document.querySelectorAll(".asidetools .select-color .box-color");

// Call Local Stroge

if (localStorage.getItem('theme-color')) {

  colors.forEach(el => el.classList.remove('active'));
  colors[localStorage.getItem('box-color')].classList.add('active')

  document.querySelector('html').style.setProperty('--color-theme', `${localStorage.getItem('theme-color')}`);

}

colors.forEach((el, i) => {
  el.addEventListener('click', function () {
    // Set Active One
    colors.forEach(el => el.classList.remove('active'));
    this.classList.add('active');

    // Set Color Theme
    document.querySelector('html').style.setProperty('--color-theme', `${this.dataset.color}`);

    // Set It In local Stoge
    localStorage.setItem('theme-color',this.dataset.color );
    localStorage.setItem('box-color', i);
  })
})

// Set Mode

let modes = document.querySelectorAll(".asidetools .select-theme .box-theme");

// Call Local Stroge

if (localStorage.getItem('theme-mode')) {

  // Set Active One
  modes.forEach(el => el.classList.remove('active'));
  modes[localStorage.getItem('box-mode')].classList.add('active')

    // Set Mode
  document.querySelector('html').id = localStorage.getItem('theme-mode');

  // Set Image
  if (document.querySelector('html').id == 'light') {
    document.querySelectorAll('.logo img').forEach(logo => logo.setAttribute('src', 'img/logo.png'));
  } else {
    document.querySelectorAll('.logo img').forEach(logo => logo.setAttribute('src', 'img/dark-logo.png'));
  }

}

modes.forEach((mode, i) => {
  mode.addEventListener('click', function () {
    // Set Active One
    modes.forEach(mode  => mode.classList.remove('active'));
    this.classList.add('active');

    // Set Mode
    document.querySelector('html').id = this.dataset.theme;

    // Set Image
    if (document.querySelector('html').id == 'light') {
      document.querySelectorAll('.logo img').forEach(logo => logo.setAttribute('src', 'img/logo.png'));
    } else {
      document.querySelectorAll('.logo img').forEach(logo => logo.setAttribute('src', 'img/dark-logo.png'));
    }

    // Set It In local Stoge
    localStorage.setItem('theme-mode',this.dataset.theme );
    localStorage.setItem('box-mode', i);
  })
})

// Set Year

let year = document.querySelector('.staticYear');

year.innerHTML = new Date().getFullYear();

// State

let state = document.querySelector('.state');
let stateNums = document.querySelectorAll('.state-num');

let start = false;

window.addEventListener('scroll', function () {
  if (scrollY >= state.offsetTop-150) {
    if (!start) {
      stateNums.forEach(startCount)
    }
    start = true
  }
})

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === el.dataset.goal) {
      clearInterval(count)
    }
  }, 2000 / goal)
}