import React from "react";
import AllCatagory from "./AllCatagory";

const HomePage = () => {
    return (
        <div className="grid grid-cols-12 gap-6 mt-10">
            <div className="col-span-2">
                <h2 className="text-[#403F3F] text-xl font-semibold mb-5">
                    All Catagory
                </h2>
                <AllCatagory></AllCatagory>
            </div>
            <div className="col-span-8">
                <h2 className="text-[#403F3F] text-xl font-semibold">
                    Dragon News Home
                </h2>
            </div>
            <div className="col-span-2">
                <h2 className="text-[#403F3F] text-xl font-bold">Login With</h2>
            </div>
        </div>
    );
};

export default HomePage;
