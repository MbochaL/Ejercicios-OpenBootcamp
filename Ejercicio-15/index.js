let miNombre = "Martin";
let miApellido = "Bosch";

const persona = {
    nombre: miNombre,
    apellido: miApellido
}

// localStorage.setItem("persona", JSON.stringify(persona));

// sessionStorage.setItem("persona", JSON.stringify(persona));

document.cookie = "persona=" + JSON.stringify(persona);
// document.cookie = "persona=" + JSON.stringify(persona); + "expires=Thu" + new Date( 2022, 6, 6 ,15,07,00).toUTCString(); 
// El ejercicio lo empece 15:05.