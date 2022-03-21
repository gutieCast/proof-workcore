import { useState, useEffect, createContext, useContext } from 'react';
import { AuthProviderProps, AuthStateInterface } from './interfaces';

const AuthContext = createContext<AuthStateInterface>(undefined!);
function createCtx<A>() {
    const auth = createContext<A | undefined>(undefined);
    function useCtx() {
        const c = useContext(auth);
        if (!c) throw new Error("Debe exisitir un administrador");
        return c;
    }
    return [useCtx, auth.Provider] as const;
}

const [useCtx, AuthContextProvider] = createCtx<AuthStateInterface>();

const AuthProvider = ({ children }: AuthProviderProps) => {

    //Hardcoding
    const [a, setA] = useState<string>('124');
    const [isAuth, setIsAuth] = useState<boolean>(false);

    useEffect(() => {
        try {
            if (a === '124') {
                setIsAuth(true)
            } else {
                const message = `El administrador '${a}' no se encuentra registrado`; throw new Error(message);
            }

        } catch (err: any) {
            alert(err.message);
        }
    }, [])

    return (
        <AuthContextProvider value={{
            isAuth,
            setIsAuth,
            a,
            setA,
        }} >
            {children}
        </AuthContextProvider>
    )
}

export { AuthProvider, AuthContext }


