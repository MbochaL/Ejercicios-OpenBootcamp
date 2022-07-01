// Cadena de texto de mi nombre y mi apellido

let myName = "Martin  ";
let myLastName = "Bosch   ";

// Concateno mi nombre con una de las formas de hacerlo que se vio.
let estudiante = myName.concat(" ", myLastName);
console.log(estudiante);

// Paso mi nombre y mi apellido a mayúsculas
let estudianteMayus = (estudiante).toUpperCase();
console.log(estudianteMayus);

// Paso mi nombre y mi apellido a minúsculas
let estudianteMinus = (estudiante).toLocaleLowerCase();
console.log(estudianteMinus);

// Cuento la cantidad de caracteres de mi nombre y mi apellido
let cantidadCaracteres = (estudiante).length;
console.log(cantidadCaracteres);

// Saco la primera letra del string
let primeraLetra = (myName).charAt(0);
console.log(primeraLetra);

// Saco la última letra del string
let ultimaLetra = (myLastName).charAt([4]);
console.log(ultimaLetra);

// Elimino los espacios al inicio y al final
let espacios = (estudiante).trim();
console.log(espacios.length);

// Compruebo si el nombre se encuentra en la variable estudiante
let nombreEncontrado = (estudiante).includes("Martin");
console.log(nombreEncontrado);



