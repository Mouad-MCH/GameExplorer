const Button = ({
    children,
    variant = "solid",
    icon,
    className = "",
    ...props
}) => {
    const base =
        "flex cursor-pointer items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300";

    const variants = {
        solid: "border-2 border-primary/60 bg-primary text-primary-foreground hover:bg-primary/90",
        ghost: "border-2 border-primary/60 bg-transparent text-primary hover:bg-primary/10",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
            {icon}
        </button>
    );
};

export default Button;
