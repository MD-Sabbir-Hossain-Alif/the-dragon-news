import Login from "@/components/Auth/Login";

export const metadata = {
    title: "The Dragon News - Login",
    description: "Dragon News Login Page",
};

const LoginPage = () => {
    return (
        <div className="container mx-auto my-15">
            <Login></Login>
        </div>
    );
};

export default LoginPage;
