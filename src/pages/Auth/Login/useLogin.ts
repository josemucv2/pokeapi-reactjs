import { useState, ChangeEvent } from "react";
import { formDataType, useLoginReturnType } from './login.types'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { loginServices } from "@/services";

export const useLogin = (): useLoginReturnType => {

    const [loading, setLoading] = useState<boolean>(false)
    const goPage = useNavigate()

    const [formData, setFormData] = useState<formDataType>({
        email: "",
        password: "",
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const login = async (): Promise<void> => {
        setLoading(true);

        try {
            await loginServices(formData);
            goPage('/dashboard');
        } catch (err: unknown) {
            console.log(err,'laknsdlnad')
            toast.error(err);
        } finally {
            setLoading(false);
        }
    };



    return {
        handleInputChange,
        login,
        formData,
        loading,
    }
}