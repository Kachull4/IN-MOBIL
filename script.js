const swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-menu__list");
const navLink = document.querySelectorAll(".main-menu__link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.re;
  move("active");
}

function initMap() {
  const uluru = { lat: 50.420958399055635, lng: 14.914563641116834 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: uluru,
    mapId: "2ca1299a8fe01ef8",
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
var menuLinks = document.querySelectorAll(".main-menu__link");
menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", function (event) {
    event.preventDefault();
    var linkHref = menuLink.getAttribute("href");
    document.querySelector(linkHref).scrollIntoView({ behavior: "smooth" });
  });
});