const HeroBackground = ({ imageBackground, children }) => (
    <div
        style={{ "--bg-image": `url('${imageBackground}')` }}
        className="relative [background-image:var(--bg-image)] bg-cover bg-top h-[90vh]
                   before:content-[''] before:absolute before:inset-0 
                   before:bg-linear-to-t before:from-background before:via-black/20 before:to-transparent 
                   before:z-10"
    >
        {children}
    </div>
);

export default HeroBackground;
