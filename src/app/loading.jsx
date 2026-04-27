import { Spinner } from "@heroui/react";

const LoadingPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center gap-2">
                <Spinner size="xl" />
                <span className="text-xs text-muted">Page Loading...</span>
            </div>
        </div>
    );
};

export default LoadingPage;
