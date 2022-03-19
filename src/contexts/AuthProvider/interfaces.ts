export interface AuthProviderProps {
    children: JSX.Element | JSX.Element[],
}

export interface AuthContextInterface {
    isAuth: boolean,
    a: string,
}

export interface AuthStateInterface {
    isAuth: boolean,
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>,
    a: string,
    setA: React.Dispatch<React.SetStateAction<string>>,
}