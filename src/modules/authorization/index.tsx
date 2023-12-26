import React from 'react';
import {LogInForm} from "@/modules/authorization/components/LogInForm";

const Auth = () => {
    return (
        <div className="stack">
            <h1>Authorization</h1>
            <LogInForm/>
        </div>
    );
};

export {Auth}