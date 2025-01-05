import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

import Home from "./pages/main";
import LoginPage from "./pages/login";
import UserProfile from "./pages/profile";
import UserMainPage from "./pages/userMain";
import SignupPage from "./pages/signup";

const App: React.FC = () => {
    const { isSignedIn } = useAuth();
    if (isSignedIn === undefined) {
        return <div>Loading...</div>;
    }
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        isSignedIn ? (
                            <Navigate to="/usermain" replace />
                        ) : (
                            <Home />
                        )
                    }
                />
                <Route
                    path="/login"
                    element={
                        isSignedIn ? (
                            <Navigate to="/usermain" replace />
                        ) : (
                            <LoginPage />
                        )
                    }
                />
                <Route
                    path="/profile"
                    element={
                        isSignedIn ? (
                            <UserProfile />
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    }
                />
                <Route
                    path="/usermain"
                    element={
                        isSignedIn ? (
                            <UserMainPage />
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    }
                />
                <Route
                    path="/signup"
                    element={
                        !isSignedIn ? (
                            <SignupPage />
                        ) : (
                            <Navigate to="/signup" replace />
                        )
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
