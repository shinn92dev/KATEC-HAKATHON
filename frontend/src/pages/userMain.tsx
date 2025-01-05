import React from 'react';
import { Link } from 'react-router-dom'; 


const UserMainPage : React.FunctionComponent = () => {  
    return (
        <div className="logged-out-page text-center tracking-wider leading-loose">
            <h2 className="text-3xl font-bold">
                Hi UserName,
            </h2>

            <div>
                From last donation, you have saved 
                <div>
                    $15.80
                </div>
                to donate. You can donate it to save the world.
            </div>

            <button 
            className="rounded-full bg-blue-500	w-1/4">
                <Link to="/login" className="text-white">
                    Who need help?
                </Link>
            </button>
        </div>
    );
}

export default UserMainPage;
