import Link from "next/link";

const AllCatagory = ({ category, activeId }) => {
    return (
        <li
            className={`py-4 text-[#9F9F9F] text-xl font-medium text-center rounded-[5px] ${activeId === category.category_id && "bg-gray-200 text-[#403F3F] font-semibold"}`}
        >
            <Link className="block" href={`/category/${category.category_id}`}>
                {category.category_name}
            </Link>
        </li>
    );
};

export default AllCatagory;
