const imagenPelicula = document.querySelector("#imagen-pelicula");
const imagenPeliculaRed = document.querySelector ("#imagen-pelicula-red");
const cuerpoPagina = document.querySelector ("body");
const tituloPelicula = document.querySelector ("#pelicula-red");
const linkPagina = document.querySelector ("#link-pagina");

tituloPelicula.style.color= "red";
cuerpoPagina.style.color = "yellow";
tituloPelicula.innerHTML = "Pelicula Red";
linkPagina.innerHTML = "link pagina";
linkPagina.href = "https://www.mercadolibre.com.ar/";
imagenPelicula.src = "https://th.bing.com/th/id/R.18148ae80b9e77b747e8c5c888da6106?rik=fyKrlqMOn%2bJQBg&pid=ImgRaw&r=0";
cuerpoPagina.style.backgroundColor = "grey";