const CreatorRatings = ({ ratings }) => (
    <section className="bg-secondary/20 p-6 border border-secondary">
        <h2 className="text-lg font-bold font-press text-secondary-foreground mb-1">
            Player Ratings
        </h2>
        <p className="text-sm text-secondary-foreground/80 mb-4">
            Total Reviews
        </p>
        <div className="space-y-3">
            {ratings?.map((r) => (
                <div
                    key={r.id}
                    className="flex justify-between items-center text-sm"
                >
                    <div className="flex items-center gap-2">
                        <span className="size-3 bg-primary" />
                        <span className="capitalize text-secondary-foreground/80 font-medium">
                            {r.title}
                        </span>
                    </div>
                    <span className="text-secondary-foreground/80">
                        {r.count.toLocaleString()}
                        <span className="text-secondary-foreground/60 text-xs ml-1">
                            ({r.percent}%)
                        </span>
                    </span>
                </div>
            ))}
        </div>
    </section>
);

export default CreatorRatings;
