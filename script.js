// API key que obtuviste en OMDb
const apiKey = 'dd6c6a4';

// Capturar los elementos de HTML
const searchButton = document.getElementById('searchButton');
const movieTitleInput = document.getElementById('movieTitle');
const movieInfo = document.getElementById('movieInfo');

// Evento al hacer clic en el botón
searchButton.addEventListener('click', () => {
    const movieTitle = movieTitleInput.value;
    
    // Verificar que el campo no esté vacío
    if (movieTitle) {
        // URL para la API de OMDb con el título de la película
        const apiUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;
        
        // Hacer la solicitud a la API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Verificar si se ha encontrado la película
                if (data.Response === 'True') {
                    const director = data.Director;
                    const year = data.Year;
                    movieInfo.innerHTML = `<p>Director: ${director}</p><p>Año: ${year}</p>`;
                } else {
                    movieInfo.innerHTML = `<p>Película no encontrada.</p>`;
                }
            })
            .catch(error => {
                console.error('Error al hacer la solicitud a la API:', error);
                movieInfo.innerHTML = `<p>Error al buscar la película.</p>`;
            });
    } else {
        movieInfo.innerHTML = `<p>Por favor, introduce un título.</p>`;
    }
});
