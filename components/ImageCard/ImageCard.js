import "./ImageCard.css";

export function createImageCard(image) {
    const thumbnailUrl = image.urls.regular || image.urls.small; 
    const modalImageUrl = image.urls.full || image.urls.regular; 
    const visitLink = image.links.html; 
    const likesCount = image.likes; 

    const card = document.createElement("div");
    card.classList.add("image-card");

    card.innerHTML = `
        <div class="image-wrapper">
            <img src="${thumbnailUrl}" alt="${image.alt_description || 'Imagen'}" class="imageCard" loading="lazy" />
            
            <div class="card-overlay">
                
                <!-- Botón de Me Gusta -->
                <button class="overlay-button like-button">
                    <span class="icon-heart">❤️</span> 
                    <span class="like-count">${likesCount || 0}</span>
                </button>
                
                <!-- Botón de Visitar -->
                <a href="${visitLink}" target="_blank" class="overlay-button visit-button">
                    Visitar
                </a>
            </div>
        </div>

        <!-- Información del autor -->
        <div class="card-info">
            <img class="profile" src="${image.user.profile_image.small}" alt="${image.user.name}" />
            <div>
            <p class="author">${image.user.name}</p>
            <p class="date">${new Date(image.created_at).toLocaleDateString()}</p>
            </div>
        </div>
    `;

    const visitButton = card.querySelector('.visit-button');
    visitButton.addEventListener('click', (e) => {
        e.stopPropagation(); 
    });
    
    return card;
}