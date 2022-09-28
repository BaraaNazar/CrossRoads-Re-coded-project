const nav = document.getElementById("nav");
const header = document.getElementById("header");

const logo = document.getElementById("logo");

const headerOptions = {
  rootMargin: "-700px 0px 0px 0px",
};

const headerObserver = new IntersectionObserver(function (
  entries,
  headerObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
      logo.src = "CrossRoad Logo Horizontal-Black-01.png";
    } else {
      nav.classList.remove("nav-scrolled");
      logo.src = "./img/img5.png";
    }
  });
},
headerOptions);

headerObserver.observe(header);
