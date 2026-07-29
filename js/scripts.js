window.addEventListener("DOMContentLoaded", () => {
  const mobileNav = document.querySelector(".mobile-nav");

  document.querySelectorAll(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileNav) mobileNav.removeAttribute("open");
    });
  });
});
