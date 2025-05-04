import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

enum AuthStatus {
    PENDING = 'pending',
    AUTHENTICATED = 'authenticated',
    UNAUTHENTICATED = 'unauthenticated'
}

interface AuthContextType {
    status: AuthStatus;
    token: string | null;
    user?: User;
    isChecking: boolean;
    isAuthenticated: boolean;


    //Metodos
    loginWithEmailAndPassword: (email: string, password: string) => void;
    logout: () => void;
}

interface User {
    name: string;
    email: string;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [status, setStatus] = useState<AuthStatus>(AuthStatus.PENDING);
    const [user, setUser] = useState<User>();

    useEffect(() => {
        setTimeout(() => {
            setStatus(AuthStatus.UNAUTHENTICATED);
        }, 1000);
    }, []);

    const loginWithEmailAndPassword = (email: string, password: string): void => {
        setUser({
            name: 'Phos',
            email: email
        });
        setStatus(AuthStatus.AUTHENTICATED);
    }

    const logout = ():void => {
        setUser(undefined);
        setStatus(AuthStatus.UNAUTHENTICATED);
    }


    return (
        <AuthContext.Provider value={{
            status: status,
            token: null,
            user: user,
            isChecking: status === AuthStatus.PENDING,
            isAuthenticated: status === AuthStatus.AUTHENTICATED,
            loginWithEmailAndPassword,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
