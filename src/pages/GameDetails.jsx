import { useParams } from "react-router-dom";
import { getGameDetails, getGameDevelopers } from "../api/gamesApi";
import "../DetailsStyle.css";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const GameDetails = () => {
    const { id: game_id } = useParams();

    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                setLoading(true);
                const data = await getGameDetails(game_id);
                setGame(data);
                const developers = await getGameDevelopers(game_id);
                console.log("Developers:", developers);

                setError(null);
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchGame();
    }, [game_id]);

    if (loading) return <div className="loading">game details loading ...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!game) return <div className="empty">game not found</div>;

    return (
        <div className="game-detail-page">
            <div className="game-header">
                <img
                    src={game.background_image}
                    alt={game.name}
                    className="game-image"
                />
                <div className="game-header-overlay">
                    <h1>{game.name}</h1>
                </div>
            </div>

            <div className="game-content">
                <div className="game-info">
                    <section className="description">
                        <h2>description</h2>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: game.description_raw || "",
                            }}
                        />
                    </section>

                    <div className="game-meta">
                        <div className="meta-item">
                            <strong>Rating:</strong> {game.rating} / 5
                        </div>
                        <div className="meta-item">
                            <strong>Released:</strong> {game.released}
                        </div>
                        <div className="meta-item">
                            <strong>Genres:</strong>{" "}
                            {game.genres?.map((g) => g.name).join(", ")}
                        </div>
                        <div className="meta-item">
                            <strong>Platforms:</strong>{" "}
                            {game.platforms
                                ?.map((p) => p.platform.name)
                                .join(", ")}
                        </div>

                        <Link
                            to={`/games/${game.id}/development-team`}
                            className="btn-secondary"
                        >
                            View Team Developers
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;
