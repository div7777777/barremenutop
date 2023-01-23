
const myBurger = document.querySelector(".burger");
const openBurger = document.querySelector(".openburger");
const closeBurger = document.querySelector(".closeburger");
const myAccueil = document.querySelector(".accueil");
const myServices = document.querySelector(".services");
const myContacte = document.querySelector(".contacte");

openBurger.addEventListener("click", ()=>{
myBurger.style.transform = "translateX(370px)";
myBurger.style.transition = "0.9s";
});
closeBurger.addEventListener("click", ()=>{
myBurger.style.transform = "translateX(-400px)";
myBurger.style.transition = "0.9s";
});
myAccueil.addEventListener("click", ()=>{
window.scroll({
    top: 0,
    behavior:"smooth"
})});


myServices.addEventListener("click", ()=>{
    window.scroll({
        top: 1000,
        behavior:"smooth"
    })
});
myContacte.addEventListener("click", ()=>{
    window.scroll({
        top: 2000,
        behavior:"smooth"
    })
});