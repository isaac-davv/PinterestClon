import "./style.css";
import { createHeader } from "../components/header/header.js";
import { createImageGrid } from "../components/ImageGrid/ImageGrid.js";
import { fetchImages } from "../modules/api.js";



const app = document.querySelector("#app");

const imageGridObj = createImageGrid();

async function loadImages(query) {
  const images = await fetchImages(query);
  imageGridObj.render(images);
}

function onSearch(query) {
  loadImages(query);
}

function resetToDefault(event) {
    if (event) {
        event.preventDefault();
    }
     window.location.reload();
}

const header = createHeader(onSearch, resetToDefault);

app.append(header);
app.append(imageGridObj.element);

loadImages();



