import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";

const CLERK_KEY = process.env.REACT_APP_CLERK_KEY;

if (!CLERK_KEY) {
    throw new Error("ADD CLERK KEY");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ClerkProvider publishableKey={CLERK_KEY} afterSignOutUrl="/">
            <App />
        </ClerkProvider>
    </React.StrictMode>
);
