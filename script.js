
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}



window.onload = function() {
  if (localStorage.getItem("cookiesAccepted") === "true") {
    document.getElementById("cookie-banner").style.display = "none";
  }
};
