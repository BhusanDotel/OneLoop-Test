const aboutText = document.querySelector(".about-us-container");
const aboutMenu = document.querySelector(".about-drop-menu");

aboutText.addEventListener("mouseenter", () => {
  aboutMenu.classList.add("show-about-drop-menu");
});

aboutText.addEventListener("mouseleave", () => {
  setTimeout(() => {
    //checks if its hover abouve aboutmenu, if not then only remove class
    if (!aboutMenu.matches(":hover")) {
      aboutMenu.classList.remove("show-about-drop-menu");
    }
  }, 200);
});

aboutMenu.addEventListener("mouseenter", () => {
  aboutMenu.classList.add("show-about-drop-menu");
});

aboutMenu.addEventListener("mouseleave", () => {
  aboutMenu.classList.remove("show-about-drop-menu");
});
