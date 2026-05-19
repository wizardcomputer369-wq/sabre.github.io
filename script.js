
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

// Cookie banner
function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  document.getElementById("cookie-banner").style.display = "none";
}

window.onload = function() {
  if (localStorage.getItem("cookiesAccepted") === "true") {
    document.getElementById("cookie-banner").style.display = "none";
  }
};
