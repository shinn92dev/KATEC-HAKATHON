import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home: React.FunctionComponent = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 via-white to-gray-100 p-6 max-w-md">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
                    <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
                        Tiny Steps, <br /> Huge Impact
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Together, we can change the world—one small act of
                        kindness at a time.
                    </p>
                    <Link to="/login">
                        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition">
                            Start Your Journey 🌍
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
