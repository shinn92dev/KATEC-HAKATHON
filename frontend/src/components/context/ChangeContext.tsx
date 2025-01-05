import React, { createContext, useContext, useState, useEffect } from "react";

const ChangeContext = createContext<number | undefined>(undefined);

export const ChangeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [change, setChange] = useState<number>(0);

    useEffect(() => {
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

        const totalAmount = transactions.reduce(
            (sum, transaction) => sum + transaction.amount,
            0
        );

        const calculateChange = (totalAmount: number): number => {
            const totalRounded = Math.floor(totalAmount);
            if (totalRounded < 10) return 10 - totalAmount;
            if (totalRounded < 50) return 50 - totalAmount;
            return Math.ceil(totalAmount / 100) * 100 - totalAmount;
        };

        setChange(calculateChange(totalAmount));
    }, []);

    return (
        <ChangeContext.Provider value={change}>
            {children}
        </ChangeContext.Provider>
    );
};

export const useChange = () => useContext(ChangeContext);
