import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home: React.FunctionComponent = () => {
    const [message, setMessage] = useState("");
    useEffect(() => {
        fetch("http://localhost:5000/")
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "OK") {
                    setMessage(data.message);
                } else {
                    setMessage("Unexpected response");
                }
            })
            .catch((err) => {
                console.error(err);
                setMessage("Connection error");
            });
    }, []);
    return (
        <div className="logged-out-page text-center tracking-wider leading-loose content">
            <p>server status: {message}</p>
            <h2 className="text-3xl font-bold">
                Small Coins <br />
                Big Difference
            </h2>
            <div>Together we spark brighter tomorrows</div>
            <button className="rounded-full bg-blue-500	w-1/4">
                <Link to="/login" className="text-white">
                    Start Saving the World
                </Link>
            </button>
        </div>
    );
};

export default Home;
