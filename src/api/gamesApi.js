export const BASE_URL = "https://api.rawg.io/api/";

import axios from "axios";

const getAllGames = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}games?key=${import.meta.env.VITE_API_KEY}`,
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching games:", error);
        throw error;
    }
};

const getGameDetails = async (gameId) => {
    try {
        const response = await axios.get(
            `${BASE_URL}games/${gameId}?key=${import.meta.env.VITE_API_KEY}`,
        );
        return response.data;
    } catch (error) {
        console.error(`Error fetching game details for ID ${gameId}:`, error);
        throw error;
    }
};

export { getGameDetails, getAllGames };
