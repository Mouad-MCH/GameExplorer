import { ArrowBigRight } from "lucide-react";

const CreatorFooter = ({ updated, slug }) => (
    <div className="mt-12 p-4 border-t border-secondary flex justify-between items-center text-sm text-secondary-foreground/80">
        <p>last updated: {new Date(updated).toLocaleString()}</p>
        <a
            href={`https://rawg.io/creators/${slug}`}
            target="_blank"
            rel="noreferrer"
            className="mt-2 md:mt-0 flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
        >
            View on RAWG.io <ArrowBigRight size={20} />
        </a>
    </div>
);

export default CreatorFooter;
