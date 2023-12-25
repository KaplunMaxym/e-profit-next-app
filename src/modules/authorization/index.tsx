import React from 'react';
import {SignInForm} from "@/modules/authorization/components/SignInForm";

const Auth = () => {
    return (
        <div className="stack">
            <h1>Authorization</h1>
            <SignInForm/>
        </div>
    );
};

export {Auth}