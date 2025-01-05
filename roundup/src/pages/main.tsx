import React from 'react';
import { Link } from 'react-router-dom'; 

const Home : React.FunctionComponent = () => {  
    return (
        <div className="logged-out-page text-center tracking-wider leading-loose">
            <h2 className="text-3xl font-bold">
                Small Coins <br />
                Big Difference
            </h2>
            <div>
                Together we spark brighter tomorrows
            </div>
            <button 
            className="rounded-full bg-blue-500	w-1/4">
                <Link to="/login" className="text-white">
                    Start Saving the World
                </Link>
            </button>
        </div>
    );
}

export default Home;
