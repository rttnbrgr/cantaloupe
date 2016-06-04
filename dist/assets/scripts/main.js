// this runs at page load
(function() {
  centerLine();
})();

/*
 * Open & Close the mobile nav
 */
var body = document.getElementsByTagName('body')[0];

var mobileNavToggle = document.getElementById('js-mobileNavToggle');
mobileNavToggle.addEventListener('click', function() {
  body.classList.toggle('mobile-nav');
  console.log('mobileNavToggle just ran again');
});

// this is for the button that will get removed eventually
var navOpenBtn = document.getElementById('js-menuOpen');
navOpenBtn.addEventListener('click', function() {
  body.classList.toggle('mobile-nav');
  console.log('button nav toggle');
})














// const header2 = document.getElementById('js-header-2');
// const window = document.getElementsByTagName(window);
// const formButton = document.getElementById('js-formButton');
// const formToggleButtons = document.getElementsByClassName('js-formToggle')[0];
const form = document.getElementById('js-form');
// formButton.addEventListener('click', () => console.log('click') );
// formButton.addEventListener('click', () => form.style.display = 'block' );
// formToggleButtons.addEventListener('click', () => form.classList.toggle('form-visible') );
const formOpenBtn = document.getElementById('js-formOpen');
const formCloseBtn = document.getElementById('js-formClose');

formOpenBtn.addEventListener('click', function() {
  form.classList.toggle('form-visible');
  console.log('form open');
});
formCloseBtn.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('form close');
  form.classList.toggle('form-visible');
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('form submit!');
});

// add escape key to end form
/*
document.keyup(function(e) {
  let formOpen = form.classList.contains('form-visible');
  if (e.keyCode == 27 && formOpen) { // escape key maps to keycode `27`
    // <DO YOUR WORK HERE>
    console.log('close-the-form');
  }
});
*/






/*
HIGHLIGHTER FUNCTION
*/

const header = document.getElementById('js-header');

window.onscroll = function() {
  let highLighted = header.classList.contains('highlighted');
  let scrollBreak = 40;
  let scrollTop = window.scrollY;
  // console.log('SCROLLED +' + window.scrollY );
  // console.log(scrolled);
  // console.log(scrollTop);

  if (scrollTop > scrollBreak) {
    if (!highLighted) {
      console.log('do something');
      header.classList.toggle('highlighted');
    }
  } else if (highLighted) {
    console.log('highlighted, do something');
    header.classList.toggle('highlighted');
  }
};

/** toggle center line */
function centerLine() {
  document.getElementsByClassName('center-line')[0].classList.toggle('hide');
}

// toggle mobile nav
// function toggleMobileNav() {
//   body.classList.toggle('mobile-nav-hidden');
//   console.log('mobile-nav ran');
// }

// function headerDebug() {
//   header.classList.toggle('debug');
// }
