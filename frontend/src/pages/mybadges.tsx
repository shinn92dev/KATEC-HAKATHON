import React from 'react';
import bcspcaLogo from '../assets/bcspca.png';

const BadgesPage: React.FC = () => {
    return (
        <div className="badges text-center tracking-wider leading-loose justify-center">
            <h2>Charity Badges</h2>

            <div className="grid-container">
                <img src={bcspcaLogo} alt="badge" className="badge-image" />
                <img src="https://www.seacoreseafood.com/user_files/upload/images/2017/Ocean%20Wise%20W-Seafood-Logo-RGB_K.png" alt="badge" className="badge-image" />
                <img src="https://www.bcchf.ca/wp-content/uploads/2024/04/bcch_foundation_DBLUE-JOLT_RGB.png" alt="badge" className="badge-image" />
                <img src="https://www.vancouversymphony.ca/site-content/uploads/2022/09/Copy-of-RRS_Logo_Stacked-e1664301185679.png" alt="badge" className="badge-image" />
                <img src="https://pacificwildalliance.org/wp-content/uploads/2020/09/campaign-icon-salmon-@2x.png" alt="badge" className="badge-image" />
                <img src="https://cdn.prod.website-files.com/6198248fab7fc465b00e696a/66180b41b52c53a2bc4b93a3_Stand%20earth%20logo.png" alt="badge" className="badge-image" />
            </div>
        </div>
    );
};

export default BadgesPage;
