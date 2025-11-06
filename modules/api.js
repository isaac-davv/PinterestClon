const ACCESS_KEY = 'Gestrtiowd7j7k8x1abd2EEgG9IXPw5taD61jbIpq5s'; 
const BASE_URL = "https://api.unsplash.com";

export async function fetchImages(query = 'Espacio', perPage = 30) {
    const finalQuery = String(query).trim() || 'Lionel Messi';
    try {
        const url = `${BASE_URL}/search/photos?query=${encodeURIComponent(finalQuery)}&per_page=${perPage}&client_id=${ACCESS_KEY}`;
        
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error(`Error al cargar las imágenes. Estado: ${res.status}`);
        }
        
        const data = await res.json();
        console.log("Datos COMPLETOS de la respuesta de Unsplash:", data);
        
        return data.results; 
        
    } catch (error) {
        console.error("Error al obtener imágenes de Unsplash:", error);
        return []; 
    }
}