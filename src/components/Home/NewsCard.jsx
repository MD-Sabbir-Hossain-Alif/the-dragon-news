import { Avatar, Button, Description, Label, ListBox } from "@heroui/react";
import Image from "next/image";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import NewsDescription from "./NewsDescription";
import StarRatingComp from "./StarRatingComp";
import { IoEye } from "react-icons/io5";
import Link from "next/link";

const NewsCard = ({ newsItem }) => {
    const { title, author, image_url, details, rating, total_view } = newsItem;
    // console.log(newsItem._id);
    return (
        <div className="text-[#403F3F] border rounded-[5px]">
            <ListBox
                aria-label="Users"
                className="w-full p-0"
                selectionMode="single"
            >
                <ListBox.Item
                    id="1"
                    textValue="Bob"
                    className=" justify-between bg-[#F3F3F3] hover:bg-none rounded-none py-4 px-5"
                >
                    <Avatar size="sm">
                        <Avatar.Image alt={author.name} src={author.img} />
                        <Avatar.Fallback>B</Avatar.Fallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <Label>{author.name}</Label>
                        <Description>{author.published_date}</Description>
                    </div>
                    <div className="ml-auto flex justify-center items-center text-2xl gap-2.5">
                        <CiBookmark />
                        <CiShare2 />
                    </div>
                </ListBox.Item>
            </ListBox>
            <div className="m-5 mt-4">
                <h4 className="text-xl font-bold">{title}</h4>
                <div>
                    <Image
                        src={image_url}
                        alt={title}
                        height={260}
                        width={520}
                        className="w-full mt-5 mb-8"
                    ></Image>
                    <NewsDescription details={details}></NewsDescription>
                    <hr className="border my-5" />
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <StarRatingComp
                                    rating={rating}
                                ></StarRatingComp>{" "}
                                <span>{rating.number}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoEye />
                                <span>{total_view}</span>
                            </div>
                        </div>
                        <Button variant="outline">
                            <Link href={`/news/${newsItem._id}`}>
                                See Details
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
