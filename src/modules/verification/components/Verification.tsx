'use client';
import {FormEvent} from "react";
import {useRouter, useSearchParams} from 'next/navigation'
import {useAppDispatch, useAppSelector} from "@/hooks/useAppSelector";
import {signIn} from "next-auth/react";
import {verificationFetch} from "@/modules/verification/api/verificationFetch";
import {IVerify} from "@/modules/verification/models/IVerify";
import {userSlice} from "@/store/reducers/UserSlice";

export const Verification = () => {
    const router = useRouter()
    const {emailByVerification} = useAppSelector(state => state.userReducer)
    const {setEmailByVerification} = userSlice.actions
    const dispatch = useAppDispatch()


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const response = await signIn("credentials", {
            email: emailByVerification,
            verification_code: formData.get('verification_code'),
            redirect: false,
        });
        if (response) {
            console.log(response)
            dispatch(setEmailByVerification(''))
            router.push("/");
        }
    }

    return (
        <form className="login-form"
              onSubmit={(event) => handleSubmit(event)
        }>
            <input type="text" name="verification_code" required/>
            <button type="submit">Sign In</button>
        </form>
    );
};