"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    return (
        <>
            <Button
                onClick={() => handleGoogleLogin()}
                variant="outline"
                className=" text-blue-700 border border-blue-700 w-full rounded-md"
            >
                <FaGoogle />
                Login with Google
            </Button>

            <Button
                variant="outline"
                className=" text-gray-800 border border-gray-800 w-full rounded-md"
            >
                <FaGithub />
                Login with GitHub
            </Button>
        </>
    );
};

export default SocialLogin;
