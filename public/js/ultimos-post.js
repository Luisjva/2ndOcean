const ultimoPost = document.querySelector(".ultimos-posts__posts");
const otrosPost = document.querySelector(".otros-post__post");
let iteraciones;

let niño = document.querySelector("#ultimo")

let child = document.getElementById("primero")

const post = [
  {
    id: "post1.jpg",
    Titulo: "We can't live forever",
    textoCorto: "Creo tener la elección de irme cuando quiera, pero me quedo contigo ...",
    autor: "Arnaldo Prieto",
    link: "/post/We-cant-live-forever"
  },
  {
    id: "post2.jpg",
    Titulo: "Bajo la ducha",
    textoCorto: "Eres todo lo que deseas, así que atraes a quienes desean a alguien como tú ...",
    autor: "Chessire",
    link: "/post/bajo-la-ducha"
  },
  {
    id: "post3.jpg",
    Titulo: "Amor fugaz",
    textoCorto: "Que tonto es el ser humano que deja ir lo que se quiere para siempre ...",
    autor: "Arnaldo Prieto",
    link: "/post/amor-fugaz"
  },
  {
    id: "post4.jpg",
    Titulo: "Sácame de la incertidumbre.",
    textoCorto: "Ojalá me hubieses dicho que yo no te complacía, ojalá no me hubieses dicho tantas cosas bonitas",
    autor: "Chessire",
    link: "/post/sacame-de-la-incertidumbre"
  },
  {
    id: "post5.jpg",
    Titulo: "Corto pero eterno",
    textoCorto: "Querida mia, antes de renacer, bailemos al son de las 5 sinfonías ...",
    autor: "Arnaldo prieto",
    link: "/post/corto-pero-eterno"
  },
  {
    id: "post6.jpg",
    Titulo: "No te enamores de las personas",
    textoCorto: "Enamórate del dolor y el dolor te dará las satisfacciones más grandes de tu vida.",
    autor: "Chessire",
    link: "/post/no-te-enamores-de-las-personas"
  },
  {
    id: "post7.jpg",
    Titulo: "Si tu boca fuera fuego",
    textoCorto: "Que si tu boca fuera fuego, ardería por el resto de mis días.",
    autor: "Arnaldo prieto",
    link: "/post/Si-tu-boca-fuera-fuego"
  }
];

const ancho = window.outerWidth;
let postCont = 0;
/*    Ultimos Post    */
if (ancho < 500) {
  for (let i = 0; i < 2; i++) {
    divPostCorto(i)
    postCont++
  }
}else if (ancho > 499 && ancho < 1000) {
  for (let i = 0; i < 3; i++) {
    divPostCorto(i)
    postCont++
  }
}else {
  for (let i = 0; i < 5; i++) {
    divPostCorto(i)
    postCont++
  }  
}


/*    Otros Post    */
  for (postCont; postCont <= post.length; postCont++) {
    console.log(`aqui paso ${postCont}`)
    divPostLargo(postCont)
  }





function divPostCorto(i) {
  /* Creando div img */
  let img = document.createElement("div");
  img.classList.add("post__img");
  img.setAttribute("style", `background: url(../../public/img/${post[i].id}); background-size: cover;`)

  /* Creando el titulo */
  let titulo = document.createElement("h3");
  let tituloText = document.createTextNode(post[i].Titulo);
  titulo.appendChild(tituloText);
  titulo.classList.add("post__titulo");

  /* Creando el texto */
  let texto = document.createElement("p");
  let textoText = document.createTextNode(post[i].textoCorto);
  texto.appendChild(textoText);
  texto.classList.add("post__texto")

  /* Creando el autor */
  let autor = document.createElement("u");
  let autorText = document.createTextNode(post[i].autor);
  autor.appendChild(autorText);
  autor.classList.add("post__autor");

  /* Creando boton */
  let btn = document.createElement("button");
  let btnText = document.createTextNode("Ver mas");
  btn.appendChild(btnText);
  btn.classList.add("post__boton");
  btn.setAttribute("onclick", `window.open("${post[i].link}")`)
  


  /* Creando el contenedor */
  let postBasico = document.createElement("div");
  postBasico.classList.add("post-basico");
  
  /* Agg elementos a el contenedor*/
  postBasico.appendChild(img);
  postBasico.appendChild(titulo);
  postBasico.appendChild(autor);
  postBasico.appendChild(texto);
  postBasico.appendChild(btn);

  ultimoPost.insertBefore(postBasico, child)
}

function divPostLargo(i) {
  /* Creando div img */
  let img = document.createElement("div");
  img.classList.add("post__img");
  img.setAttribute("style", `background: url(../../public/img/${post[i].id}); background-size: cover;`)

  /* Creando el titulo */
  let titulo = document.createElement("h3");
  let tituloText = document.createTextNode(post[i].Titulo);
  titulo.appendChild(tituloText);
  titulo.classList.add("post__titulo");

  /* Creando el texto */
  let texto = document.createElement("p");
  let textoText = document.createTextNode(post[i].textoCorto);
  texto.appendChild(textoText);
  texto.classList.add("post__texto")

  /* Creando el autor */
  let autor = document.createElement("u");
  let autorText = document.createTextNode(post[i].autor);
  autor.appendChild(autorText);
  autor.classList.add("post__autor");

  /* Creando boton */
  let btn = document.createElement("button");
  let btnText = document.createTextNode("Ver mas");
  btn.appendChild(btnText);
  btn.classList.add("post__boton");
  btn.setAttribute("onclick", `window.open("${post[i].link}")`)
  


  /* Creando el contenedor */
  let postBasico = document.createElement("div");
  postBasico.classList.add("post-largo");
  
  /* Agg elementos a el contenedor*/
  postBasico.appendChild(img);
  postBasico.appendChild(titulo);
  postBasico.appendChild(autor);
  postBasico.appendChild(texto);
  postBasico.appendChild(btn);

  otrosPost.insertBefore(postBasico, niño)
}

const link = (enlace)=> {
  window.open(enlace)
}