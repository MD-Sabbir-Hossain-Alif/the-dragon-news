import { Spinner } from "@heroui/react";
import React from "react";

const LoadingPageCategory = () => {
    return (
        <div className="flex justify-center items-center h-[50vh]">
            <div className="flex flex-col items-center gap-2">
                <Spinner size="xl" />
                <span className="text-xs text-muted">News Loading...</span>
            </div>
        </div>
    );
};

export default LoadingPageCategory;
