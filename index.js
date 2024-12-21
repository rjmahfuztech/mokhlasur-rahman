function stickyNav() {
  let headerHeight = document.querySelector("#home").offsetHeight / 2;
  let navbar = document.querySelector("nav");
  let scrollValue = window.scrollY;

  if (scrollValue > headerHeight) {
    navbar.classList.add("header-sticky");
  } else {
    navbar.classList.remove("header-sticky");
  }
}

window.addEventListener("scroll", stickyNav);

// Footer copyright
document.getElementById("currentYear").textContent = new Date().getFullYear();
