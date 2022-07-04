import * as operaciones from "./controller.js";
import chalk from 'chalk';

const log = chalk.bold.green;

const sum = operaciones.suma(1, 2);
const sum2 = operaciones.suma(4, 5);

const mult = operaciones.multiplica(sum, sum2);

console.log(log(mult));



