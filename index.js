const cerrar = document.querySelector(".close");
const abrir = document.querySelector(".primary__btn");
const modal = document.querySelector(".modal");
const modalC = document.querySelector(".container__modal");

const inicio = document.querySelector(".navbar__button")

abrir.addEventListener("click", function(e){
    e.preventDefault(),
    modalC.style.opacity = "1"
    modalC.style.visibility = "visible"
    modal.classList.toggle("modal__close");
});

cerrar.addEventListener("click", function(e){
    modal.classList.toggle("modal__close");
    setTimeout(function(){
        modalC.style.opacity = "0"
        modalC.style.visibility = "hidden"
    }, 1000)
})


window.addEventListener("click", function(e){
//console.log(e.target)
if(e.target === modalC){
    modal.classList.toggle("modal__close");
    setTimeout(function(){
        modalC.style.opacity = "0"
        modalC.style.visibility = "hidden"
    }, 800)
}
})  



inicio.addEventListener("click", function(){
  alert("Este es mi primer sitio web. Estoy trabajando y aprendiendo con el")
})

