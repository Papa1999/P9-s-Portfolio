// Creéation de la fonctionnalité toogle 
const toogleBtn= document.querySelector(".toogle-btn");
const toogleMenu= document.querySelector(".toogle-menu")

toogleBtn.addEventListener("click", () => {
    toogleMenu.classList.toggle("open"); 
})