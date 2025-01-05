import React from "react";
import { Link } from "react-router-dom";
import SettingIcon from "./icons/Setting";

const TopBar: React.FunctionComponent = () => {
    return (
        <div className="top-bar fixed top-0 left-0 w-full flex justify-between p-4 bg-white shadow-md">
            <div className="text-2xl font-bold">My App</div>
            <div>
                <SettingIcon />
            </div>
        </div>
    );
};

export default TopBar;
