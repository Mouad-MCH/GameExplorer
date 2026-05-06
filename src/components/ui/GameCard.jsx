import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
    const {
        name,
        background_image,
        rating,
        rating_top,
        metacritic,
        genres,
        parent_platforms,
        released,
        playtime,
        esrb_rating,
    } = game;

    const platforms = parent_platforms?.map((p) => p.platform.name) || [];
    const genreList = genres?.map((g) => g.name) || [];
    const releaseYear = released?.split("-")[0];

    return (
        <Link to={`/details/${game.id}`} className="relative w-full  overflow-hidden border border-white/10 bg-card/30 hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
            <div className="relative">
                <img
                    src={background_image}
                    alt={name}
                    className="w-full  aspect-video"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/75" />

                <span className="absolute top-3 left-3 text-[11px] px-2 py-0.5  bg-white/15 text-white border border-white/30 backdrop-blur-sm">
                    {genreList[0] || "Game"}
                </span>

                <span className="absolute top-3 right-3 text-[11px] px-2 py-0.5  bg-white/15 text-yellow-400 border border-white/30">
                    ★ {rating}/{rating_top}
                </span>

                <span className="absolute font-press  bottom-3 left-3 text-[10px] font-medium text-white">
                    {name}
                </span>
            </div>

            <div className="p-3">
                <div className="flex gap-2 mb-2 flex-wrap">
                    {platforms.map((p) => (
                        <span
                            key={p}
                            className="text-[10px] px-2 py-0.5  bg-muted text-muted-foreground border border-border"
                        >
                            {p}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-3">
                    <span>🗓 {releaseYear}</span>
                    <span>🎮 {playtime}h avg</span>
                    {metacritic && (
                        <span className="text-green-400 font-medium">
                            MC {metacritic}
                        </span>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-[11px] px-2 py-0.5  bg-muted text-muted-foreground border border-border">
                        {esrb_rating?.name || "Not Rated"}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default GameCard;
