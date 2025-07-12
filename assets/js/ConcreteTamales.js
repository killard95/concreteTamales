function openMenuBurger() {
    let nav = document.querySelector("nav");
    let buttonMenuBurger = document.querySelector(".menu-burger");
    let xmarkMenuBurger = document.querySelector(".xmark-menu");
        nav.style.display = "flex";
        buttonMenuBurger.style.display = "none";
        xmarkMenuBurger.style.display = "block";
    } 


function closeMenuBurger() {
    let nav = document.querySelector("nav");
    let buttonMenuBurger = document.querySelector(".menu-burger");
    let xmarkMenuBurger = document.querySelector(".xmark-menu");

    nav.style.display = "none";
    buttonMenuBurger.style.display = "block";
    xmarkMenuBurger.style.display = "none";
}



setInterval(()=> {     
     if (window.matchMedia("(max-width: 768px)").matches) {
      console.log("mobile");
    } else {
      console.log("desktop");
    }}, 500);
