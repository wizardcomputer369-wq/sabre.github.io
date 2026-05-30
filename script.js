// ✅ Smooth scroll to Contact
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

// ✅ Run everything AFTER page loads
window.onload = function () {

  // ✅ Cookie banner check
  const banner = document.getElementById("cookie-banner");
  if (banner && localStorage.getItem("cookiesAccepted") === "true") {
    banner.style.display = "none";
  }

  // ✅ ================= LIGHTBOX WITH NEXT / PREV =================
  const galleryImages = document.querySelectorAll(".gallery img");

  let currentIndex = 0;

  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      openLightbox();
    });
  });

  function openLightbox() {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.9)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "9999";

    const bigImg = document.createElement("img");
    bigImg.src = galleryImages[currentIndex].src;
    bigImg.style.maxWidth = "90%";
    bigImg.style.maxHeight = "90%";
    bigImg.style.borderRadius = "10px";
    bigImg.style.boxShadow = "0 0 30px rgba(0,0,0,0.6)";

    // ✅ NEXT button
    const next = document.createElement("button");
    next.innerHTML = "&#10095;";
    styleButton(next, "right");

    next.onclick = (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % galleryImages.length;
      bigImg.src = galleryImages[currentIndex].src;
    };

    // ✅ PREV button
    const prev = document.createElement("button");
    prev.innerHTML = "&#10094;";
    styleButton(prev, "left");

    prev.onclick = (e) => {
      e.stopPropagation();
      currentIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      bigImg.src = galleryImages[currentIndex].src;
    };

    overlay.appendChild(bigImg);
    overlay.appendChild(next);
    overlay.appendChild(prev);

    // ✅ click outside to close
    overlay.addEventListener("click", () => {
      overlay.remove();
    });

    document.body.appendChild(overlay);
  }

  function styleButton(btn, side) {
    btn.style.position = "absolute";
    btn.style.top = "50%";
    btn.style.transform = "translateY(-50%)";
    btn.style[side] = "20px";
    btn.style.fontSize = "30px";
    btn.style.background = "rgba(255,255,255,0.2)";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.padding = "10px 15px";
    btn.style.cursor = "pointer";
    btn.style.borderRadius = "50%";
  }

  // ✅ Run scroll reveal once on load
  revealOnScroll();
};

// ✅ ================= SCROLL REVEAL =================
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
