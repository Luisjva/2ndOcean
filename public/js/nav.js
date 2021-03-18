const desplegable = document.querySelector(".header__desplegable");

const barra1 = document.querySelector(".header__barra-1");
const barra2 = document.querySelector(".header__barra-2");
const barra3 = document.querySelector(".header__barra-3");

const nav = document.querySelector(".header__ul");
const paginas = document.querySelector(".header__pag--none")

desplegable.addEventListener("click", () => {
  barra1.classList.toggle("header__barra-1--x");
  barra2.classList.toggle("header__barra-2--x");
  barra3.classList.toggle("header__barra-3--x");
  paginas.classList.toggle("header__pag")
})

paginas.addEventListener("click", () => {
  barra1.classList.toggle("header__barra-1--x");
  barra2.classList.toggle("header__barra-2--x");
  barra3.classList.toggle("header__barra-3--x");
  paginas.classList.toggle("header__pag")
})