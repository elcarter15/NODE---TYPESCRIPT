"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importar las definiciones de tipos desde el archivo de interfaces
const interfaces_1 = require("./interfaces");
// Clase principal para gestionar el catálogo de películas
// Creo esta clase para organizar mejor las funcionalidades relacionadas con películas
class CatalogoPeliculas {
    // Constructor que inicializa el arreglo de películas
    constructor() {
        this.peliculas = [];
    }
    // Método para agregar una nueva película al catálogo
    // Implemento validación básica para asegurar que los datos sean correctos
    agregarPelicula(pelicula) {
        if (pelicula.titulo.trim() === '') {
            console.log('Error: El título no puede estar vacío');
            return;
        }
        if (pelicula.anio < 1888) { // Año de la primera película
            console.log('Error: Año no válido');
            return;
        }
        this.peliculas.push(pelicula);
        console.log(`Película "${pelicula.titulo}" agregada correctamente`);
    }
    // Método para mostrar todas las películas del catálogo
    // Organizo la información en formato tabla para mejor legibilidad
    mostrarPeliculas() {
        console.log('\n=== CATÁLOGO DE PELÍCULAS ===');
        if (this.peliculas.length === 0) {
            console.log('No hay películas en el catálogo.');
            return;
        }
        // Mostrar cada película con formato legible
        this.peliculas.forEach((pelicula, index) => {
            console.log(`\n--- Película ${index + 1} ---`);
            console.log(`Título: ${pelicula.titulo}`);
            console.log(`Género: ${pelicula.genero}`);
            console.log(`País: ${pelicula.pais}`);
            console.log(`Año: ${pelicula.anio}`);
            console.log(`Director: ${pelicula.director}`);
        });
    }
    // Método para mostrar todos los géneros disponibles
    // Recorro la enumeración para mostrar todas las opciones
    mostrarGeneros() {
        console.log('\n=== GÉNEROS DE PELÍCULAS DISPONIBLES ===');
        // Object.values me permite obtener todos los valores de la enumeración
        Object.values(interfaces_1.GeneroPelicula).forEach(genero => {
            console.log(`• ${genero}`);
        });
    }
    // Método para mostrar todos los países disponibles
    // Uso el mismo enfoque que para los géneros
    mostrarPaises() {
        console.log('\n=== PAÍSES DE PELÍCULAS DISPONIBLES ===');
        Object.values(interfaces_1.PaisPelicula).forEach(pais => {
            console.log(`• ${pais}`);
        });
    }
    // Método para buscar películas por género
    // Filtro el arreglo según el género especificado
    buscarPorGenero(genero) {
        return this.peliculas.filter(pelicula => pelicula.genero === genero);
    }
    // Método para buscar películas por país
    // Aplico filtro similar al método anterior pero por país
    buscarPorPais(pais) {
        return this.peliculas.filter(pelicula => pelicula.pais === pais);
    }
    // Método adicional: contar películas por género
    // Implemento este método para mostrar estadísticas del catálogo
    contarPorGenero() {
        console.log('\n=== ESTADÍSTICAS POR GÉNERO ===');
        const conteo = {};
        // Contar películas por cada género
        this.peliculas.forEach(pelicula => {
            const genero = pelicula.genero;
            conteo[genero] = (conteo[genero] || 0) + 1;
        });
        // Mostrar resultados
        Object.entries(conteo).forEach(([genero, cantidad]) => {
            console.log(`${genero}: ${cantidad} película${cantidad !== 1 ? 's' : ''}`);
        });
    }
}
// Función principal que ejecuta la demostración
// Creo esta función para mostrar el funcionamiento completo del sistema
function demostrarSistemaPeliculas() {
    console.log('🎬 SISTEMA DE GESTIÓN DE PELÍCULAS 🎬');
    // Crear instancia del catálogo
    const catalogo = new CatalogoPeliculas();
    // Mostrar géneros y países disponibles
    catalogo.mostrarGeneros();
    catalogo.mostrarPaises();
    // Agregar películas de ejemplo al catálogo
    // Selecciono películas conocidas para hacer la demostración más comprensible
    console.log('\n=== AGREGANDO PELÍCULAS DE EJEMPLO ===');
    catalogo.agregarPelicula({
        titulo: "El Padrino",
        genero: interfaces_1.GeneroPelicula.DRAMA,
        pais: interfaces_1.PaisPelicula.ESTADOS_UNIDOS,
        anio: 1972,
        director: "Francis Ford Coppola"
    });
    catalogo.agregarPelicula({
        titulo: "Parásitos",
        genero: interfaces_1.GeneroPelicula.DRAMA,
        pais: interfaces_1.PaisPelicula.COREA_DEL_SUR,
        anio: 2019,
        director: "Bong Joon-ho"
    });
    catalogo.agregarPelicula({
        titulo: "Amélie",
        genero: interfaces_1.GeneroPelicula.ROMANCE,
        pais: interfaces_1.PaisPelicula.FRANCIA,
        anio: 2001,
        director: "Jean-Pierre Jeunet"
    });
    catalogo.agregarPelicula({
        titulo: "El Laberinto del Fauno",
        genero: interfaces_1.GeneroPelicula.FANTASIA,
        pais: interfaces_1.PaisPelicula.MEXICO,
        anio: 2006,
        director: "Guillermo del Toro"
    });
    catalogo.agregarPelicula({
        titulo: "El Señor de los Anillos: La Comunidad del Anillo",
        genero: interfaces_1.GeneroPelicula.FANTASIA,
        pais: interfaces_1.PaisPelicula.ESTADOS_UNIDOS,
        anio: 2001,
        director: "Peter Jackson"
    });
    catalogo.agregarPelicula({
        titulo: "Jurassic Park",
        genero: interfaces_1.GeneroPelicula.CIENCIA_FICCION,
        pais: interfaces_1.PaisPelicula.ESTADOS_UNIDOS,
        anio: 1993,
        director: "Steven Spielberg"
    });
    // Mostrar todas las películas del catálogo
    catalogo.mostrarPeliculas();
    // Mostrar estadísticas por género
    catalogo.contarPorGenero();
    // Demostrar búsquedas por género y país
    console.log('\n=== BÚSQUEDAS ESPECÍFICAS ===');
    // Buscar películas de drama
    const peliculasDrama = catalogo.buscarPorGenero(interfaces_1.GeneroPelicula.DRAMA);
    console.log(`\nPelículas de Drama: ${peliculasDrama.length} encontradas`);
    peliculasDrama.forEach(peli => console.log(`- ${peli.titulo} (${peli.anio})`));
    // Buscar películas de fantasía
    const peliculasFantasia = catalogo.buscarPorGenero(interfaces_1.GeneroPelicula.FANTASIA);
    console.log(`\nPelículas de Fantasía: ${peliculasFantasia.length} encontradas`);
    peliculasFantasia.forEach(peli => console.log(`- ${peli.titulo} (${peli.anio})`));
    // Buscar películas de Corea del Sur
    const peliculasCorea = catalogo.buscarPorPais(interfaces_1.PaisPelicula.COREA_DEL_SUR);
    console.log(`\nPelículas de Corea del Sur: ${peliculasCorea.length} encontradas`);
    peliculasCorea.forEach(peli => console.log(`- ${peli.titulo} (${peli.anio})`));
    // Buscar películas de México
    const peliculasMexico = catalogo.buscarPorPais(interfaces_1.PaisPelicula.MEXICO);
    console.log(`\nPelículas de México: ${peliculasMexico.length} encontradas`);
    peliculasMexico.forEach(peli => console.log(`- ${peli.titulo} (${peli.anio})`));
}
// Ejecutar la demostración
demostrarSistemaPeliculas();
