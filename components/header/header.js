import "./header.css";

export function createHeader(onSearch, onLogoClick) {
    // Crear elemento principal header
    const header = document.createElement("header");
    header.classList.add("header");

    // Crear sección izquierda
    const headerLeft = document.createElement("div");
    headerLeft.classList.add("header__left");

    // Logo
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("header__logo");
    logoDiv.id = "logo";
    
    const logoImg = document.createElement("img");
    logoImg.src = "../../Svg/LogoPinterest.png";
    logoImg.alt = "Pinterest Logo";
    logoImg.classList.add("pinterest-icon");
    logoDiv.appendChild(logoImg);

    // Botones de navegación
    const btnInicio = document.createElement("button");
    btnInicio.classList.add("header__button");
    btnInicio.textContent = "Inicio";

    const btnExplorar = document.createElement("button");
    btnExplorar.classList.add("header__button");
    btnExplorar.textContent = "Explorar";

    const btnCrear = document.createElement("button");
    btnCrear.classList.add("header__button");
    btnCrear.textContent = "Crear";

    headerLeft.appendChild(logoDiv);
    headerLeft.appendChild(btnInicio);
    headerLeft.appendChild(btnExplorar);
    headerLeft.appendChild(btnCrear);

    // Crear formulario de búsqueda
    const searchForm = document.createElement("form");
    searchForm.id = "search-form";
    searchForm.classList.add("header__search-form");

    const searchWrapper = document.createElement("div");
    searchWrapper.classList.add("search-icon-wrapper");

    const searchIcon = document.createElement("span");
    searchIcon.classList.add("search-icon");
    searchIcon.innerHTML = "&#128269;";

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.id = "search-input";
    searchInput.classList.add("header__search-input");
    searchInput.placeholder = "Buscar";

    searchWrapper.appendChild(searchIcon);
    searchWrapper.appendChild(searchInput);
    searchForm.appendChild(searchWrapper);

    // Crear sección derecha
    const headerRight = document.createElement("div");
    headerRight.classList.add("header__right");

    // Botón de notificaciones
    const btnNotif = document.createElement("button");
    btnNotif.classList.add("header__icon-button");
    
    const notifImg = document.createElement("img");
    notifImg.src = "../../Svg/Campana.svg";
    notifImg.alt = "Notificaciones";
    btnNotif.appendChild(notifImg);

    // Botón de mensajes
    const btnMsg = document.createElement("button");
    btnMsg.classList.add("header__icon-button");
    
    const msgImg = document.createElement("img");
    msgImg.src = "../../Svg/Chat.svg";
    msgImg.alt = "Mensajes";
    btnMsg.appendChild(msgImg);

    // Botón de perfil
    const btnProfile = document.createElement("button");
    btnProfile.classList.add("header__profile-button");
    btnProfile.textContent = "D";

    headerRight.appendChild(btnNotif);
    headerRight.appendChild(btnMsg);
    headerRight.appendChild(btnProfile);

    // Ensamblar todo
    header.appendChild(headerLeft);
    header.appendChild(searchForm);
    header.appendChild(headerRight);

    // Event Listeners
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        onSearch(query);
        searchInput.value = "";
    });
    
    logoDiv.addEventListener("click", onLogoClick);

    return header;
}
