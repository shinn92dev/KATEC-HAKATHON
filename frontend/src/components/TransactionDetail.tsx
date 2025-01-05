import React from "react";

interface TransactionProps {
    date: string;
    title: string;
    amount: number;
}

const TransactionDetail: React.FunctionComponent<TransactionProps> = ({
    date,
    title,
    amount,
}) => {
    return (
        <div className="w-full max-w-md p-4 m-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <div className="text-sm text-gray-500 mb-2">{date}</div>
            <div className="flex justify-between items-center">
                <p className="text-xl font-semibold text-gray-800">{title}</p>
                <p className="text-xl font-bold text-blue-500">
                    ${amount.toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default TransactionDetail;
