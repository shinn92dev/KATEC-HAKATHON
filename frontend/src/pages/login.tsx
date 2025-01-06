import React, { useState } from "react";
import { SignIn } from "@clerk/clerk-react";

const LoginPage: React.FC = () => {
    return (
        <div className="login-page content w-full flex justify-center pt-5">
            <SignIn path="/login" routing="path" />
        </div>
    );
};

export default LoginPage;
