        /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }

        /* Function to display the overlay */
        function on() {
            document.getElementById("overlay").style.display = "block";
        }

        /* Function to hide the overlay */
        function off() {
            document.getElementById("overlay").style.display = "none";
        }

        function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

function openOverlay() {
    document.getElementById("myOverlay").style.display = "block";
  }

  function closeOverlay() {
    const overlay = document.getElementById("myOverlay");
    overlay.classList.add("slide-up");
    setTimeout(() => {
      overlay.style.display = "none";
      overlay.classList.remove("slide-up");
    }, 500); // Match the duration of the slide-up animation
  }

var slideIndex = 1;
showDivs(slideIndex);
setInterval(function() { plusDivs(1); }, 5000); // Change slide every 5 seconds

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function toggleMode() {
  const isChecked = document.getElementById('themeToggle').checked;
  const body = document.body;

  if (isChecked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}