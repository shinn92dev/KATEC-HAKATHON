import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const UserMainPage: React.FunctionComponent = () => {
    const [isConnected, setIsConnected] = useState<boolean>(() => {
        // 새로고침 시 localStorage에서 값을 가져와 초기화
        const savedState = localStorage.getItem("isConnected");
        return savedState === "true"; // 문자열 비교
    });

    const { user } = useUser();
    const userName = user?.firstName || "there!";

    // Initial connection check
    useEffect(() => {
        fetch("http://localhost:5000/check_paypal_connected")
            .then((res) => res.json())
            .then((data) => {
                const savedState = localStorage.getItem("isConnected");
                const isLocalConnected = savedState === "true";
                if (data.connected !== isLocalConnected) {
                    localStorage.setItem("isConnected", "true");
                } else {
                    setIsConnected(data.connected);
                }
            })
            .catch((err) => console.error(err));
    }, []);

    // Redirect to paypal page to connect account
    const startOnboarding = async () => {
        try {
            const res = await fetch(
                "http://localhost:5000/create_partner_referral",
                {
                    method: "POST",
                }
            );
            const data = await res.json();
            if (data.action_url) {
                window.open(data.action_url, "_blank");
                setTimeout(() => {
                    setIsConnected(true);
                    localStorage.setItem("isConnected", "true");
                }, 500);
            } else {
                console.error("No action_url found");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="logged-out-page text-center tracking-wider leading-loose content flex justify-center">
            {isConnected ? (
                <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 max-w-md">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 text-center">
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                            Welcome, {userName}!
                        </h2>
                        <p className="text-lg text-gray-600">
                            From your last donation, you have saved:
                        </p>
                        <div className="text-4xl font-bold text-blue-600 my-4">
                            $15.80
                        </div>
                        <Link
                            to="/transaction"
                            className="text-sm text-blue-500 hover:underline"
                        >
                            See details
                        </Link>
                    </div>
                    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 max-w-md mt-2">
                        <p className="text-gray-500 mb-6">
                            You can donate it to save the world. Thank you for
                            making a difference!
                        </p>

                        <Link
                            to="/organization"
                            className="text-sm text-blue-500 hover:underline"
                        >
                            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition">
                                Who Needs Help?
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 max-w-md">
                        <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 text-center">
                            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                                Welcome! {userName}
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                To enjoy the full features of this app, please
                                connect your PayPal account. Proceed to the
                                PayPal page to grant access to your information.
                                Once you've completed the process, return to
                                this page.
                            </p>
                            <button
                                onClick={startOnboarding}
                                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition"
                            >
                                Connect
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default UserMainPage;
