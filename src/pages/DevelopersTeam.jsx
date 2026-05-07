import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getGameDevelopers } from "../api/gamesApi";
import Spinner from "../components/ui/Spinner";
import { ArrowLeft } from "lucide-react";
import DeveloperCard from "../components/DeveloperCard";

const DevelopersTeam = () => {
    const { id } = useParams();

    const [developers, setDevelopers] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        async function fetchDevelopers() {
            try {
                setLoading(true);
                const developers = await getGameDevelopers(id);
                setDevelopers(developers.results);
                console.log("Developers:", developers);
            } catch (error) {
                setError(error.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        }

        fetchDevelopers();
    }, [id]);

    if (loading)
        return (
            <div className="h-screen flex items-center justify-center w-full">
                <Spinner />
            </div>
        );
    if (error)
        return <div className="mt-20 bg-red-200 text-red-500">{error}</div>;

    return (
        <div className="p-4 mt-20">
            <button
                className="text-shadow-primary cursor-pointer w-fit mb-4 font-press flex items-center gap-1 group text-xs text-shadow-2xs"
                onClick={() => window.history.back()}
            >
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform group-hover:text-primary" />
                back to game details
            </button>
            <h2 className="font-press">Developers Team</h2>
            <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {developers.map((developer) => (
                    <DeveloperCard key={developer.id} developer={developer} />
                ))}
            </div>
        </div>
    );
};

export default DevelopersTeam;
