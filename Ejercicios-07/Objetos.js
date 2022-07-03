
const myInfo = {
    nombre: "Martin",
    apellido: "Bosch",
    edad: 21,
    altura: 1.84,
    eresDesarrollador: true, 
}

const age = "edad";
console.log(myInfo[age]);

const meAndMyFriends = [{
    nombre: "Martin",
    apellido: "Bosch",
    edad: 21,
    altura: 1.84,
    eresDesarrollador: true, 
}, {
    nombre: "Tobias",
    apellido: "Gonzales",
    edad: 28,
    altura: 1.64,
    eresDesarrollador: false, 
}, {
    nombre: "Marco",
    apellido: "Rodriguez",
    edad: 25,
    altura: 1.81,
    eresDesarrollador: false, 
}];

meAndMyFriends.sort((a, b) => b.edad - a.edad);
console.log(meAndMyFriends);