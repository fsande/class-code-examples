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
exports.__esModule = true;
var data = require("./country-by-abbreviation.json");
var main = function () {
    console.log(typeof (data));
    console.log(data);
    // for (let i = 0; i < data.length; ++i) {
    //   console.log(data[i].country, data[i].abbreviation);
    // }
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var datum = data_1[_i];
        console.log(datum.country, datum.abbreviation);
    }
};
main();
