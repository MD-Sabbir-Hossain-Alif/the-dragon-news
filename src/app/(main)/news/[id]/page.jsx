import RightSideBar from "@/components/Home/RightSideBar";
import NewsDetails from "@/components/NewsDetails/NewsDetails";
import { getNewsDetailsById } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    // console.log(id);
    const news = await getNewsDetailsById(id);
    return {
        title: news.title,
        description: news.details,
    };
};

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

    const news = await getNewsDetailsById(id);
    // console.log(news);
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-9">
                    <h4 className="text-xl font-semibold mb-5">Dragon News</h4>
                    <NewsDetails news={news}></NewsDetails>
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

export default NewsDetailsPage;
