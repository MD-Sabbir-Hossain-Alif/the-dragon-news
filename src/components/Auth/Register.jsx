"use client";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import {
    Button,
    FieldError,
    Form,
    Input,
    InputGroup,
    Label,
    TextField,
} from "@heroui/react";
import { useState } from "react";

const Register = () => {
    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        // console.log("Form submitted with:", userData);

        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            image: userData.image,
            password: userData.password,
            rememberMe: true,
        });
        // console.log("sign up response:", { data, error });
        if (error) {
            alert(error.message);
        }
        if (data) {
            alert("Registration Successful");
        }
    };
    return (
        <div className="max-w-188 w-full mx-auto bg-white p-19 rounded-[5px]">
            <h2 className="text-4xl text-center font-semibold">
                Register your account
            </h2>
            <hr className="border border-[#E7E7E7] my-12.5" />
            <Form className="flex flex-col gap-4 px-6 " onSubmit={onSubmit}>
                <TextField
                    name="name"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "Name must be at least 3 characters";
                        }
                        return null;
                    }}
                >
                    <Label className="mb-3 text-xl font-semibold">
                        Your Name
                    </Label>
                    <Input
                        className="rounded-[5px] bg-[#F3F3F3] p-4"
                        placeholder="Enter your name"
                    />
                    <FieldError />
                </TextField>

                <TextField className="w-full" name="image">
                    <Label className="mb-3 text-xl font-semibold">
                        Photo URL
                    </Label>
                    <Input
                        className="rounded-[5px] bg-[#F3F3F3] p-4"
                        placeholder="Enter your photo url"
                    />
                </TextField>

                <TextField
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                value,
                            )
                        ) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label className="mb-3 text-xl font-semibold">
                        Email address
                    </Label>
                    <Input
                        className="rounded-[5px] bg-[#F3F3F3] p-4"
                        name="email"
                        placeholder="Enter your email address"
                    />
                    <FieldError />
                </TextField>

                <TextField className="w-full" name="password">
                    <Label className="mb-3 text-xl font-semibold">
                        Password
                    </Label>
                    <InputGroup className="rounded-[5px] bg-[#F3F3F3] p-1.75">
                        <InputGroup.Input
                            className="w-full"
                            type={isVisible ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                        />
                        <InputGroup.Suffix className="pr-0">
                            <Button
                                isIconOnly
                                aria-label={
                                    isVisible
                                        ? "Hide password"
                                        : "Show password"
                                }
                                size="sm"
                                variant="ghost"
                                onPress={() => setIsVisible(!isVisible)}
                            >
                                {isVisible ? (
                                    <Eye className="size-4" />
                                ) : (
                                    <EyeSlash className="size-4" />
                                )}
                            </Button>
                        </InputGroup.Suffix>
                    </InputGroup>
                    <FieldError />
                </TextField>

                <Button
                    className="w-full bg-[#403F3F] text-white mt-1.5 p-6 rounded-[5px]"
                    type="submit"
                >
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;
