const winston = require('winston');


const logger = winston.createLogger({
    
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error'}),
    ],
});

const ejercicio = val => {
    if (typeof val === "number"){
        return val * 2;
    } 
    throw new Error("Esto es un mensaje de ERROR personalizado");
}

const numero = 8;

try {
    const doble = ejercicio(numere);
    console.log(doble);
} catch(e) {
    logger.error(`El valor de e es: ${e}`);
}