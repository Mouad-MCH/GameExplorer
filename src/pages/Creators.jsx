import React, { useEffect, useState } from "react";
import { getAllCreators } from "../api/creatorsApi";

import CreatorCard from "../components/ui/CreatorCard";

const Creators = () => {
    const [creators, setCreators] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCreators = async () => {
            setLoading(true);
            try {
                const data = await getAllCreators();
                setCreators(data.results); // مهم
            } catch (error) {
                console.log("error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCreators();
    }, []);

    if (loading) return <p className="mt-20">Loading...</p>;

    return (
        <div className="creators-container">
            <h1 className="titre">Directory</h1>
            <h4 className="soustitre">INDUSTRY CREATORS</h4>
            <p className="paragraphe">
                A curated directory of the architects behind the world’s most
                immersive digital experiences. Discover the visionaries shaping
                the future of interactive entertainment.
            </p>
            <div className="creators-grid">
                {creators.map((creator) => (
                    <CreatorCard key={creator.id} creator={creator} />
                ))}
            </div>
        </div>
    );
};

export default Creators;
