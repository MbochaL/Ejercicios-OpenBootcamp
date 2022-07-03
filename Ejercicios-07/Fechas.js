
const hoy = new Date();
console.log(hoy);

const miNacimiento = new Date(2001, 3, 27);
console.log(miNacimiento);

const comparacion = hoy.getTime() > miNacimiento.getTime();
console.log(comparacion);

const miNacimientoDia = miNacimiento.getDate();
const miNacimientoMes= miNacimiento.getMonth();
const miNacimientoAnio = miNacimiento.getFullYear();


