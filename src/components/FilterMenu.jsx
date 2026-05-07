import { Filter } from "lucide-react";

const FilterMenu = ({ games, setGenre, setName }) => {
    return (
        <div className="filter-menu w-full h-20 flex items-center gap-2 mb-4">
            <Filter games={games} setGenre={setGenre} />
            <div className="filter-controls">
                <input
                    type="search"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Search games..."
                />

                <select
                    onChange={(e) => setGenre(e.target.value)}
                    className="text-card-foreground p-2 rounded bg-[#2a3a55] outline-0"
                >
                    <option value="">All Genres</option>

                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="rpg">RPG</option>
                    <option value="strategy">Strategy</option>
                    <option value="shooter">Shooter</option>
                </select>
            </div>
        </div>
    );
};

export default FilterMenu;
