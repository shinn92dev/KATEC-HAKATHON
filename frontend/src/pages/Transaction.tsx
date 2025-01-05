import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TransactionDetail from "../components/TransactionDetail";

const TransactionPage: React.FunctionComponent = () => {
    const transactions = [
        { date: "2025-01-03", title: "Uber", amount: 111.53 },
        { date: "2025-01-04", title: "Walmart", amount: 37.22 },
        { date: "2025-01-05", title: "Apple Store", amount: 136.03 },
        { date: "2025-01-05", title: "Walmart", amount: 126.54 },
        { date: "2025-01-04", title: "Target", amount: 95.57 },
        { date: "2025-01-03", title: "Best Buy", amount: 102.69 },
        { date: "2025-01-01", title: "Target", amount: 141.97 },
        { date: "2025-01-04", title: "Target", amount: 45.29 },
        { date: "2025-01-03", title: "Uber", amount: 119.97 },
        { date: "2025-01-04", title: "Spotify", amount: 44.02 },
    ];
    const sortedTransactions = [...transactions].sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    return (
        <div className="flex flex-col items-center">
            {sortedTransactions.map((transaction, index) => (
                <TransactionDetail
                    key={index}
                    date={transaction.date}
                    title={transaction.title}
                    amount={transaction.amount}
                />
            ))}
        </div>
    );
};

export default TransactionPage;
