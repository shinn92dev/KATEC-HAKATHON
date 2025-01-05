import React from "react";

interface OrganizationProps {
    name: string;
    description: string;
    logoUrl: string;
    donateLink: string;
}

const OrganizationCard: React.FunctionComponent<OrganizationProps> = ({
    name,
    description,
    logoUrl,
    donateLink,
}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 flex items-center gap-4 w-full max-w-md">
            <img
                src={logoUrl}
                alt={`${name} Logo`}
                className="h-16 w-16 object-contain rounded-full border"
            />
            <div>
                <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                <p className="text-gray-600 text-sm mb-2">{description}</p>
                <a
                    href={donateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    Donate Now
                </a>
            </div>
        </div>
    );
};

export default OrganizationCard;
