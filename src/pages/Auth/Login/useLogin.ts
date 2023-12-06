import { useState, ChangeEvent } from "react";
import { formDataType, useLoginReturnType } from './login.types'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { loginServices } from "@/services";
import { validateEmail, validateRequired, validateSpaceString } from '@/utils/validation'

export const useLogin = (): useLoginReturnType => {

    const [loading, setLoading] = useState<boolean>(false)
    const goPage = useNavigate()

    const [formData, setFormData] = useState<formDataType>({
        email: "",
        password: "",
    });

    const [errorData, setErrorData] = useState<formDataType>({
        email: '',
        password: ""
    })

    const _validateLoginFields = () => {

        const { email, password } = formData;

        const emailError = validateSpaceString(email) || validateEmail(email)

        const passwordError = validateRequired(password)

        return {
            emailError: emailError,
            passwordError: passwordError,
        };

    }

    const _setErrors = (value: formDataType): void => {

        setErrorData((prevValues) => ({
            ...prevValues,
            email: value.email,
            password: value.password,
        }));

    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const login = async (): Promise<void> => {
        const { emailError, passwordError } = _validateLoginFields();

        if (!(emailError || passwordError)) {
            setLoading(true);
            try {
                const result = await loginServices(formData);


                localStorage.setItem('token', result.token);
                localStorage.setItem('user', JSON.stringify(result.user));

                goPage('/dashboard');
            } catch (err) {
                if (err instanceof Error) {
                    toast.error(err.message)
                } else if (typeof err === 'string') {
                    toast.error(err);
                }
            } finally {
                setLoading(false);
            }
        }

        _setErrors({
            email: emailError,
            password: passwordError,
        });
    };



    return {
        handleInputChange,
        login,
        formData,
        loading,
        errorData
    }
}