import React, { useEffect, useState } from "react";
import { getCreatorDetails, getAllCreators } from "../api/creatorsApi";
import { useParams } from "react-router-dom";
import { ArrowBigRight, Info } from "lucide-react";

const CreatorDetails = () => {
    const { id } = useParams();

    const [creator, setCreator] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchCreatorDetails() {
            setLoading(true);
            try {
                const data = await getCreatorDetails(id);
                setCreator(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCreatorDetails();
    }, [id]);

    if (loading) {
        return (
            <div className="mt-20">
                <div>Loading...</div>
            </div>
        );
    }

    console.log(creator);
    return (
        <div className="mt-20">
            <div
                style={{ "--bg-image": `url('${creator.image_background}')` }}
                className="relative  [background-image:var(--bg-image)] bg-cover aspect-auto bg-no-repeat bg-top h-[90vh]  
             before:content-[''] before:absolute before:inset-0 
             before:bg-linear-to-t before:from-background before:via-black/20 before:to-transparent 
             before:z-10"
            >
                <div className="relative p-4 z-20 w-full h-screen pb-28 flex items-end justify-start gap-4">
                    <div className=" w-full flex items-center justify-between">
                        <div className="flex gap-4">
                            <img
                                src={creator.image}
                                className="w-32 h-32 object-cover border-border"
                                alt={creator.name}
                            />
                            <div>
                                <h1 className="font-press">{creator.name}</h1>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {creator.positions?.map((pos) => (
                                        <span
                                            key={pos.id}
                                            className="px-3 py-1 bg-primary/20 text-primary border border-slate-700  text-sm "
                                        >
                                            {pos.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3 mb-4 w-full md:w-auto">
                            <div className="bg-white/80  px-5 py-3  text-center shadow-lg flex-1 md:flex-none">
                                <span className="block text-2xl font-black text-primary">
                                    {creator.rating}
                                </span>
                                <span className="text-xs font-bold uppercase tracking-wider text-primary/80">
                                    Rating
                                </span>
                            </div>
                            <div className=" px-5 py-3  text-center bg-secondary  flex-1 md:flex-none">
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

                <div className="w-full grid grid-cols-3 p-4 gap-4">
                    <section className="bg-secondary/20 p-6 col-span-2  border border-secondary">
                        <h2 className="text-lg font-bold font-press  text-secondary-foreground mb-4 flex items-center gap-2">
                            <Info className="text-primary size-5" />
                            About
                        </h2>
                        <div
                            className="text-secondary-foreground/80 leading-relaxed text-base prose prose-invert max-w-none prose-p:mb-4 prose-h3:text-lg prose-h3:text-white prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-2 prose-a:text-emerald-400"
                            dangerouslySetInnerHTML={{
                                __html: creator.description,
                            }}
                        />
                    </section>

                    <section className="bg-secondary/20 p-6  border border-secondary">
                        <h2 className="text-lg font-bold font-press text-secondary-foreground mb-1">
                            Player Ratings
                        </h2>
                        <p className="text-sm text-secondary-foreground/80 mb-4">
                            Total Reviews
                        </p>

                        <div className="space-y-3">
                            {creator.ratings?.map((r) => (
                                <div
                                    key={r.id}
                                    className="flex justify-between items-center text-sm"
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="size-3  bg-primary"></span>
                                        <span className="capitalize text-secondary-foreground/80 font-medium">
                                            {r.title}
                                        </span>
                                    </div>
                                    <span className="text-secondary-foreground/80">
                                        {r.count.toLocaleString()}{" "}
                                        <span className="text-secondary-foreground/60 text-xs ml-1">
                                            ({r.percent}%)
                                        </span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                <div className="grid w-full grid-cols-3 p-4 gap-4">
                    <h2 className="text-lg font-press  col-span-3 font-bold mt-6  text-white ">
                        Career Timeline ({creator.timeline?.length} Years)
                    </h2>
                    <section className="col-span-2">
                        <div className="grid grid-cols-4 max-h-70 gap-2 overflow-y-auto pb-4">
                            {creator.timeline?.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-secondary/20 p-4  border border-secondary text-center "
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
                    <section className="bg-secondary/20 p-6  border border-secondary">
                        <h2 className="text-lg font-bold text-secondary-foreground mb-4 flex justify-between items-end">
                            Platforms{" "}
                            <span className="text-sm font-normal text-primary">
                                {creator.platforms?.total} Total
                            </span>
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {creator.platforms?.results.map((plat) => (
                                <span
                                    key={plat.id}
                                    className="px-3 py-1.5 bg-secondary text-slate-300 border border-secondary text-sm shadow-sm hover:border-secondary/15 transition-colors cursor-default"
                                >
                                    {plat.platform.name}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>
                <div className="mt-12 p-4 border-t border-secondary flex  justify-between items-center text-sm text-secondary-foreground/80">
                    <p>
                        {" "}
                        last updated :{" "}
                        {new Date(creator.updated).toLocaleString()}
                    </p>{" "}
                    <a
                        href={`https://rawg.io/creators/${creator.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 md:mt-0 flex items-center gap-2  text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                        View on RAWG.io <ArrowBigRight size={20} />
                    </a>
                </div>
            </div>

            {/* ---------------------------------------------------------- */}
        </div>
    );
};

export default CreatorDetails;
