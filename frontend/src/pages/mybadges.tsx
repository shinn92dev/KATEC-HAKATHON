import React from 'react';
import bcspcaLogo from '../assets/bcspca.png';

const BadgesPage: React.FC = () => {
    return (
        <div className="badges text-center tracking-wider leading-loose justify-center">
            <h2>My Badges</h2>

            <div className="flex flex-row">
                <img src={bcspcaLogo} alt="badge" className="badge-image size-20" />
                <img src={bcspcaLogo} alt="badge" className="badge-image size-20" />
                <img src={bcspcaLogo} alt="badge" className="badge-image size-20" />
            </div>

        </div>
    );
};

export default BadgesPage;

