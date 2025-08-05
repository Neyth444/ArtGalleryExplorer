const gallery = document.getElementById("gallery");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

// creation des elements concernant le modal
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalArtist = document.getElementById("modal-artist");
const modalDate = document.getElementById("modal-date");
const modalDesc = document.getElementById("modal-desc");
const modalSize = document.getElementById("modal-size");

// Fermer le modal
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

//comme demandé, on créée une fonction asynchrone
async function fetchArtworks(query = "van gogh") {
  gallery.innerHTML = "<p>Chargement des œuvres...</p>";

  try {
    const searchResponse = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${query}`
    );
    const searchData = await searchResponse.json();

    if (!searchData.objectIDs || searchData.objectIDs.length === 0) {
      gallery.innerHTML = "<p>Aucune œuvre trouvée.</p>";
      return;
    }

    const topIDs = searchData.objectIDs.slice(0, 10);
    const artworkPromises = topIDs.map((id) =>
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`).then((res) =>
        res.json()
      )
    );

    const artworks = await Promise.all(artworkPromises);
    displayGallery(artworks);
  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
    gallery.innerHTML = "<p>Une erreur est survenue.</p>";
  }
}

// Affiche les cartes d'œuvres
function displayGallery(artworks) {
  gallery.innerHTML = "";

  artworks.forEach((art) => {
    if (!art.primaryImageSmall) return;

    const card = document.createElement("div");
    card.classList.add("art-card");

    card.innerHTML = `
      <div class="image-container">
        <img src="${art.primaryImageSmall}" alt="${art.title}" />
        <div class="overlay">
          <h3>${art.title}</h3>
          <p><strong>${art.artistDisplayName || "Inconnu"}</strong></p>
          <p>${art.objectDate || ""}</p>
        </div>
      </div>
    `;

    // Ajout du modal au clic
    card.addEventListener("click", () => {
      modal.style.display = "block";
      modalImage.src = art.primaryImage || art.primaryImageSmall;
      modalTitle.textContent = art.title || "Titre inconnu";
      modalArtist.textContent = art.artistDisplayName || "Inconnu";
      modalDate.textContent = art.objectDate || "Non précisée";
      modalDesc.textContent = art.creditLine || "Aucune description.";
      modalSize.textContent = art.dimensions || "Non spécifiées";
    });

    gallery.appendChild(card);
  });
}

// Lancer la recherche
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchArtworks(query);
  }
});

// Chargement initial
fetchArtworks();
