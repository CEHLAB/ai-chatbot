import axios from 'axios';

const REST_API_BASE_URL = "http://localhost:5500/api/v1/chat";

// Fonction pour obtenir la réponse de l'API
export const getChatResponse = async (message) => {
    try {
        const response = await axios.post(REST_API_BASE_URL, { message });
        return response.data;  // Retourne la réponse reçue de l'API
    } catch (error) {
        console.error("Error calling chat API:", error);
        throw new Error("Unable to fetch response from server.");
    }
};
