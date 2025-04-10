const favoritesContainer = document.getElementById('favorites-container');
const modal = document.getElementById('favorites-modal');
const closeModal = document.getElementById('close-modal');
const openModalBtn = document.getElementById('open-favorites-btn');

function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const storedGames = JSON.parse(localStorage.getItem('games')) || [];

  favoritesContainer.innerHTML = '';

  if (favorites.length === 0) {
    favoritesContainer.innerHTML = '<p>No tienes juegos favoritos.</p>';
    return;
  }

  favorites.forEach(gameId => {
    const game = storedGames.find(g => g.id === gameId);
    if (game) {
      const card = document.createElement('div');
      card.classList.add('game-card');
      card.innerHTML = `
        <img src="${game.background_image}" alt="${game.name}">
        <div class="content">
          <h3>${game.name}</h3>
          <p>${game.released}</p>
        </div>
      `;
      favoritesContainer.appendChild(card);
    }
  });
}

openModalBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  loadFavorites();
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});
