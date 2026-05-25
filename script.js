
// ✅ Smooth scroll to Contact (if used anywhere)
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

// ✅ Cookie banner check
window.onload = function () {
  const banner = document.getElementById("cookie-banner");
  if (banner && localStorage.getItem("cookiesAccepted") === "true") {
    banner.style.display = "none";
  }
};



// ✅ Image Lightbox (click → fullscreen)
const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
  img.addEventListener("click", () => {

    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.9)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "9999";
    overlay.style.cursor = "pointer";

    const bigImg = document.createElement("img");
    bigImg.src = img.src;
    bigImg.style.maxWidth = "90%";
    bigImg.style.maxHeight = "90%";
    bigImg.style.borderRadius = "10px";
    bigImg.style.boxShadow = "0 0 30px rgba(0,0,0,0.6)";

    overlay.appendChild(bigImg);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });

    document.body.appendChild(overlay);
  });
});



// ✅ Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Run once on load (important fix)
revealOnScroll();
