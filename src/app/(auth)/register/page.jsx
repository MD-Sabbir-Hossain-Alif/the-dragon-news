import Register from "@/components/Auth/Register";

export const metadata = {
    title: "The Dragon News - Register",
    description: "Dragon News Register Page",
};

const RegisterPage = () => {
    return (
        <div className="container mx-auto my-15">
            <Register></Register>
        </div>
    );
};

export default RegisterPage;
