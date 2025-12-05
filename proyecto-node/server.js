// Importar módulos necesarios de Node.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');

// Crear servidor HTTP
const server = http.createServer((request, response) => {
    // Obtener la URL solicitada
    const parsedUrl = url.parse(request.url);
    const pathname = parsedUrl.pathname;
    
    // Ruta principal - mostrar formulario
    if (pathname === '/' || pathname === '/index.html') {
        // Leer archivo HTML del formulario
        fs.readFile(path.join(__dirname, 'views', 'index.html'), (error, data) => {
            if (error) {
                response.writeHead(500);
                response.end('Error al cargar la página');
                return;
            }
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        });
    }
    
    // Ruta para procesar el animal favorito
    else if (pathname === '/procesar-animal' && request.method === 'POST') {
        let body = '';
        
        // Recibir datos del formulario
        request.on('data', chunk => {
            body += chunk.toString();
        });
        
        // Cuando se completa la recepción de datos
        request.on('end', () => {
            const parsedData = querystring.parse(body);
            const animalFavorito = parsedData.animal;
            
            // Leer plantilla HTML para mostrar el resultado
            fs.readFile(path.join(__dirname, 'views', 'animal.html'), 'utf8', (error, template) => {
                if (error) {
                    response.writeHead(500);
                    response.end('Error al cargar la página');
                    return;
                }
                
                // Reemplazar marcador de posición con el animal ingresado
                const htmlFinal = template.replace('{{ANIMAL_FAVORITO}}', animalFavorito);
                
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(htmlFinal);
            });
        });
    }
    
    // Ruta para archivos estáticos (CSS)
    else if (pathname === '/style.css') {
        fs.readFile(path.join(__dirname, 'public', 'style.css'), (error, data) => {
            if (error) {
                response.writeHead(404);
                response.end('Archivo no encontrado');
                return;
            }
            response.writeHead(200, { 'Content-Type': 'text/css' });
            response.end(data);
        });
    }
    
    // Ruta no encontrada
    else {
        response.writeHead(404);
        response.end('Página no encontrada');
    }
});

// Configurar puerto y iniciar servidor
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});