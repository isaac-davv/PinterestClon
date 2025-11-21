import "./ImageCard.css";

export function createImageCard(image) {
    const thumbnailUrl = image.urls.regular || image.urls.small; 
    const visitLink = image.links.html; 
    const likesCount = image.likes; 

    // Crear elemento principal de la tarjeta
    const card = document.createElement("div");
    card.classList.add("image-card");

    // Crear wrapper de la imagen
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    // Crear imagen
    const img = document.createElement("img");
    img.src = thumbnailUrl;
    img.alt = image.alt_description || 'Imagen';
    img.classList.add("imageCard");
    img.loading = "lazy";

    // Crear overlay
    const cardOverlay = document.createElement("div");
    cardOverlay.classList.add("card-overlay");

    // Botón de Me Gusta
    const likeButton = document.createElement("button");
    likeButton.classList.add("overlay-button", "like-button");

    const heartIcon = document.createElement("span");
    heartIcon.classList.add("icon-heart");
    heartIcon.textContent = "❤️";

    const likeCountSpan = document.createElement("span");
    likeCountSpan.classList.add("like-count");
    likeCountSpan.textContent = likesCount || 0;

    likeButton.appendChild(heartIcon);
    likeButton.appendChild(likeCountSpan);

    // Botón de Visitar
    const visitButton = document.createElement("a");
    visitButton.href = visitLink;
    visitButton.target = "_blank";
    visitButton.classList.add("overlay-button", "visit-button");
    visitButton.textContent = "Visitar";

    // Ensamblar overlay
    cardOverlay.appendChild(likeButton);
    cardOverlay.appendChild(visitButton);

    // Ensamblar wrapper de imagen
    imageWrapper.appendChild(img);
    imageWrapper.appendChild(cardOverlay);

    // Crear sección de información del autor
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    const profileImg = document.createElement("img");
    profileImg.classList.add("profile");
    profileImg.src = image.user.profile_image.small;
    profileImg.alt = image.user.name;

    const infoDiv = document.createElement("div");

    const authorP = document.createElement("p");
    authorP.classList.add("author");
    authorP.textContent = image.user.name;

    const dateP = document.createElement("p");
    dateP.classList.add("date");
    dateP.textContent = new Date(image.created_at).toLocaleDateString();

    infoDiv.appendChild(authorP);
    infoDiv.appendChild(dateP);

    cardInfo.appendChild(profileImg);
    cardInfo.appendChild(infoDiv);

    // Ensamblar card completa
    card.appendChild(imageWrapper);
    card.appendChild(cardInfo);

    // Event listener para el botón de visitar
    visitButton.addEventListener('click', (e) => {
        e.stopPropagation(); 
    });
    
    return card;
}
