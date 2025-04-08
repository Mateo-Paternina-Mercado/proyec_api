// URL del API de RAWG para obtener una lista de videojuegos
const API_URL = 'https://api.rawg.io/api/games?key=3ba6106b643f4ca2b9201865577e1657';

const gameListContainer = document.getElementById('game-list');
const favoritesListContainer = document.getElementById('favorites-container');
const favoritesToggleBtn = document.getElementById('favorites-toggle-btn');
const localStorageContent = document.getElementById('local-storage-content');

// Función para obtener los juegos de la API
async function fetchGames() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        // Mostrar juegos en la interfaz
        displayGames(data.results);
        
        // Guardar juegos en Local Storage
        localStorage.setItem('games', JSON.stringify(data.results));
        updateLocalStorageView(); // Actualizar la vista de localStorage
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
        updateLocalStorageView(); // Actualizar la vista de localStorage
    } else {
        alert('Este juego ya está en favoritos.');
    }
}

// Función para eliminar un juego de favoritos
function removeFromFavorites(gameId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(id => id !== gameId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    displayFavorites(); // Actualiza la lista de favoritos
    updateLocalStorageView(); // Actualizar la vista de localStorage
}

// Función para mostrar los juegos favoritos
function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    favoritesListContainer.innerHTML = ''; // Limpiar favoritos antes de mostrar

    if (favorites.length === 0) {
        favoritesListContainer.innerHTML = '<p>No tienes juegos favoritos.</p>';
    }

    favorites.forEach(gameId => {
        const storedGames = JSON.parse(localStorage.getItem('games')) || [];
        const favoriteGame = storedGames.find(game => game.id === gameId);
        
        if (favoriteGame) {
            const gameCard = document.createElement('div');
            gameCard.classList.add('game-card');
            
            gameCard.innerHTML = `
                <img src="${favoriteGame.background_image}" alt="${favoriteGame.name}">
                <div class="content">
                    <h3>${favoriteGame.name}</h3>
                    <p>${favoriteGame.released}</p>
                    <button class="favorite-btn" onclick="removeFromFavorites(${favoriteGame.id})">Eliminar de favoritos</button>
                </div>
            `;
            
            favoritesListContainer.appendChild(gameCard);
        }
    });
}

// Alternar entre la vista de juegos y la vista de favoritos
favoritesToggleBtn.addEventListener('click', () => {
    const isFavoritesVisible = favoritesListContainer.style.display === 'block';
    
    // Cambiar la visibilidad
    favoritesListContainer.style.display = isFavoritesVisible ? 'none' : 'block';
    gameListContainer.style.display = isFavoritesVisible ? 'block' : 'none';
    
    // Mostrar los favoritos si no están visibles
    if (!isFavoritesVisible) {
        displayFavorites();
    }
});

// Función para actualizar la vista de localStorage en la UI
function updateLocalStorageView() {
    // Mostrar el contenido de localStorage en el área de depuración
    localStorageContent.textContent = JSON.stringify(localStorage, null, 2);
}

// Cargar los juegos almacenados en Local Storage al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const storedGames = JSON.parse(localStorage.getItem('games'));
    
    if (storedGames) {
        displayGames(storedGames); // Mostrar juegos si ya están en Local Storage
    } else {
        fetchGames(); // Si no hay juegos, obtenerlos desde la API
    }

    // Inicializar la vista de localStorage
    updateLocalStorageView();
});
