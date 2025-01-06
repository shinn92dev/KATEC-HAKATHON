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
    const totalAmount = transactions.reduce(
        (sum, transaction) => sum + transaction.amount,
        0
    );
    const calculateChange = (totalAmount: number): number => {
        const totalRounded = Math.floor(totalAmount); // 정수 부분만 사용
        const totalLength = totalRounded.toString().length; // 자리수 파악
        if (totalLength === 1) {
            // 1자리 수일 경우
            return 10 - totalAmount;
        } else if (totalLength === 2 && totalRounded < 50) {
            // 2자리 수면서 50 미만일 경우
            return 50 - totalAmount;
        } else {
            // 그 외 (100의 배수로 올림)
            const nextHundred = Math.ceil(totalRounded / 100) * 100;
            return nextHundred - totalAmount;
        }
    };
    const change = calculateChange(totalAmount);

    return (
        <div className="flex flex-col items-center">
            <div className="bg-blue-100 text-blue-800 rounded-lg shadow-md p-4 w-full max-w-md text-center mb-6">
                <h1 className="text-2xl font-bold">Total Amount</h1>
                <p className="text-xl font-semibold">
                    ${totalAmount.toFixed(2)}
                </p>
                <p className="text-gray-700 mt-2">
                    You can make a small difference by donating the extra:{" "}
                    <span className="text-blue-600 font-bold">
                        ${change.toFixed(2)}
                    </span>
                </p>
            </div>
            <div className="w-full flex flex-col items-center">
                {sortedTransactions.map((transaction, index) => (
                    <TransactionDetail
                        key={index}
                        date={transaction.date}
                        title={transaction.title}
                        amount={transaction.amount}
                    />
                ))}
            </div>
        </div>
    );
};

export default TransactionPage;
