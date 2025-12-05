// Enumeración para los géneros de películas
// Defino estos géneros porque son los más comunes en el cine
enum GeneroPelicula {
    ACCION = "Acción",
    COMEDIA = "Comedia", 
    DRAMA = "Drama",
    TERROR = "Terror",
    CIENCIA_FICCION = "Ciencia Ficción",
    ROMANCE = "Romance",
    AVENTURA = "Aventura",
    ANIMACION = "Animación",
    FANTASIA = "Fantasía", // Género agregado para corregir el error
    SUSPENSO = "Suspenso"
}

// Enumeración para países productores de cine
// Incluyo estos países por su relevancia en la industria cinematográfica
enum PaisPelicula {
    ESTADOS_UNIDOS = "Estados Unidos",
    MEXICO = "México",
    ESPANA = "España",
    ARGENTINA = "Argentina",
    FRANCIA = "Francia", 
    ITALIA = "Italia",
    REINO_UNIDO = "Reino Unido",
    JAPON = "Japón",
    COREA_DEL_SUR = "Corea del Sur",
    INDIA = "India"
}

// Interfaz para representar una película
// Defino esta estructura porque contiene los datos esenciales de cualquier película
interface Pelicula {
    titulo: string;
    genero: GeneroPelicula;
    pais: PaisPelicula;
    anio: number;
    director: string;
}

// Exportar las enumeraciones e interfaz para usarlas en otros archivos
export { GeneroPelicula, PaisPelicula, Pelicula };