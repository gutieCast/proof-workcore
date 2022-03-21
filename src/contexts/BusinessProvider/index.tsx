import { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import { BusinessStateInterface, BusinessProviderProps } from './interfaces';

const BusinessContext = createContext<BusinessStateInterface>(undefined!)

const BusinessProvider = ({ children }: BusinessProviderProps) => {
    const [e, setE] = useState('');
    const [ub, setUb] = useState('');

    const { a } = useContext(AuthContext);

    // Harcoding 
    useEffect(() => {
        if (a === '124') {
            setE('28');
            setUb('http://workcore.net/')
        }
    }, [])

    return (
        <BusinessContext.Provider value={{
            e,
            setE,
            ub,
            setUb
        }}>
            {children}
        </BusinessContext.Provider>
    )
}

export { BusinessProvider, BusinessContext }