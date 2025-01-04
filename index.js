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

// Mail Js
(function () {
  emailjs.init({
    publicKey: "fjg9VtiaKcqjYE8JS",
  });
})();

// Function to send the email
function sendEmail(event) {
  event.preventDefault(); // Prevent form submission from refreshing the page

  const successAlert = document.getElementById("alert-success");
  const errorAlert = document.getElementById("alert-error");
  successAlert.style.display = "none";
  errorAlert.style.display = "none";
  // Send email using EmailJS
  emailjs.sendForm("service_k214olo", "template_9zot8b7", event.target).then(
    function (response) {
      successAlert.style.display = "block";
      setTimeout(() => {
        successAlert.style.display = "none";
      }, 3000);
      // reset input
      document.getElementById("contact-form").reset();
    },
    function (error) {
      errorAlert.style.display = "block";
      setTimeout(() => {
        errorAlert.style.display = "none";
      }, 3000);
    }
  );
}
