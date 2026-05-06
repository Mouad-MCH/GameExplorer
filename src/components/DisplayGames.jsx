import { Gamepad2 } from "lucide-react";
import GameCard from "./ui/GameCard.jsx";

const DisplayGames = ({ games, loading, genre }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Games</h1>
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="size-20 flex items-center justify-center p-3 border-2 border-primary/20 border-t-primary rounded-full animate-spin">
            <Gamepad2 className="object-contain" />
          </div>
        </div>
      ) : games.length > 0 ? (
        <div>
          <p className="text-foreground font-medium mb-10">
            Found <span className="font-bold text-primary">{games.length}</span>{" "}
            games for genre:{" "}
            <span className="font-bold text-primary">{genre || "All"}</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {games.map((game) => (
              <GameCard game={game} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-foreground font-medium">
          No games found for genre:{" "}
          <span className="font-bold text-primary">{genre || "All"}</span>
        </p>
      )}
    </div>
  );
};

export default DisplayGames;
