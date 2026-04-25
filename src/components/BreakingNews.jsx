"use client";
import { Button } from "@heroui/react";
import Marquee from "react-fast-marquee";

const news = [
    { id: 1, title: "Global Markets Rally Amid Economic Recovery Hopes" },
    { id: 2, title: "New Breakthrough in Renewable Energy Technology" },
    { id: 3, title: "Major Sports Event Ends with Historic Victory" },
    { id: 4, title: "Tech Giants Announce Collaboration on AI Safety" },
];

const BreakingNews = () => {
    return (
        <div className="flex items-center bg-red-200 p-2 gap-2 container mx-auto mt-7.5">
            <Button
                onPress={() => console.log("Button pressed")}
                className="bg-red-700 text-white rounded-none px-4"
            >
                Latest
            </Button>

            <Marquee pauseOnHover speed={50}>
                {news.map((item) => (
                    <span
                        key={item.id}
                        className="mr-6 flex items-center gap-6"
                    >
                        {item.title}
                        <span className="text-red-600">•</span>
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default BreakingNews;
