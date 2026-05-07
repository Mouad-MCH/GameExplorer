import { useEffect, useState } from "react";
import { getGamesByGenre } from "../api/gamesApi.js";
import FilterMenu from "../components/FilterMenu.jsx";
import DisplayGames from "../components/DisplayGames.jsx";

const Games = () => {
    const [games, setGames] = useState([]);
    const [genre, setGenre] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGames = async (name, genre) => {
            try {
                const res = await getGamesByGenre(name, genre);
                console.log("Fetched games:", res.results);
                setGames(res.results);
            } catch (error) {
                console.error("faild get games data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGames(name, genre);
    }, [genre, name]);

    console.log("Current genre:", genre);
    console.log("Games state:", games);

    return (
        <div className="bg-background mt-20 text-card-foreground min-h-screen p-10">
            <FilterMenu games={games} setGenre={setGenre} setName={setName} />
            <DisplayGames games={games} loading={loading} genre={genre} />
        </div>
    );
};

export default Games;
