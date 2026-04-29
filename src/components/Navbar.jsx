"use client";
import Image from "next/image";
import { Button, Spinner } from "@heroui/react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    // console.log(user.name, user.image isPending);
    return (
        <div className="container mx-auto flex  items-center mt-8.5">
            <div className="flex-1"></div>

            <ul className="flex-1 flex justify-center items-center gap-4 text-lg text-[#706F6F] font-medium">
                <li>
                    <NavLink href="/">Home</NavLink>
                </li>
                <li>
                    <NavLink href="/about">About</NavLink>
                </li>
                <li>
                    <NavLink href="/career">Career</NavLink>
                </li>
            </ul>

            {isPending ? (
                <Spinner size="sm" />
            ) : user ? (
                <div className="flex-1 flex justify-end items-center gap-2.5">
                    <h2>Hello, {user.name}</h2>
                    <Image
                        src={user.image || userAvatar}
                        alt="user avater"
                        height={41}
                        width={41}
                        className="rounded-full"
                    />
                    <Button
                        onClick={async () => await authClient.signOut()}
                        className="bg-[#403F3F] text-white rounded-none px-8"
                    >
                        Logout
                    </Button>
                </div>
            ) : (
                <div className="flex-1 flex justify-end items-center">
                    <Link href="/login">
                        <Button className="bg-[#403F3F] text-white rounded-none px-8">
                            Login
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
