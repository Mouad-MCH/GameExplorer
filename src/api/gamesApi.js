export const BASE_URL = import.meta.env.VITE_BASE_URL;

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

const getGamesByGenre = async (name, genre) => {
    try {
        const response = await axios.get(
            genre
                ? `${BASE_URL}games?key=${import.meta.env.VITE_API_KEY}&genres=${genre}${`&search=${name}` || ""}`
                : `${BASE_URL}games?key=${import.meta.env.VITE_API_KEY}${`&search=${name}` || ""}`,
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching games:", error);
        throw error;
    }
};

const getGameDevelopers = async (gameId) => {
    try {
        const response = await axios.get(
            `${BASE_URL}games/${gameId}/development-team?key=${import.meta.env.VITE_API_KEY}`,
        );
        return response.data;
    } catch (error) {
        console.error(
            `Error fetching game developers for ID ${gameId}:`,
            error,
        );
        throw error;
    }
};

export { getGameDetails, getAllGames, getGamesByGenre, getGameDevelopers };
