import { useState, useEffect, createContext, useContext } from 'react';
import { AuthProviderProps, AuthStateInterface } from '../../models/AuthInterfaces';

const AuthContext = createContext<AuthStateInterface>({} as AuthStateInterface);

const AuthProvider = ({ children }: AuthProviderProps) => {

    const [a, setA] = useState<string>('');
    const [isAuth, setIsAuth] = useState<boolean>(false);

    useEffect(() => {
        const login = (admin: string) => {
            //Function that sign in with user + pass
            //Hardcoding
            setA('124')
            try {
                if (admin === '124') {
                    setIsAuth(true)
                } else {
                    const message = `El administrador '${admin}' no se encuentra registrado`;
                    throw new Error(message);
                }

            } catch (err: any) {
                alert(err.message);
            }
            return { login, isAuth, setIsAuth }
        }

        login(a);

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


