"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaisPelicula = exports.GeneroPelicula = void 0;
// Enumeración para los géneros de películas
// Defino estos géneros porque son los más comunes en el cine
var GeneroPelicula;
(function (GeneroPelicula) {
    GeneroPelicula["ACCION"] = "Acci\u00F3n";
    GeneroPelicula["COMEDIA"] = "Comedia";
    GeneroPelicula["DRAMA"] = "Drama";
    GeneroPelicula["TERROR"] = "Terror";
    GeneroPelicula["CIENCIA_FICCION"] = "Ciencia Ficci\u00F3n";
    GeneroPelicula["ROMANCE"] = "Romance";
    GeneroPelicula["AVENTURA"] = "Aventura";
    GeneroPelicula["ANIMACION"] = "Animaci\u00F3n";
    GeneroPelicula["FANTASIA"] = "Fantas\u00EDa";
    GeneroPelicula["SUSPENSO"] = "Suspenso";
})(GeneroPelicula || (GeneroPelicula = {}));
exports.GeneroPelicula = GeneroPelicula;
// Enumeración para países productores de cine
// Incluyo estos países por su relevancia en la industria cinematográfica
var PaisPelicula;
(function (PaisPelicula) {
    PaisPelicula["ESTADOS_UNIDOS"] = "Estados Unidos";
    PaisPelicula["MEXICO"] = "M\u00E9xico";
    PaisPelicula["ESPANA"] = "Espa\u00F1a";
    PaisPelicula["ARGENTINA"] = "Argentina";
    PaisPelicula["FRANCIA"] = "Francia";
    PaisPelicula["ITALIA"] = "Italia";
    PaisPelicula["REINO_UNIDO"] = "Reino Unido";
    PaisPelicula["JAPON"] = "Jap\u00F3n";
    PaisPelicula["COREA_DEL_SUR"] = "Corea del Sur";
    PaisPelicula["INDIA"] = "India";
})(PaisPelicula || (PaisPelicula = {}));
exports.PaisPelicula = PaisPelicula;
