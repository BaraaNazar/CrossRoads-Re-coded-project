const nav = document.getElementById("nav");
const header = document.getElementById("header");

const logoBlack = document.getElementById("logo-black");

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
      logoBlack.src = "./img/logo-black.png";
    } else {
      console.log("intersecting");
      nav.classList.remove("nav-scrolled");
      logoBlack.src = "./img/img5.png";
    }
  });
},
headerOptions);

headerObserver.observe(header);
