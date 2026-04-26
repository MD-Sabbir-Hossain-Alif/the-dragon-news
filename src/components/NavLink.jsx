"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathName = usePathname();
    // console.log("pathName", pathName);
    const isActive = pathName === href;
    return (
        <Link
            href={href}
            className={`${isActive ? "border-b-3 border-b-black" : ""}`}
        >
            {children}
        </Link>
    );
};

export default NavLink;
