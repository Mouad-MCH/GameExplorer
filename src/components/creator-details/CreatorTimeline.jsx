const CreatorTimeline = ({ timeline }) => (
    <section className="col-span-2">
        <div className="grid grid-cols-4 max-h-70 gap-2 overflow-y-auto pb-4">
            {timeline?.map((item, idx) => (
                <div
                    key={idx}
                    className="bg-secondary/20 p-4 border border-secondary text-center"
                >
                    <span className="block text-2xl font-bold text-secondary-foreground">
                        {item.count}
                    </span>
                    <span className="text-sm text-secondary-foreground/80">
                        Games in
                    </span>
                    <span className="block font-semibold text-primary">
                        {item.year}
                    </span>
                </div>
            ))}
        </div>
    </section>
);

export default CreatorTimeline;
