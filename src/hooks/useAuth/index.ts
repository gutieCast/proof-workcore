import { useEffect, useState } from 'react'

export const useAuth = () => {

    const [a, setA] = useState('124');
    const [isAuth, setIsAuth] = useState(false);
    const [e, setE] = useState('28');
    const [ub, setUb] = useState('http://workcore.net/');

    //Hardcoding param 'a' and authentication
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
    })

    //Hardcodig params 'e' & 'ub'
    useEffect(() => {
        if (a === '124') {
            setE('28');
            setUb('http://workcore.net/')
        }
    })

    return (
        {
            a,
            setA,
            isAuth,
            setIsAuth,
            e,
            setE,
            ub,
            setUb
        }
    )
}
