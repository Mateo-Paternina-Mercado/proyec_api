// URL del API de RAWG para obtener una lista de videojuegos
const API_URL = 'https://api.rawg.io/api/games?key=3ba6106b643f4ca2b9201865577e1657';

const gameListContainer = document.getElementById('game-list');

// Función para obtener los juegos de la API
async function fetchGames() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Mostrar juegos en la interfaz
        displayGames(data.results);

        // Guardar juegos en Local Storage
        localStorage.setItem('games', JSON.stringify(data.results));
    } catch (error) {
        console.error('Error al obtener los juegos:', error);
    }
}

// Función para mostrar los juegos en la interfaz
function displayGames(games) {
    gameListContainer.innerHTML = ''; // Limpiar la lista antes de agregar nuevos juegos

    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');

        gameCard.innerHTML = `
            <img src="${game.background_image}" alt="${game.name}">
            <div class="content">
                <h3>${game.name}</h3>
                <p>${game.released}</p>
                <button class="favorite-btn" onclick="addToFavorites(${game.id})">Agregar a favoritos</button>
            </div>
        `;

        gameListContainer.appendChild(gameCard);
    });
}

// Función para agregar un juego a favoritos
function addToFavorites(gameId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (!favorites.includes(gameId)) {
        favorites.push(gameId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Juego agregado a favoritos!');
    } else {
        alert('Este juego ya está en favoritos.');
    }
}

// Cargar los juegos almacenados en Local Storage al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const storedGames = JSON.parse(localStorage.getItem('games'));

    if (storedGames) {
        displayGames(storedGames); // Mostrar juegos si ya están en Local Storage
    } else {
        fetchGames(); // Si no hay juegos, obtenerlos desde la API
    }
});


// Música gamer suave
const music = document.getElementById('background-music');
const toggleBtn = document.getElementById('toggle-music');
let isPlaying = true;

toggleBtn.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        toggleBtn.textContent = '▶ play';
    } else {
        music.play();
        toggleBtn.textContent = '⏸ stop';
    }
    isPlaying = !isPlaying;
});
