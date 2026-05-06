import { BASE_URL } from "./gamesApi";
import axios from "axios";

export const getAllCreators = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}creators?key=${import.meta.env.VITE_API_KEY}`,
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching creators:", error);
        throw error;
    }
};

export const getCreatorDetails = async (creatorId) => {
    try {
        const response = await axios.get(
            `${BASE_URL}creators/${creatorId}?key=${import.meta.env.VITE_API_KEY}`,
        );
        return response.data;
    } catch (error) {
        console.error(
            `Error fetching creator details for ID ${creatorId}:`,
            error,
        );
        throw error;
    }
};
