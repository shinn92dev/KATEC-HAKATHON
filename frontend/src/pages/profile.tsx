import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
const UserProfile: React.FC = () => {

    const [isConnected] = useState<boolean>(() => {
            const savedState = localStorage.getItem("isConnected");
            return savedState === "true"; 
        });

        const { user } = useUser();
        const userName = user?.fullName || user?.id || user?.externalId;
        const userEmail = user?.emailAddresses.toString() || user?.id
        

        return (
            <div className="logged-out-page text-left tracking-wider leading-loose content flex justify-center">
                {isConnected ? (
                    <div className="ext-lg text-gray-800 mb-6">
                            Name: {userName} <br />
                            Email: {userEmail} <br />
                            Paypal status: Connected <br />
            
                    </div>
                ) : (
                    <>
                        <div className="ext-lg text-gray-800 mb-6">
                                Name: {userName} <br />
                                Email: {userEmail} <br />
                                Paypal status: Not connected <br />

                        </div>
                    </>
                )}
            </div>
        );

};

export default UserProfile;
