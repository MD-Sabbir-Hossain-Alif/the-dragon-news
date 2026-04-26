import React from "react";
import AllCatagory from "./AllCatagory";
import RightSideBar from "./RightSideBar";

const getAllCatagory = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/news/categories",
    );
    return res.json();
};

const HomePage = async () => {
    const data = await getAllCatagory();
    const newsCategory = data.data.news_category;
    // console.log(newsCategory);
    return (
        <div className="grid grid-cols-12 gap-6 mt-10">
            <div className="col-span-2">
                <h2 className="text-[#403F3F] text-xl font-semibold mb-5">
                    All Catagory
                </h2>
                <ul className="flex flex-col gap-1">
                    {newsCategory.map((category) => (
                        <AllCatagory
                            key={category.category_id}
                            category={category}
                            activeId={"02"}
                        ></AllCatagory>
                    ))}
                </ul>
            </div>
            <div className="col-span-8">
                <h2 className="text-[#403F3F] text-xl font-semibold">
                    Dragon News Home
                </h2>
            </div>
            <div className="col-span-2">
                <h2 className="text-[#403F3F] text-xl font-bold">Login With</h2>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default HomePage;
