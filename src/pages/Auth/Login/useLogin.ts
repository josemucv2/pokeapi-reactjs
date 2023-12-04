import { useState, ChangeEvent } from "react";
import { formDataType, useLoginReturnType } from './login.types'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

export const useLogin = (): useLoginReturnType =>{
    
    const [loading,setLoading] = useState<boolean>(false)
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

    const login = (): void =>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            toast.success('Bienvenido')
            goPage('/dashboard')
        }, 3000)
    }


    return {
        handleInputChange,
        login,
        formData,
        loading,
    }
}