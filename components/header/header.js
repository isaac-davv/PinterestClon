import "./header.css";

export function createHeader(onSearch, onLogoClick) {
    const header = document.createElement("header");
    header.classList.add("header");
    header.innerHTML = `
        <div class="header__left">
            <div class="header__logo" id="logo">
                <img src= "../../Svg/LogoPinterest.png" alt="Pinterest Logo" class="pinterest-icon" /> 
            </div>
            <button class="header__button">Inicio</button>
            <button class="header__button">Explorar</button>
            <button class="header__button">Crear</button>
        </div>

        <form id="search-form" class="header__search-form">
            <div class="search-icon-wrapper">
                <span class="search-icon">&#128269;</span>    
                <input type="text" id="search-input" class="header__search-input" placeholder="Buscar" />
            </div>
        </form>

        <div class="header__right">
            <button class="header__icon-button">
                <img src="../../Svg/Campana.svg" alt="Notificaciones" />
            </button>
            <button class="header__icon-button">
                <img src="../../Svg/Chat.svg" alt="Mensajes" />
            </button>
            <button class="header__profile-button">D</button> 
        </div>
    `;
    const logo = header.querySelector("#logo");
    const form = header.querySelector("#search-form");
    const input = header.querySelector("#search-input");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = input.value.trim();
        onSearch(query);
        input.value = "";
    });
    
    logo.addEventListener("click", onLogoClick);

    return header;
}