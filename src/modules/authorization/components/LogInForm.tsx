"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type { FormEventHandler } from "react";
export const LogInForm = () => {
    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const response = await signIn("credentials", {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        });
        if (response) {
            console.log(response)
            router.push("/");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <input type="email" name="email" required />
            <input type="password" name="password" required />
            <button type="submit">Log In</button>
        </form>
    );
};