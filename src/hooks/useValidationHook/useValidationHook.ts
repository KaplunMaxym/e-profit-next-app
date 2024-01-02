"use client";
// useValidation.js
import { useState } from 'react';
import {IErrorData} from "@/hooks/useValidationHook/Interface";
const useValidation = () => {
    const startedErrorObject = {
        email: {},
        pas: {},
        pasConf: {}
    }
    const [errors, setErrors] = useState<IErrorData>(startedErrorObject);
    const [pas, setPas] = useState('')
    const validateEmail = (email: string): any => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrors({...errors,
                email: {
                    correct: false,
                    message: "Invalid email format"
                }
            })
            return 'Invalid email format';
        }
        setErrors({
            ...errors,
            email: {
                correct: true,
                message: "Correct"
            }
        })
        return '';
    };
    const validatePassword = (password: string) => {
        setPas(password)
        if (password.length < 8) {
            setErrors({
                ...errors,
                pas: {
                    correct: false,
                    message: "Password must be at least 8 characters"
                }
            })
            return 'Password must be at least 8 characters';
        }
        if (!/[A-Z]/.test(password)) {
            setErrors({
                ...errors,
                pas: {
                    correct: false,
                    message: "Password must contain at least one uppercase letter"
                }
            })
            return 'Password must contain at least one uppercase letter';
        }
        if (!/\d/.test(password)) {
            setErrors({
                ...errors,
                pas: {
                    correct: false,
                    message: "Password must contain at least one digit"
                }
            })
            return 'Password must contain at least one digit';
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setErrors({
                ...errors,
                pas: {
                    correct: false,
                    message: "Password must contain at least one special character"
                }
            })
            return 'Password must contain at least one special character (!@#$%^&*(),.?":{}|<>)';
        }
        setErrors({
            ...errors,
            pas: {
                correct: true,
                message: "Correct"
            }
        })
        return '';
    };

    const validatePasswordConfirmation = (passwordConfirmation: string) => {
        if(passwordConfirmation !== pas){
            setErrors({
                ...errors,
                pasConf: {
                    correct: false,
                    message: "password and password confirmation not the same!"
                }
            })
            return "password and password confirmation not the same!"
        }
        setErrors({
            ...errors,
            pasConf: {
                correct: true,
                message: "Correct"
            }
        })
        return '';
    };

    return {errors, validateEmail, validatePassword, validatePasswordConfirmation};
};

export default useValidation;
