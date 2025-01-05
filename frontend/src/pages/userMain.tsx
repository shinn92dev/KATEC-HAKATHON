import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserMainPage: React.FunctionComponent = () => {
    const [isConnected, setIsConnected] = useState<boolean>(() => {
        // 새로고침 시 localStorage에서 값을 가져와 초기화
        const savedState = localStorage.getItem("isConnected");
        return savedState === "true"; // 문자열 비교
    });
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
        <div className="logged-out-page text-center tracking-wider leading-loose content">
            {isConnected ? (
                <>
                    <h2 className="text-3xl font-bold">Hi UserName,</h2>

                    <div>
                        From last donation, you have saved
                        <div>$15.80</div>
                        to donate. You can donate it to save the world.
                    </div>

                    <button className="rounded-full bg-blue-500	w-1/4">
                        <Link to="/login" className="text-white">
                            Who need help?
                        </Link>
                    </button>
                </>
            ) : (
                <>
                    <h2 className="text-3xl font-bold">Welcome!</h2>
                    <p>
                        To enjoy the full features of this app, please connect
                        your PayPal account. Proceed to the PayPal page to grant
                        access to your information. Once you've completed the
                        process, return to this page.
                    </p>
                    <button onClick={startOnboarding}>Connect</button>
                </>
            )}
        </div>
    );
};

export default UserMainPage;
