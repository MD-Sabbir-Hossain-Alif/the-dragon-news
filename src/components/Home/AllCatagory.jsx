const getAllCatagory = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/news/categories",
    );
    return res.json();
};

const AllCatagory = async () => {
    const data = await getAllCatagory();
    const newsCategory = data.data.news_category;
    // console.log(newsCategory);
    return (
        <ul className="flex flex-col">
            {newsCategory.map((category) => (
                <li
                    className="py-4 text-[#9F9F9F] text-xl font-medium text-center rounded-xl"
                    key={category.category_id}
                >
                    {category.category_name}
                </li>
            ))}
        </ul>
    );
};

export default AllCatagory;
