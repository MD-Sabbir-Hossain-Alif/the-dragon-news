import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import userAvater from "@/assets/user.png";

const Navbar = () => {
    return (
        <div className="container mx-auto flex  items-center mt-8.5">
            <div className="flex-1"></div>

            <ul className="flex-1 flex justify-center items-center gap-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/career">Career</Link>
                </li>
            </ul>

            <div className="flex-1 flex justify-end items-center gap-2.5">
                <Image
                    src={userAvater}
                    alt="user avater"
                    height={41}
                    width={41}
                />
                <Button className="bg-[#403F3F] text-white rounded-none px-8">
                    Login
                </Button>
            </div>
        </div>
    );
};

export default Navbar;
