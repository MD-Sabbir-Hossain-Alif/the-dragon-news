import AllCatagory from "@/components/Home/AllCatagory";
import RightSideBar from "@/components/Home/RightSideBar";
import NewsCard from "@/components/Home/NewsCard";
import { getAllCatagory, getNewsByCatagoryId } from "@/lib/data";

const CategoryNewsPage = async ({ params }) => {
    const paramsRes = await params;
    const categoryId = paramsRes.id;
    // console.log(categoryId);

    const data = await getAllCatagory();
    const newsCategory = data.data.news_category;
    // console.log(newsCategory);

    const newsData = await getNewsByCatagoryId(categoryId);
    const news = newsData.data;
    // console.log(news);
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-6 mt-10">
                <div className="col-span-3">
                    <h2 className="text-[#403F3F] text-xl font-semibold mb-5">
                        All Catagory
                    </h2>
                    <ul className="flex flex-col gap-1">
                        {newsCategory.map((category) => (
                            <AllCatagory
                                key={category.category_id}
                                category={category}
                                activeId={categoryId}
                            ></AllCatagory>
                        ))}
                    </ul>
                </div>
                <div className="col-span-6">
                    <h2 className="text-[#403F3F] text-xl font-semibold">
                        Dragon News Home
                    </h2>
                    <div className="space-y-4 mt-5">
                        {news.length > 0 ? (
                            news.map((newsItem) => (
                                <NewsCard
                                    key={newsItem._id}
                                    newsItem={newsItem}
                                ></NewsCard>
                            ))
                        ) : (
                            <div className="mt-5 flex justify-center items-center py-25 border rounded-[5px] shadow">
                                <h3 className="text-3xl opacity-50">
                                    No News Available
                                </h3>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-span-3">
                    <h2 className="text-[#403F3F] text-xl font-bold">
                        Login With
                    </h2>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default CategoryNewsPage;
