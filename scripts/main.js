document.addEventListener("DOMContentLoaded", () => {
  toggleMenu();
});

const toggleMenu = () => {
  const hamburgerButton = document.getElementById("hamburger-button");
  const sidebarElement = document.getElementById("sidebar");
  const closeButton = document.getElementById("close-button");

  let isActive;

  const handleHamburgerButtonClick = () => {
    isActive = sidebarElement.classList.contains("active");
    if (!isActive) {
      sidebarElement.classList.add("active");
      sidebarElement.setAttribute("aria-hidden", false);
      hamburgerButton.setAttribute("aria-expanded", true);
    }
  };

  const handleCloseButtonClick = () => {
    isActive = sidebarElement.classList.contains("active");
    if (isActive) {
      sidebarElement.classList.remove("active");
      sidebarElement.setAttribute("aria-hidden", true);
      hamburgerButton.setAttribute("aria-expanded", false);
    }
  };

  hamburgerButton.addEventListener("click", handleHamburgerButtonClick);
  closeButton.addEventListener("click", handleCloseButtonClick);
};
