
const lista_Compras = ["Leche", "carne", " Huevos", "Pan", "Cereal"];

lista_Compras.push("Aceite de girasol");
console.log(lista_Compras);

lista_Compras.pop("Aceite de girasol");
console.log(lista_Compras);

const Peliculas = [
    {titulo: "Interestelar", director: "Christopher Nolan" , fecha: 2014},
    {titulo: "La sociedad de los poetas muertos", director: "Peter Weir" , fecha: 1989},
    {titulo: "La belleza inesperada", director: "David Frankel" , fecha: 2016}
]


const peliculas_2010 = Peliculas.filter(pelicula => pelicula.fecha < 2010);
console.log(peliculas_2010);


const peliculas_titulo = Peliculas.map(pelicula => pelicula.director);
console.log(peliculas_titulo);



const directores = ["Christopher Nolan", "Peter Weir", "David Frankel"];
const titulos = ["Interestelar", "La sociedad de los poetas muertos", "La belleza inesperada"];

const peliculas = directores.concat(titulos);
console.log(peliculas);

// factor de propagacion
const peliculas2 = [...directores, ...titulos];
console.log(peliculas2);

