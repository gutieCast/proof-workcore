import { createContext, useState, useEffect } from 'react';
import { AuthProviderProps, AuthStateInterface } from './interfaces';

const AuthContext = createContext<AuthStateInterface | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {

    //Hardcoding
    const [a, setA] = useState<string>('124');
    const [isAuth, setIsAuth] = useState<boolean>(false);

    useEffect(() => {
        try {
            if (a === '124') {
                setIsAuth(true)
                alert(`Bienvenido, ${a}`);

            } else {
                const message = `El administrador '${a}' no se encuentra registrado`; throw new Error(message);
            }

        } catch (err: any) {
            alert(err.message);
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            a,
            setA,
        }} >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }


