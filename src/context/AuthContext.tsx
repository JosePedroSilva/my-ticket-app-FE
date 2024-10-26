import { createContext, useState, useEffect } from 'react';
import { loginUser } from '../api/authApi';
import { ReactNode } from 'react';

interface AuthContextType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: any; // Replace 'any' with a more specific type if available (e.g., `UserType` or `null`)
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

// Provide a default empty implementation for the context to satisfy TypeScript
const defaultAuthContext: AuthContextType = {
    user: null,
    login: async () => {},
    logout: () => {}
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState(null);

    // Load user from localStorage on app start
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = async (email: string, password: string) => {
        const data = await loginUser(email, password);
        console.log(data);
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
