import { useEffect, useState } from "react";
import { getCreatorDetails } from "../api/creatorsApi";
import { useParams } from "react-router-dom";
import HeroBackground from "../components/creator-details/HeroBackground";
import CreatorHeroInfo from "../components/creator-details/CreatorHeroInfo";
import CreatorAbout from "../components/creator-details/CreatorAbout";
import CreatorRatings from "../components/creator-details/CreatorRatings";
import CreatorTimeline from "../components/creator-details/CreatorTimeline";
import CreatorPlatforms from "../components/creator-details/CreatorPlatforms";
import CreatorFooter from "../components/creator-details/CreatorFooter";

const CreatorDetails = () => {
    const { id } = useParams();
    const [creator, setCreator] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchCreatorDetails() {
            setLoading(true);
            setError(null);
            try {
                const data = await getCreatorDetails(id);
                setCreator(data);
            } catch (err) {
                setError(err.message || "Failed to load creator details.");
            } finally {
                setLoading(false);
            }
        }
        fetchCreatorDetails();
    }, [id]);

    if (loading)
        return (
            <div className="mt-20 flex items-center justify-center h-[80vh]">
                <p className="text-secondary-foreground animate-pulse text-lg">
                    Loading...
                </p>
            </div>
        );

    if (error)
        return (
            <div className="mt-20 flex flex-col items-center justify-center h-[80vh] gap-4">
                <p className="text-red-400 text-lg font-semibold">⚠️ {error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-primary text-white text-sm hover:bg-primary/80 transition-colors"
                >
                    Try Again
                </button>
            </div>
        );

    return (
        <div className="mt-20">
            <HeroBackground imageBackground={creator.image_background}>
                <CreatorHeroInfo creator={creator} />
            </HeroBackground>

            <div className="w-full grid grid-cols-3 p-4 gap-4">
                <CreatorAbout description={creator.description} />
                <CreatorRatings ratings={creator.ratings} />
            </div>

            <div className="grid w-full grid-cols-3 p-4 gap-4">
                <h2 className="text-lg font-press col-span-3 font-bold mt-6 text-white">
                    Career Timeline ({creator.timeline?.length} Years)
                </h2>
                <CreatorTimeline timeline={creator.timeline} />
                <CreatorPlatforms platforms={creator.platforms} />
            </div>

            <CreatorFooter updated={creator.updated} slug={creator.slug} />
        </div>
    );
};

export default CreatorDetails;
