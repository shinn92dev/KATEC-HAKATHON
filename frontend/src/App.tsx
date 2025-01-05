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
import TopBar from "./components/TopBar";
import TransactionPage from "./pages/Transaction";
import OrganizationPage from "./pages/Organization";
import { ChangeProvider } from "./components/context/ChangeContext";

const App: React.FC = () => {
    const { isSignedIn } = useAuth();
    if (isSignedIn === undefined) {
        return <div className="content">Loading...</div>;
    }
    return (
        <ChangeProvider>
            <Router>
                <div className="flex justify-center">
                    <TopBar />
                </div>

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
                    <Route
                        path="/transaction"
                        element={
                            isSignedIn ? (
                                <TransactionPage />
                            ) : (
                                <Navigate to="/signin" replace />
                            )
                        }
                    />
                    <Route
                        path="/organization"
                        element={<OrganizationPage />}
                    />
                </Routes>
            </Router>
        </ChangeProvider>
    );
};

export default App;
