"use client";
import { useState } from "react";

const NewsDescription = ({ details }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div>
            <p className={`${expanded ? "" : "line-clamp-4"} text-[#706F6F]`}>
                {details}
            </p>

            <button
                className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent font-semibold"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? "Read less" : "Read more"}
            </button>
        </div>
    );
};

export default NewsDescription;
