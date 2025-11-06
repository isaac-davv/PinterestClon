import "./ImageGrid.css";
import { createImageCard } from "../ImageCard/ImageCard.js";

export function createImageGrid() {
    const section = document.createElement("section");
    section.classList.add("image-grid");

    function render(images) {
        section.innerHTML = "";
        images.forEach((img) => {
            const card = createImageCard(img);
            section.appendChild(card);
        });
    }

    return { element: section, render };
}