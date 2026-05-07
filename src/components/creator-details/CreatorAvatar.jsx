import React from "react";

const CreatorAvatar = ({ creator }) => {
    if (!creator.image) {
        return (
            <div className="w-32 h-32 bg-primary/80 flex items-center justify-center text-sm text-primary-foreground uppercase font-press font-bold">
                {creator?.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
            </div>
        );
    }
    return (
        <img
            src={creator.image}
            className="w-32 h-32 object-cover"
            alt={creator.name}
        />
    );
};

export default CreatorAvatar;
