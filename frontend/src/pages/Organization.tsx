import React from "react";
import OrganizationCard from "../components/OrganizationCard";

const OrganizationPage: React.FC = () => {
    const ngos = [
        {
            name: "Pacific Wild Alliance",
            description:
                "Protecting wildlife and their habitat on the Pacific Coast of Canada.",
            logoUrl:
                "https://pacificwildalliance.org/wp-content/uploads/2020/09/campaign-icon-salmon-@2x.png",
            donateLink: "https://pacificwild.org/?form=PW-MAIN&amount=100",
        },
        {
            name: "Rainbow Refugee Society",
            description: "Supporting LGBTQ+ refugees seeking safety in Canada.",
            logoUrl:
                "https://www.vancouversymphony.ca/site-content/uploads/2022/09/Copy-of-RRS_Logo_Stacked-e1664301185679.png",
            donateLink: "https://www.rainbowrefugee.com/donate",
        },
        {
            name: "Stand.earth",
            description:
                "Challenging corporations and governments to protect the environment.",
            logoUrl:
                "https://cdn.prod.website-files.com/6198248fab7fc465b00e696a/66180b41b52c53a2bc4b93a3_Stand%20earth%20logo.png",
            donateLink:
                "https://act.stand.earth/page/77077/donate/1?ea.tracking.id=web-top-nav-but",
        },
        {
            name: "Ocean Wise",
            description:
                "Inspiring and empowering communities to protect the oceans.",
            logoUrl:
                "https://www.seacoreseafood.com/user_files/upload/images/2017/Ocean%20Wise%20W-Seafood-Logo-RGB_K.png",
            donateLink: "https://ocean.org/action/ways-to-give/?form=donate",
        },
        {
            name: "British Columbia Search And Rescue Association",
            description:
                "Providing critical support for search and rescue operations in BC.",
            logoUrl:
                "https://bcsara.com/wp-content/uploads/2021/03/cropped-BCSARA-Logo-200-x-200.png",
            donateLink: "https://bcsara.com/donate/",
        },
        {
            name: "Pacific Salmon Foundation",
            description:
                "Restoring and protecting wild Pacific salmon and their ecosystems.",
            logoUrl:
                "https://cdn-ch-prod-bqhwa0ewbpg6eyc2.z01.azurefd.net/prod-img-cache/CDN-ik-images/charityprofile/2/5062/PacificSalmonFoundation_YELLOW_DKBLUE_RGB_Knockout_S.png",
            donateLink: "https://psf.ca/donate/online/",
        },
        {
            name: "BC Children’s Hospital Foundation",
            description:
                "Improving health care for children in British Columbia.",
            logoUrl:
                "https://www.bcchf.ca/wp-content/uploads/2024/04/bcch_foundation_DBLUE-JOLT_RGB.png",
            donateLink:
                "https://secure.bcchf.ca/Mighty/donate-monthly.cfm?Event=MightyLeague#donate",
        },
    ];
    return (
        <div className="w-full flex justify-center">
            <div className="bg-gray-50 min-h-screen p-6 flex flex-wrap gap-6 justify-center max-w-md">
                {ngos.map((ngo, index) => (
                    <OrganizationCard
                        key={index}
                        name={ngo.name}
                        description={ngo.description}
                        logoUrl={ngo.logoUrl}
                        donateLink={ngo.donateLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default OrganizationPage;
