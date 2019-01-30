let mainNav = document.getElementById('js--menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

// navBarToggle.addEventListener('click', () => {
//   mainNav.classList.toggle('active');
// });


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
