import React from "react";

import { Link, useNavigate } from "react-router-dom";
import SettingIcon from "./icons/Setting";
import { useAuth, UserButton } from "@clerk/clerk-react";

const TopBar: React.FunctionComponent = () => {
    const { isSignedIn } = useAuth();
    const navigate = useNavigate();
    const handleHomeClick = () => {
        if (isSignedIn) {
            navigate("/usermain");
        }
    };
    return (
        <div className="top-bar w-full max-w-md flex justify-between p-4 bg-white shadow-md">
            <div className="text-2xl font-bold" onClick={handleHomeClick}>
                My App
            </div>
            <div className="flex items-center">
                <div className="mr-5">
                    {isSignedIn ? <UserButton /> : <></>}
                </div>
                <SettingIcon />
            </div>
        </div>
    );
};

export default TopBar;
