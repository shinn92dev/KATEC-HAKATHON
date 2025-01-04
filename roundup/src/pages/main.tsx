import React from 'react';

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
            <button className="rounded-full bg-blue-500	w-1/4">Start Saving the World</button>
        </div>
    );
}

export default Home;
