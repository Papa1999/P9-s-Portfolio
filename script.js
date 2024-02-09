// Creéation de la fonctionnalité toogle 
const toogleBtn= document.querySelector(".toogle-btn");
const toogleMenu= document.querySelector(".toogle-menu");
const links= document.querySelectorAll(".toogle-menu a")

toogleBtn.addEventListener("click", () => {
    toogleMenu.classList.toggle("open"); 
})

for(let i=0; i<=links.length; i++){
    const link= links[i]; 
    link.addEventListener("click", () => {
        toogleMenu.classList.remove("open");
    })
}