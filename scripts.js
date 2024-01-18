// HIGHLIGHT NAVBAR OPTION
var links = document.querySelectorAll("#navbar a");

function highlightLink() {
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }

  this.classList.add("active");
}

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", highlightLink);
}

// SMOOTH SCROLL ON ANCHOR LINK CLICK
$(document).ready(function () {
  $("a[href^='#']").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      var scrollSpeed = 300;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        scrollSpeed,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// BUTTON CLICK EVENT FOR SMOOTH SCROLL TO PROJECTS SECTION
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("pill-button");
  var navlink = document.querySelector(".nav-list a[href='#projects']");

  button.addEventListener("click", function () {
    var links = document.querySelectorAll(".nav-list a");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }

    navlink.classList.add("active");

    var projectsSection = document.getElementById("projects");
    var scrollSpeed = 300;
    projectsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });
});

// NAVBAR HEIGHT CALCULATION AND ADJUSTMENT
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 768) {
    const navbarHeight = document.querySelector(".nav").offsetHeight;
    const totalPadding = navbarHeight + 50;

    document.getElementById("projects").style.paddingTop = `${totalPadding}px`;

    window.addEventListener("resize", function () {
      const navbarHeight = document.querySelector(".nav").offsetHeight;
      const totalPadding = navbarHeight + 50;

      document.getElementById(
        "projects"
      ).style.paddingTop = `${totalPadding}px`;
    });
  }
});
