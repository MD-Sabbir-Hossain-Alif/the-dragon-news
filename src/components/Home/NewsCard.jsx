import React from "react";

const NewsCard = ({ newsItem }) => {
    // console.log(newsItem._id);
    return <div className="p-5 border">{newsItem.title}</div>;
};

export default NewsCard;
