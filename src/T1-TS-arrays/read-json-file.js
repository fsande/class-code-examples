"use strict";
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 19, 2023
 * @description Read a JSON object from file
 */
Object.defineProperty(exports, "__esModule", { value: true });
const data = require("./country-by-abbreviation.json");
const main = function () {
    console.log(typeof (data));
    console.log(data);
    for (const datum of data) {
        console.log(datum.country, datum.abbreviation);
    }
};
main();
