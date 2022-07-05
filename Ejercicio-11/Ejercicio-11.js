class Estudiante {
    nombre;
    asignaturas = ["JavaScript", "HTML", "CSS"];

    constructor(nombre) {
        this.nombre = nombre;
    }

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        };
    } 
}

const newEstudiante = new Estudiante("Martin", "JavaScript");
console.log(newEstudiante.obtenDatos())