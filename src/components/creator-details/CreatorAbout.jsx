import { Info } from "lucide-react";

const CreatorAbout = ({ description }) => (
    <section className="bg-secondary/20 p-6 col-span-2 border border-secondary">
        <h2 className="text-lg font-bold font-press text-secondary-foreground mb-4 flex items-center gap-2">
            <Info className="text-primary size-5" /> About
        </h2>
        <div
            className="text-secondary-foreground/80 leading-relaxed text-base prose prose-invert max-w-none prose-p:mb-4 prose-h3:text-lg prose-h3:text-white prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-2 prose-a:text-emerald-400"
            dangerouslySetInnerHTML={{ __html: description }}
        />
    </section>
);

export default CreatorAbout;
