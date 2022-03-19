export interface BusinessProviderProps {
    children: JSX.Element | JSX.Element[],
}

export interface BusinessStateInterface {
    e: string,
    setE: React.Dispatch<React.SetStateAction<string>>,
    ub: string,
    setUb: React.Dispatch<React.SetStateAction<string>>,
}