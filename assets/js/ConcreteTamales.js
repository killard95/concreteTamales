
  document.addEventListener("DOMContentLoaded", () => {
  let nav = document.querySelector("nav");
  let buttonMenuBurger = document.querySelector(".menu-burger");
  let xmarkMenuBurger = document.querySelector(".xmark-menu");

  function updateDisplay() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      nav.style.display = "none";
      buttonMenuBurger.style.display = "block";
      xmarkMenuBurger.style.display = "none";
    } else {
      nav.style.display = "flex";
      buttonMenuBurger.style.display = "none";
      xmarkMenuBurger.style.display = "none";
    }
  }

  updateDisplay();

  window.addEventListener("resize", updateDisplay);

  buttonMenuBurger.addEventListener("click", () => {
    nav.style.display = "flex";
    buttonMenuBurger.style.display = "none";
    xmarkMenuBurger.style.display = "block";
  });

  xmarkMenuBurger.addEventListener("click", () => {
    nav.style.display = "none";
    buttonMenuBurger.style.display = "block";
    xmarkMenuBurger.style.display = "none";
  });
});


document.addEventListener("DOMContentLoaded", () => {
  let input = document.querySelector("#searchInput");
  let magnifyingGlasses = document.querySelector("#icone-loupe");

  input.addEventListener("input", () => {
    if (input.value.length !== 0) {
      magnifyingGlasses.style.display = "none";
    } else {
      magnifyingGlasses.style.display = "block";
    }
  });
});

    

