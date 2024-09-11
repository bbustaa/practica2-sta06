document.getElementById('buscar').addEventListener('click', function() {
    let titulo = document.getElementById('titulo').value;
    let apiKey = "dd6c6a4";  // Reemplaza con tu clave API
    let url = `https://www.omdbapi.com/?t=${titulo}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                // Mostrar información de la película
                document.getElementById('resultado').innerHTML = `
                    <p>Director: ${data.Director}</p>
                    <p>Año: ${data.Year}</p>
                `;
            } else {
                // Mostrar mensaje de error
                document.getElementById('resultado').innerHTML = `<p>${data.Error}</p>`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('resultado').innerHTML = `<p>Error al buscar la película.</p>`;
        });
});

