const CreatorHeroInfo = ({ creator }) => (
    <div className="relative p-4 z-20 w-full h-full pb-28 flex items-end">
        <div className="w-full flex items-center justify-between">
            <div className="flex gap-4">
                <img
                    src={creator.image}
                    className="w-32 h-32 object-cover"
                    alt={creator.name}
                />
                <div>
                    <h1 className="font-press">{creator.name}</h1>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {creator.positions?.map((pos) => (
                            <span
                                key={pos.id}
                                className="px-3 py-1 bg-primary/20 text-primary border border-slate-700 text-sm"
                            >
                                {pos.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex gap-3 mb-4 w-full md:w-auto">
                <div className="bg-white/80 px-5 py-3 text-center shadow-lg flex-1 md:flex-none">
                    <span className="block text-2xl font-black text-primary">
                        {creator.rating}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary/80">
                        Rating
                    </span>
                </div>
                <div className="px-5 py-3 text-center bg-secondary flex-1 md:flex-none">
                    <span className="block text-3xl font-black text-secondary-foreground">
                        {creator.games_count}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary-foreground/70">
                        Games
                    </span>
                </div>
            </div>
        </div>
    </div>
);

export default CreatorHeroInfo;
