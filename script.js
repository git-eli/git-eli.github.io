const navSlide = () => {
  var body = document.getElementsByTagName("body")[0];
  var header = document.querySelector(".header");
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  var elements = document.querySelectorAll(".nav-links li");

  isOpen = false;

  burger.addEventListener("click", () => {
    // Toggle Links

    nav.classList.toggle("nav-active");
    body.classList.toggle("body-active");

    elements.forEach((el) => (el.style.display = "flex"));

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");

    if (isOpen === false) {
      isOpen = true;
    } else {
      elements.forEach((el) => (el.style.display = "none"));

      isOpen = false;
    }

    if (isOpen == true) {
      body.classList.add("overflow_hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
};

navSlide();

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
  fullImg.src = "images/" + pic + "a.jpg";
  fullImgBox.style.display = "flex";
}

function closeFullImg() {
  fullImgBox.style.display = "none";
}
