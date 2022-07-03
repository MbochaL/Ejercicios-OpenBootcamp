// Funcion que devuelve siempre un boolean true
function verdadero() {
        return true;
}


// Funcion asincrona
function async() {
    setTimeout(() => {
        console.log('Hola soy una promesa');
    }, 5000);
}   
console.log(async());


// Funcion Generadora
function* generarIndices() {
    let index = 0;
    while (true) {
        index++;
        yield index;
        if (index === 10) {
            return;
        }
    }
}

function* generarIndicesPares() {
    let index = 0;
    while (true) {
        index += 2;
        yield index;
        if (index === 1000) {
            return;
        }
    }
}

const gen = generarIndicesPares();



