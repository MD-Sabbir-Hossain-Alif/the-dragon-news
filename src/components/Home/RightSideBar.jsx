import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Avatar, Description, Label, ListBox } from "@heroui/react";
import Image from "next/image";
import Swimming from "@/assets/swimming.png";
import Class from "@/assets/class.png";
import PlayGround from "@/assets/playground.png";
import BG from "@/assets/bg.png";
import SocialLogin from "./SocialLogin";

const RightSideBar = () => {
    return (
        <>
            {/* Login section */}
            <section className="flex flex-col gap-3 mt-4">
                <SocialLogin></SocialLogin>
            </section>
            {/* find section */}
            <section>
                <h3 className="mt-7.5 mb-5 text-xl text-[#403F3F] font-semibold">
                    Find Us On
                </h3>
                <ListBox
                    aria-label="Users"
                    className="w-full border rounded-[5px]"
                    selectionMode="single"
                >
                    <ListBox.Item id="1" textValue="Facebook">
                        <Avatar size="sm">
                            <FaFacebookF />
                        </Avatar>
                        <div className="flex flex-col">
                            <Label>Facebook</Label>
                        </div>
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="2" textValue="Twitter">
                        <Avatar size="sm">
                            <FaTwitter />
                        </Avatar>
                        <div className="flex flex-col">
                            <Label>Twitter</Label>
                        </div>
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="3" textValue="Instagram">
                        <Avatar size="sm">
                            <FaInstagram />
                        </Avatar>
                        <div className="flex flex-col">
                            <Label>Instagram</Label>
                        </div>
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                </ListBox>
            </section>
            {/* q-zone section */}
            <section className="bg-[#F3F3F3] py-4 mt-5">
                <h3 className="ml-4 mb-5 text-xl text-[#403F3F] font-semibold">
                    Q-Zone
                </h3>
                <div className="flex flex-col gap-5">
                    <Image
                        src={Swimming}
                        alt="swimming"
                        height={220}
                        width={260}
                        className="w-full h-auto"
                    ></Image>
                    <Image
                        src={Class}
                        alt="swimming"
                        height={220}
                        width={260}
                        className="w-full h-auto"
                    ></Image>
                    <Image
                        src={PlayGround}
                        alt="swimming"
                        height={220}
                        width={260}
                        className="w-full h-auto"
                    ></Image>
                </div>
            </section>
            <div>
                <Image
                    src={BG}
                    alt="swimming"
                    height={500}
                    width={260}
                    className="w-full h-auto mt-5"
                ></Image>
            </div>
        </>
    );
};

export default RightSideBar;
