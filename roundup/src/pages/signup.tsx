import React from "react";
import { SignUp } from "@clerk/clerk-react";

const SignupPage: React.FC = () => {
    return (
        <div className="signup">
            User name <br />
            Email address <br />
            Paypal account ID <br />
            Preferred organization <br />
            Preferred field <br />
        </div>
    );
};

export default SignupPage;
