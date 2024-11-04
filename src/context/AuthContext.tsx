import { createContext, useState, useEffect, ReactNode } from 'react';
import { loginUser, registerUser } from '../api/authApi';
import useStore from '../hooks/useStore';

interface AuthContextType {
    authProviderIsLoading: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: any; 
    register: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const defaultAuthContext: AuthContextType = {
    authProviderIsLoading: true,
    user: null,
    register: async () => {},
    login: async () => {},
    logout: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [authProviderIsLoading, setAuthProviderLoading] = useState(true);
    const [user, setUser] = useState(null);

    const { user: storeUser, setStoreUser } = useStore();
    console.log(storeUser);

    useEffect(() => {
        setAuthProviderLoading(true);
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setAuthProviderLoading(false);
    }, []);

    const register = async (email: string, password: string) => {
        const data = await registerUser(email, password);

        if (!data.ok){
            if (data.status === 409){
                throw new Error('User already exists');
            }

            throw new Error('An error occurred with' + data.status);
        }

        if (data.ok){
            const userData = await data.json();
            setUser(userData);
            setStoreUser(userData.user);
            localStorage.setItem('token', userData.token);
        }
    };


    const login = async (email: string, password: string) => {
        const data = await loginUser(email, password);

        if (!data.ok){
            if (data.status === 404){
                throw new Error('User not found');
                //TODO: handle error and inform the user
            }

            if (data.status === 401){
                throw new Error('Invalid password');
                //TODO: handle error and inform the user
            }

            throw new Error('An error occurred with' + data.status);
        }

        if (data.ok){
            const userData = await data.json();
            setUser(userData);
            setStoreUser(userData.user);
            localStorage.setItem('token', userData.token);
        }
    };

    const logout = () => {
        setUser(null);
        setStoreUser({id: null, username: null, email: ''});
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ authProviderIsLoading, user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};
