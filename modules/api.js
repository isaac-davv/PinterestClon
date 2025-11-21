const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function fetchImages(query = 'huevo', perPage = 30) {
   
    const finalQuery = String(query).trim() || 'Lionel Messi';
    try {
        const url = `${BASE_URL}/search/photos?query=${encodeURIComponent(finalQuery)}&per_page=${perPage}&client_id=${ACCESS_KEY}`;
        
        console.log('🔍 Realizando búsqueda:', finalQuery);
        
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error(`Error al cargar las imágenes. Estado: ${res.status}`);
        }
        
        const data = await res.json();
        console.log("✅ Datos obtenidos correctamente:", data.results.length, "imágenes");
        
        return data.results; 
        
    } catch (error) {
        console.error("❌ Error al obtener imágenes de Unsplash:", error);
        return []; 
    }
}
