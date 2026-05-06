import { Gamepad2 } from "lucide-react";
import React from "react";

const Spinner = () => {
    return (
        <div className="flex items-center justify-center py-20">
            <div className="size-20 flex items-center justify-center p-3 border-2 border-primary/20 border-t-primary rounded-full animate-spin">
                <Gamepad2 className="object-contain" />
            </div>
        </div>
    );
};

export default Spinner;
