'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  //preventDefault will prevent page from scrolling to the top since it's a link href="#"
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

/*same as
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}*/

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// Selecting, Creating and Deleting Elements
///////////////////////////////////////
///////////////////////////////////////
/*
//special elements
//selecting entire HTML element
console.log(document.documentElement);

//selecting entire HEAD element
console.log(document.head);

//selecting entire BODY element
console.log(document.body);

//OTHERS
//Header with class name header
const header = document.querySelector('.header');

//ALL Sections with class name section
//will return a NodeList, this does not update itself if an element is deleted
const allSections = document.querySelectorAll('.section');

//Getting elements BY ID
document.getElementById('section--1');

//all elements with the TAG name "button"
//this returns an HTML collection : live collection
// if the DOM changes, the HTML collection will automatically be updated
const allButtons = document.getElementsByTagName('button');

//Getting element by ClassName, no selection is needed
//same as querySelector / querySelectorAll
//will return an HTML collection
document.getElementsByClassName('btn');

//
//
//
//
//CREATING AND INSERTING ELEMENTS
// .insertAdjacentHTML

//this creates a DOM element / object we can use, stored in the message variable
const message = document.createElement('div');

//we can add a class to it
message.classList.add('cookie-message');

//we can add text into the element - can read and set content
//message.textContent = "We use cookies for improved functionality and analytics."

//we can add HTML - can read and set content
const p = '<p>We use cookies for improved functionality and analytics.</p>';
message.innerHTML = `${p}<button class='btn btn--close-cookie'>Got it!</button>`;

// add the element as the 1st child of the element "header"
//header.prepend(message);

// add the element as the last child of the element "header"
// this add or moves an element
//the element will only show up once, its like CSS, the last line will always be read
header.append(message);

// this will COPY the element and append it
//header.append(message.cloneNode(true));

//this will add the message BEFORE the tag <header>
//header.before(message);

//this will add the message AFTER the tag </header>
//header.after(message);

//
//
//
//
// DELETING ELEMENTS
//
// this will select the button for closing the coolie div
// after click it will be deleted

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // THIS IS NEW METHOD
    //message.remove();
    // THIS IS OLD METHOD
    message.parentElement.removeChild(message);
  });

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// styles, attributes and classes
///////////////////////////////////////
///////////////////////////////////////

//setting style
//they are set as INLINE styles - directly to the HTML
//element.style.attributeName

message.style.backgroundColor = '#37383d';
message.style.width = '100%';

// can only get values for inline style - style that we set ourselfs
// we did not set height, will return blank

console.log(message.style.height);

//getting css style
//returns a CSSStyleDeclaration\
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//
//
// CSS custom properties - variables
// sets and mutates
document.documentElement.style.setProperty('--color-primary', 'orangered');

// attributes - src/alt/class/id
// only works for standart properties of that element
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); //Bankist logo

//absolute URL - gives back the real URL
console.log(logo.src); //http://127.0.0.1:5500/img/logo.png
//relative URL - gives back URL that was set in IMG mannually
console.log(logo.getAttribute('src')); //img/logo.png

console.log(logo.className); //nav__logo

// non-standart
console.log(logo.getAttribute('designer'));

//
//
// setting attributes
logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // absolute URL
console.log(link.getAttribute('href')); //relative URL as it was written in the HTML

//
//
//
//
// data attributes - special type
// start with the word data
// camelCase in JS
console.log(logo.dataset.versionNumber); //3.0

//
//
//
//
//
//
// CLASSES
logo.classList.add('a', 'b');
logo.classList.remove('c');
logo.classList.toggle('d');
logo.classList.contains('e');

//
//DON'T USE - will override existing class
//logo.className = 'Jonas';*/

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// implementing smooth scrooling
///////////////////////////////////////
///////////////////////////////////////
const btnScrollTo = document.querySelector('.btn--scroll-to');
const secton1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = secton1.getBoundingClientRect();
  console.log(s1coords);
  //DOMRect {x: 0, y: 937, width: 1394, height: 1557.609375, top: 937, right: 1394, left: 0, height: 1557.609375, bottom: 2494.609375 }

  console.log(e.target.getBoundingClientRect());
  console.log('Current Scroll (X/Y)', window.pageXOffset, pageYOffset); //Current Scroll (X/Y) 0 0

  console.log(
    'heigth/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); //heigth/width viewport 937 1394

  //Scrolling
  //we need to add the element we want to scroll to + current viewport sizes for it to work
  //position to scroll to + current croll
  /*window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );*/

  //smooth scrolling - OLD SCHOOL
  //to enable smooth scrolling, we need to pass in an object
  //object that has left, top positions
  //behavior property set to smooth
  /*window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });*/

  //smooth scrolling - NEW WAY - only works in MODERN brownsers
  secton1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// types of events
///////////////////////////////////////
///////////////////////////////////////

//an event is a signal that is generated by a certain DOM Node
//a signal means that something has happen, ie: scrolling, click, mouse moving, trigger fullScreen Mode
//we can then listen to this events, using eventListener
/*
//MOUSE ENTER EVENT*/
const h1 = document.querySelector('h1');

//listening to events - OLD SCHOOL
/*h1.onmouseenter = function (e) {
  //mouse enter is like MOUSE houver in css
  alert('addEventListener: GREAT! Repeat');
};*/

//listening to events - NEW BETTER WAY
/*h1.addEventListener('mouseenter', function (e) {
  //mouse enter is like MOUSE houver in css
  alert('addEventListener: GREAT!');
});

const alertH1 = function (e) {
  alert('addEventListener: GREAT! Repeat');

  //remove event listener - so it only happen 1 time
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

//we can remove an event listener anywhere in our code
// can remove event listener after some time
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 1000);

//event listener using HTML attribute - don't use
//onclick attribue in html
//<h1 onclick="alert('HTML alter')"></h1>;

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// event propragation: bubbling and capturing
///////////////////////////////////////
///////////////////////////////////////

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min - 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

/*document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});*/

// so pretty much, when you click a nav__link, nav__links & nav will ALSO change BG color
// so they r handling the same event that happens on nav__link
// if only the nav is clicked, then ofc, only that will change the BG color because it's a parent element of the other 2

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// EVENT DELEGATION
///////////////////////////////////////
///////////////////////////////////////

//page navigation

/*document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    //THIS WILL PREVENT LINK FROM SHOWING IN URL & GOING TO ANCHOR POINT
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    //os anchors/links e as secções/divs têm de ter o mesmo nome, em id #section--1/#section--2/#section--3
  });
});
//this creates a "copy" for each click on a nav__link of the Event Handler, which in multiple links
will overload the programn*/

//
//EVENT DELEGATION
//1 - add the event listener to a common parent element of all the elements we r interested in - <ul class="nav__links">
//2 - in that event listener, determine what element originated the event (e.target)

// with this, the Event Listener, is added only to the parent element, and used once
// then depending where we click, it will lead us to the section corresponding DEPENDING on the matching strategy

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // THIS WILL PREVENT LINK FROM SHOWING IN URL & GOING TO THE ANCHOR POINT

  //matching strategy
  if (e.target.classList.contains('nav__link')) {
    //<a class="nav__link" href="#section--1">Features</a>
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// DOM TRAVERSING
///////////////////////////////////////
///////////////////////////////////////

// Going downwards: selecting child elements
// - querySelector
/*
console.log(h1.querySelectorAll('.highlight'));
//selects all the elements with the highlight class THAT ARE CHILDREN of the h1 element
//NodeList(2) [span.highlight, span.highlight]

console.log(h1.childNodes);
//gets ALL THE CHILDREN of the h1 element Nodes - NOT THAT USED  
//NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]

console.log(h1.children);
//gets ALL THE DIRECT CHILDREN of the h1 element - MOST USED
//HTMLCollection(3) [span.highlight, br, span.highlight]

h1.firstElementChild.style.color = 'white';
//SET ONLY THE 1ST CHILD of h1 to color: white;

h1.lastElementChild.style.color = 'orangered';
//SET ONLY THE 1ST CHILD of h1 to color: orangered;

//
//
//
// Going upwards: selecting parent elements
console.log(h1.parentNode);
//gets THE DIRECT PARENT of h1
//<div class="header__title"></div>

console.log(h1.parentElement);
//gets THE PARENT of h1
//<div class="header__title"></div>

//finding a parentElement that might have same class as another, BUT we want to get the nearest element to the h1
h1.closest('.header').style.background = 'var(--gradient-secondary)';

//selected the closest parent element that has the .header class
//very used in event delegation

h1.closest('h1').style.background = 'var(--gradient-primary)';
//SELECTS THE ELEMENT ITSELF

//
//
//
// Going sideways: siblings
// we can only select the previous element and the next element

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling); //<h4></h4>

console.log(h1.previousSibling);
console.log(h1.nextSibling);

//GETS ALL THE CHILDREN OF ELEMENT h1, incluiding itself
console.log(h1.parentElement.children);
//HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]

//since it returns an HTMLCollection, an iterable, we can spread into an array
//we can then loop over it using forEach and do something
//like changing the style of the rest of the sibling elements and not itself*/
/*

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    //IF IT'S NOT H1, THEN
    el.style.transform = 'scale(0.5)';
  }
});*/

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// Building a TABBED componnent
///////////////////////////////////////
///////////////////////////////////////
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// 1: adding event handlers to the buttons
// - matching strategy: figure out which button was clicked
tabsContainer.addEventListener('click', function (e) {
  //const clicked = e.target;
  //console.log(clicked);
  //returns the span, BUT we need the button element itself, because we need to read the data tab
  //so we do DOM traversing
  const clicked = e.target.closest('.operations__tab');
  //returns the button ITSELF when we click the span and the button

  //GUARD CLAUSE
  //AN IF STATEMENT WHICH WILL RETURN EARLY IF SOME CONDITION IS MATCH
  if (!clicked) return;

  //SAME AS
  /* if (clicked) {
    clicked.classList.add('operations__tab--active');
  } */

  //ACTIVE TAB
  //PUTTING BUTTONS DOWN IF ONE IS CLICKED
  //CLEARING THE CLASS IN ALL OF THEM
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  //ADDING THE ACTIVE CLASS TO THE BUTTON CLICKED
  clicked.classList.add('operations__tab--active');

  //CLEAR THE CLASS IN ALL THE OTHERS
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //ACTIVE CONTENT AREA - IS THE DATA ATTRIBUTE / DATASET + CLASS WITH SAME NUMBER
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active'); //data-tab

  //THE GENERAL IDEIA IS TO REMOVE AND ADD CLASSES TO MANIPULATE THEM AND SHOW THEM ONLY WHEN THEY R CLICKED
  //TOGGLE THEM, PERSAY
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// PASSING ARGUMENTS TO EVENT HANDLERS
///////////////////////////////////////
///////////////////////////////////////
//FADE OUT OTHER ELEMENTS WHEN ONE IS HOVERED

//Menu fade animation
//event delegation
//const nav = document.querySelector('.nav');
/*nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    //changing opacity of siblings to 0.5 - FADE IN
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = 0.5;
      }
    });
    logo.style.opacity = 0.5;
  }
});

nav.addEventListener('mouseout', function (e) {
  //UNDO - FADE OUT
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    //changing opacity of siblings to 0.5 - FADE IN
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = 1;
      }
    });
    logo.style.opacity = 1;
  }
});*/

//REFACTURING . CREATING A NEW FUNCTION

const handleHover = function (e, opacity) {
  //"e" will be mouse event
  //opacity will be wtvr we set it in the bind method
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    //changing opacity of siblings to 0.5 - FADE IN
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

//addEventListener expects a function as the 2nd argument
//PASSING ARGUMENTS TO EVENT HANDLERS
//function calling function - THIS ALSO WORKS... WTVR

/*nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});*/

// OR
// USING BIND METHOD
// bind method: creates a copy of the function that is called on
// and will set the THIS keyword in this function call to wtvr value that we pass in bind
// em vez de se criar um event listener para cada mouse event, em que apenas o opacity é alterado
// em ambas as funções, cria-se uma função única, utiliza-se o metodo bind para criar uma cópia
// da mesma, em que o argumento do bind passa a ser a THIS keyword da função

// o 1o argumento do Event Listener É SEMPRE o mouse event
// o 2o argumento do event listener É SEMPRE uma função.
// MAS TEM QUE SE CRIAR SEMPRE / INICIAR A FUNÇÃO 1o ANTES DE SER CHAMADA

// passing "argument" into handler function with bind method
// it's impossible to actually pass another argument into an event handler function
// any event handler function CAN ONLY HAVE 1 REAL argument/parameter, which is the event itself
// but if we want to pass aditional values into the handler, then we need to use the THIS keyword
// in the event handler function
// if we wanted multiple values we could pass an array or an object in the bind method
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// implementing a sticky navigation
///////////////////////////////////////
///////////////////////////////////////

//sticky navigation
//HE SAYS IT'S BAD TO USE SCROLL EVENT BECAUSE IT FIRES ALL THE TIME
/*const initialCoords = secton1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  console.log('coords', initialCoords.top);

  if (window.scrollY > initialCoords.top - initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});*/

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// implementing a sticky navigation
// A BETTER WAY : THE INTERSECTION OBSERVER API
///////////////////////////////////////
///////////////////////////////////////
/*
// this API allows our code to observe changes to the way
// that a certain target element intersects another element
// or the way it intersects the viewport

// the call back function will be called each time that
// the observed element/target element is intersecting the root
// element at the threshold we define
// it will be called with 2 arguments
// 1st- entries | array of threshold entries
// 2nd- observer object
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
    //gives back a IntersectionObserverEntry
    //IntersectionObserverEntry {time: 2525.164999999106, rootBounds: DOMRectReadOnly, boundingClientRect: DOMRectReadOnly, intersectionRect: DOMRectReadOnly, isIntersecting: false, …}
  });
};

const obsOptions = {
  root: null, //null = viewport | secton1 will intersect entire viewport
  //threshold: 0.1, //percentage the callback function will be called (10%) | each time section1 intersects with viewport at 10%
  threshold: [0, 0.2], //0% means our callback function will trigger eachtime that the target element moves completly out of the view and also as soon as it enters the view
  //calling 1 means that the callback function will only be called when 100% of the target is actually visable in the viewport
};

//pass in callback function and an object of options
const observer = new IntersectionObserver(obsCallback, obsOptions);
//section1 is the target element
observer.observe(secton1);*/

//sticky navigation NOW
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
//console.log(navHeight);

const stickyNav = function (entries) {
  //entries are an array of the thershhold entries
  const [entry] = entries; // = entries[0]
  if (!entry.isIntersecting) {
    //when the target is NOT intersecting the root then:
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  //rootMargin: '-90px', this will make the header appear a bit before the section
  //negative margin = header height - we can get it dynamically with .getBoundingClientRect().height
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// revealing elements on scroll
///////////////////////////////////////
///////////////////////////////////////

//using THE INTERSECTION OBSERVER API
//reveal section
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  //section.classList.remove('section--hidden');
  entry.target.classList.remove('section--hidden');
  //AFTER ALL THE SECTIONS ARE REVEALED, UN-OBSERVE THE EVENT
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// lazy loading images
///////////////////////////////////////
///////////////////////////////////////
//using THE INTERSECTION OBSERVER API

//optimize image loading - pq pesa muito ok
//<img src="img/digital-lazy.jpg" data-src="img/digital.jpg" alt="Computer" class="features__img lazy-img"/>
// a low resolution image in src paired with lazy-img class (makes it blurred)
// real img in special attribute in data-src

const imgTargets = document.querySelectorAll('img[data-src]');
//como chamar imagens com um data src ^

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // REPLACE SRC WITH DATA-SRC
  entry.target.src = entry.target.dataset.src;
  // entry.target.classList.remove('lazy-img');
  // just removing the class won't do, because the img can take more time to load and if we remove the blur effect, the ugly picture will show while the good res is loading
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
    // with a Event Listener with the event LOAD trigger, the images will ONLY get the blurred effect (lazy-img class)
    // remove AFTER the image is finished loading
    observer.unobserve(entry.target);
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px', //so that the img load a bit before they show up in the viewport
});

imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// building a slider component PT 1
///////////////////////////////////////
///////////////////////////////////////

// HTML
// slide slide--1 | slide slide--2 | slide slide--3 ARE SIBLINGS - CHILDS OF slider
// they don't show up because they have an overflow:hidden;
// se quiser mostrar os sliders seguintes, o overflow pode ser retirado
// para mover os sliders usa-sa a propriedade de CSS transform: translateX de 0 a 100% entre cada um + 100%
// 0, 100%, 200%, etc

const slides = document.querySelectorAll('.slide');
//NodeList(7) [div.slide.slide--1, div.slide.slide--2, div.slide.slide--3, div.slide, div.slide, div.slide, div.slide]
// OU SEJA, UM TIPO DE ARRAY, COM INDEX e VALUE
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

//1 -> // initial slide
let curSlide = 0;
//2 -> // DETERMINE N# OS SLIDES SO SLIDER WILL STOP AT THE LAST ONE/1ST ONE
let maxSlide = slides.length;

// FOREACH:
// 1st argument, slide
// 2nd argument, index position
/* slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`)); */

// 3 -> REFACTURING CODE
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
//so that the 1st slide will always be the one with index position 0
goToSlide(0);

//next slide
/*btnRight.addEventListener('click', function () {
  //2 -> //RETURNING TO THE 1ST SLIDER, AFTER REACHING THE LAST ONE
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  //1 ->  //increasing slide n# at each click
  //curSlide++; //1 -> after 1st click
  slides.forEach(
    //NO FOREACH O 1O ARGUMENTO É SEMPRE O CURRENT ELEMENT
    //O 2O ARGUMENTO É SEMPRE O CURRENT INDEX
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
    // 100% * -1 = -100%
    // (i - curSlide) (na 1a iteração) = 0 - 1 = -1;
  );
});

//curSlide = -100%; 0%, 100%, 200%*/

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// building a slider component PT 2
///////////////////////////////////////
///////////////////////////////////////

//sliding the slider with keydown events
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  }
  //short circuiting - both work
  e.key === 'ArrowRight' && nextSlide();
});

//adding DOTS
//this will create n# dots depending on the n# slides dynamically
const dotContainer = document.querySelector('.dots');

const createDots = function () {
  slides.forEach(function (s, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
      //data-slide will have same number as the slide index position
    );
  });
};
//creates dots
createDots();

//LAST STEP
//ADDING SPECIAL CLASS TO ACTIVE SLIDE
//WHENEVER WE CHANGE THE SLIDE WE WANT TO CHANGE WHICH ONE IS THE ACTIVE ONE

const activateDot = function (slide) {
  //first remove them from all the slides
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  //select current slide and add active class to it
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
//so that when the page is reloaded the 1ST slide will always be the active one
activateDot(0);

//ao clicar num dot, se tiver a class dots__dot, ele vai para o slide que tenha o n# daquele data-slide
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    //destructuring
    //const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

//nextSlide, prevSlide functions also recieve activateDot() function call at the end

// LAST PART - REFACTURING CODE - VER VIDEO DEPOIS DE PASSAR APONTAMENTOS DESTA CONFUSÃO TODA
//const slider = function () {};
//const init = function () {};

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// LYFECICLE DOM EVENTS
///////////////////////////////////////
///////////////////////////////////////

// 1: DOMContentLoaded
// this event is fired by the document as soon as the HTML is completly parsed
// parsed: HTML downloaded and converted to the DOM tree
// all scripts must to be download and executed before the DOMContentLoaded event can happen

document.addEventListener('DOMContentLoaded', function (e) {
  console.log(e);
});
//Event {isTrusted: true, type: "DOMContentLoaded", target: document, currentTarget: document, eventPhase: 2, …}
// We can check how long it took for the DOMContent to be Loaded in the Network tab of console
// DOMContentLoaded: 72 ms

// with this we can execute code only after the DOMContent is loaded
// THAT IS WHY THE <SCRIP></SCRIP> IS THE LAST ONE

// 2: Load event
// load event is fired by the windows as soon as not only the HTML is parsed but also all the img, and external sources like css files are loaded

window.addEventListener('load', function (e) {
  console.log(e);
});
//Event {isTrusted: true, type: "load", target: document, currentTarget: Window, eventPhase: 2, …}
// We can check how long it took for the Load event to be Loaded in the Network tab of console
// Load: 98 ms

// 3: Before Unload event
// also gets fired on window, and it's created immediately before a user is about to leave a page -> after clicking the close windows
// this creates a pop-up when we try to close the windows... freakin annoying
// in the old days, a message could be customized
// but ofc programmers abused this and it's now a generic message
// THIS IS USEFUL WHEN A USER IS FILLING OUT A FORM OR IMPORTANT STUFF IN A WEBSITE
// A SITUATION WHERE DATA COULD BE LOST BY ACCIDDENT
/*window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});*/
//BeforeUnloadEvent {isTrusted: true, returnValue: "", type: "beforeunload", target: document, currentTarget: Window, …}

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// EFFICIENT script loading defer and async
///////////////////////////////////////
///////////////////////////////////////
