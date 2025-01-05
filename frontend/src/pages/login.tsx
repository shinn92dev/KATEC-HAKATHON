import React, { useState } from "react";
import { SignIn } from "@clerk/clerk-react";

const LoginPage: React.FC = () => {
    return (
        <div className="login-page content">
            <SignIn path="/login" routing="path" />
            <h1>Login to Your Account</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
