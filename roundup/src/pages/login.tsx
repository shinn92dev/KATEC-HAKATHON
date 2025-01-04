import React from 'react';

const LoginPage: React.FC = () => {
    return (
        <div className="login-page">
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
