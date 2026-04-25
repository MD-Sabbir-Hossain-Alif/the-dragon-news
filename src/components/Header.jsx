import React from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";

const Header = () => {
    return (
        <div className="text-center pt-12.5">
            <Image
                src={Logo}
                alt="the dragon news logo"
                width={300}
                height={200}
                loading="eager"
                className="mx-auto mb-5 w-117.75 h-auto"
            ></Image>
            <p className="mb-2.5">Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;
