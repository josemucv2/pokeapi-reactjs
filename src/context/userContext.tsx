import React, { createContext, useContext, useEffect, useState } from 'react';
import { IUser } from '@/interfaces';

const UserContext = createContext<IUser | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('solo para efectos de ver, seera la primera en ejcutarse', user)
        const storedUser = localStorage.getItem('user');
        console.log('sexto', storedUser)

        if (storedUser) {
            const parsedUser: IUser = JSON.parse(storedUser);
            setUser(parsedUser);
        }
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <div>Cargando datos...</div>;
    }
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser debe ser usado dentro de un UserProvider');
    }
    return context;
};
