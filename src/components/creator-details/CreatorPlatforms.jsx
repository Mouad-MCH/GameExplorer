const CreatorPlatforms = ({ platforms }) => (
    <section className="bg-secondary/20 p-6 border border-secondary">
        <h2 className="text-lg font-bold text-secondary-foreground mb-4 flex justify-between items-end">
            Platforms
            <span className="text-sm font-normal text-primary">
                {platforms?.total} Total
            </span>
        </h2>
        <div className="flex flex-wrap gap-2">
            {platforms?.results.map((plat, ndx) => (
                <span
                    key={ndx}
                    className="px-3 py-1.5 bg-secondary text-slate-300 border border-secondary text-sm hover:border-secondary/15 transition-colors cursor-default"
                >
                    {plat.platform.name}
                </span>
            ))}
        </div>
    </section>
);

export default CreatorPlatforms;
