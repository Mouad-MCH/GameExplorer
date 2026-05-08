import { useEffect, useState } from "react";
import { getAllGames } from "../api/gamesApi";
import { ArrowRight, Compass, Gamepad2, Map } from "lucide-react";
import GameCard from "../components/ui/GameCard";
import { NavLink } from "react-router-dom";
import Button from "../components/ui/Button";
import Spinner from "../components/ui/Spinner";

const HERO_IMAGES = [
    "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
    "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
];

const INTERVAL_MS = 5000;

const Home = () => {
    const [games, setGames] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % HERO_IMAGES.length,
            );
        }, INTERVAL_MS);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const data = await getAllGames();
                setGames(data.results);
            } catch (error) {
                console.error("Failed to fetch games:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchGames();
    }, []);

    if (error) {
        return (
            <div className="flex mt-20  items-center justify-center h-screen">
                <p className="text-red-500">
                    Error loading games. Please try again later.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-background mt-20 text-card-foreground">
            <div
                style={{
                    backgroundImage: `url('${HERO_IMAGES[currentIndex]}')`,
                }}
                className="relative bg-cover bg-center
            before:absolute before:inset-0 before:bg-black/50 before:z-0 h-[90vh] flex items-center justify-start"
            >
                <div
                    key={currentIndex}
                    className=" absolute bottom-0 w-full transition-all duration-1000 ease-in-out max-w-full p-4"
                >
                    <p className="font-press text-[10px]">
                        image {currentIndex + 1}/{HERO_IMAGES.length}
                    </p>

                    <div className="mt-2 flex items-center gap-1">
                        {HERO_IMAGES.map((_, index) => (
                            <div
                                className={`w-10 h-0.5 bg-primary/20 ${index <= currentIndex ? "bg-white" : ""}`}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-20 w-full z-10 flex flex-col items-start  gap-4 px-10">
                    <p className="uppercase text-primary bg-primary/10 w-fit text-[10px] border border-primary/30 p-1 ">
                        new area of gaming
                    </p>
                    <h1 className="text-xl font-press text-white">
                        Discover Your Next Obsession
                    </h1>
                    <p className="text-sm text-foreground w-[50%] mt-2">
                        Traverse a curated universe of digital experiences. From
                        high-octane simulations to ethereal chronicles, your
                        ultimate library awaits in the GameExplorer Nexus.
                    </p>

                    <div className="flex items-center gap-4">
                        <Button variant="solid" className="text-sm">
                            Browse Games
                            <Compass
                                size={14}
                                className="text-primary-foreground"
                            />
                        </Button>
                        <Button variant="ghost" className="text-sm">
                            View Roadmap
                            <Map size={14} className="text-primary" />
                        </Button>
                    </div>
                </div>
            </div>

            <section className="px-4 py-20">
                <div className="flex mb-10 items-center w-full justify-between  gap-2 font-press">
                    <h1 className="flex  items-center gap-2 font-press">
                        <Gamepad2 />
                        Games List
                    </h1>
                    <NavLink
                        className="text-shadow-primary flex items-center gap-1 group text-xs text-shadow-2xs"
                        to="/games"
                    >
                        explore more games{" "}
                        <ArrowRight className="group-hover:translate-x-1 transition-transform group-hover:text-primary" />
                    </NavLink>
                </div>

                {loading ? (
                    <Spinner />
                ) : games.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {games.slice(0, 8).map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center mt-10 text-foreground">
                        No games found. Please try again later.
                    </p>
                )}
            </section>

            <CommunitySection />
        </div>
    );
};

const CommunitySection = () => {
    return (
        <>
            <section className="bg-background py-16 px-4 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
                    <div
                        className="relative overflow-hidden min-h-96 bg-[url('https://images.wallpapersden.com/image/wxl-call-of-duty-modern-warfare-2-gaming-poster_84246.jpg')] bg-cover bg-center
            before:absolute before:inset-0 before:bg-black/50 before:z-0"
                    >
                        <div className="relative z-10 flex flex-col justify-end h-full p-8">
                            <h2 className="text-white font-press text-lg font-bold mb-3">
                                Join the Vanguard
                            </h2>
                            <p className="text-white/70 text-sm mb-6 w-[80%]">
                                Access beta programs, exclusive community
                                events, and influence the future of your
                                favorite titles.
                            </p>
                            <Button variant="ghost" className="w-fit">
                                enter community
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex-1  border border-border/40 bg-card/20 flex flex-col items-center justify-center gap-3 p-8 text-center">
                            <span className="text-3xl text-purple-400">⚡</span>
                            <h3 className="text-white font-press font-semibold text-xs">
                                Fast Access
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Optimized launcher for instant play capability.
                            </p>
                        </div>

                        <div className="flex-1  border border-border/40 bg-card/20 flex flex-col items-center justify-center gap-3 p-8 text-center">
                            <span className="text-3xl text-cyan-400">👥</span>
                            <h3 className="text-white font-press font-semibold text-xs">
                                Global Squads
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Connect with millions of explorers worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-background border-t border-white/10 px-10 py-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="text-white font-press font-bold text-sm tracking-widest uppercase">
                        GameExplorer
                    </span>

                    <nav className="flex items-center gap-6 text-[11px] text-muted-foreground uppercase tracking-widest">
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Privacy Protocol
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Terms of Engagement
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            API Access
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Support
                        </a>
                    </nav>

                    <p className="text-[11px] text-muted-foreground uppercase tracking-widest">
                        © 2024 GameExplorer HUD. All Systems Operational.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Home;
