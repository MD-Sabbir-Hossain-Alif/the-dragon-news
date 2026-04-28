import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const NewsDetails = ({ news }) => {
    const { title, image_url, details, category_id } = news;
    return (
        <div className="p-7.5 border rounded-[5px]">
            <Image
                src={image_url}
                alt={title}
                height={411}
                width={789}
                loading="eager"
                className="w-full mb-5"
            ></Image>
            <h4 className="text-2xl font-bold leading-11 mb-2">{title}</h4>
            <p className="mb-8">{details}</p>

            <Button
                className="rounded-none text-white bg-[#D72050]"
                variant="outline"
            >
                <IoIosArrowRoundBack />
                <Link href={`/category/${category_id}`}>
                    All news in this category
                </Link>
            </Button>
        </div>
    );
};

export default NewsDetails;
