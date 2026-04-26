import { redirect } from "next/navigation";

const defaultCategoryId = "01";
const HomePage = () => {
    return redirect(`/category/${defaultCategoryId}`);
};

export default HomePage;
