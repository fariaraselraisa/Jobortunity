document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".mobile-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".mobile-menu .close-btn");
  const body = document.body;

  if (mobileToggle) {
    mobileToggle.addEventListener("click", function () {
      mobileMenu.classList.add("active");
      body.style.overflow = "hidden";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      body.style.overflow = "";
    });
  }

  if (mobileMenu) {
    mobileMenu.addEventListener("click", function (e) {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove("active");
        body.style.overflow = "";
      }
    });
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      mobileMenu.classList.remove("active");
      body.style.overflow = "";
    }
  });
});
