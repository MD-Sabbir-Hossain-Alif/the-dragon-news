import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRatingComp = ({ rating }) => {
    const totalStars = 5;

    return (
        <div className="flex gap-1 text-[#FF8C47]">
            {[...Array(totalStars)].map((_, i) => {
                const starValue = i + 1;

                if (rating.number >= starValue) {
                    return (
                        <span key={i}>
                            <FaStar />
                        </span>
                    ); // full star
                } else if (rating.number >= starValue - 0.5) {
                    return (
                        <span key={i}>
                            <FaStarHalfAlt />
                        </span>
                    ); // half (you can replace with icon)
                } else {
                    return (
                        <span key={i}>
                            <FaRegStar />
                        </span>
                    ); // empty
                }
            })}
        </div>
    );
};
export default StarRatingComp;
