import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <p className="font-press text-[120px] leading-none text-primary/20 select-none">
                404
            </p>

            <div className="-mt-4 mb-6">
                <h1 className="font-press text-2xl text-secondary-foreground mb-2">
                    Page Not Found
                </h1>
                <p className="text-secondary-foreground/50 text-sm max-w-sm">
                    Looks like this level doesn't exist. The page you're looking
                    for may have been moved or deleted.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-5 py-2.5 border border-secondary text-secondary-foreground/70 font-press text-xs uppercase tracking-widest hover:bg-secondary/20 transition-colors cursor-pointer group"
                >
                    <ArrowLeft
                        size={14}
                        className="group-hover:-translate-x-1 transition-transform"
                    />
                    go back
                </button>

                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/30 text-primary font-press text-xs uppercase tracking-widest hover:bg-primary/20 transition-colors cursor-pointer"
                >
                    home
                </button>
            </div>
        </div>
    );
}
