function DeveloperCard({ developer }) {
    return (
        <div className="card-bg  overflow-hidden border  bg-secondary/10 border-secondary  relative">
            <div className="relative h-36 overflow-hidden">
                <img
                    src={developer.image_background}
                    alt="background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/10 to-background/80" />
            </div>

            <div className="px-6 -mt-10 relative z-20 flex items-end gap-4">
                <img
                    src={developer.image}
                    alt={developer.name}
                    className="h-20 w-20  object-cover border-2 border-border"
                />
                <div className="pb-1">
                    <h2 className="text-secondary-foreground font-press  font-bold leading-tight tracking-tight">
                        {developer.name}
                    </h2>
                    <p className="mt-1 text-xs text-secondary-foreground/50">
                        @{developer.slug}
                    </p>
                </div>
            </div>

            <div className="px-6 mt-4 flex gap-2 flex-wrap">
                {developer.positions.map((p) => (
                    <span
                        key={p.name}
                        className="text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 bg-primary/10 text-primary border border-primary/30 "
                    >
                        {p.name}
                    </span>
                ))}
            </div>

            <div className="px-4 mt-4 grid grid-cols-3 gap-4">
                {[
                    { label: "Games", value: developer.games_count },
                    { label: "Featured", value: developer.games.length },
                    { label: "Rank", value: `#${developer.id}` },
                ].map((s) => (
                    <div
                        key={s.label}
                        className="bg-background border border-secondary/80  p-2 text-center"
                    >
                        <p className="text-secondary-foreground text-2xl font-extrabold leading-none">
                            {s.value}
                        </p>
                        <p className="text-xs uppercase tracking-widest text-secondary-foreground/50">
                            {s.label}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mx-6 mt-5 border-t border-secondary/80" />

            <div className="px-6 mt-4 mb-2">
                <p className="font-['DM_Mono',monospace] text-[10px] uppercase tracking-[0.15em] text-secondary-foreground/50 mb-3">
                    Notable games
                </p>
                <div className="flex flex-col gap-1.5">
                    {developer.games.map((game, i) => (
                        <div
                            key={game.id}
                            className="game-row flex items-center justify-between px-3 py-2.5 rounded-lg "
                        >
                            <div className="flex items-center gap-3">
                                <span className="font-['DM_Mono',monospace] text-[11px] text-secondary-foreground/50 w-4">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="text-secondary-foreground/80 text-sm font-medium">
                                    {game.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DeveloperCard;
