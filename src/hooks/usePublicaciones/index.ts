import { api } from '../../utils/axios';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from '../useAuth';
import { BusinessContent, BusinessContentAPI } from '../../interfaces/publicaciones'
import { BusinessContext } from '../../contexts/BusinessProvider';

const usePublicaciones = () => {

    const { a, e, ub } = useAuth()

    const [posts, setPosts] = useState<BusinessContent[]>({} as BusinessContent[]);
    /////// GET
    useEffect(() => {
        const getPosts = async (a: string, e: string, ub: string) => {
            try {
                const response: AxiosResponse = await api.get('/acercade/', {
                    params: {
                        a: a,
                        e: e,
                        ub: ub
                    }
                })
                const { records } = response.data as BusinessContentAPI;
                setPosts(records as BusinessContent[])
                return posts

            } catch (error: any | AxiosError) {
                if (axios.isAxiosError(error)) {
                    const message = `An error has occured: ${error.response?.status} - ${error.response?.statusText}`;
                    alert(message);
                } else {
                    throw new Error(error)
                }
            }
        }

        getPosts(a, e, ub);

    }, [])

    ///////POST
    const postTracking = async (id: string, a: string, e: string, ub: string) => {
        try {
            const response = await api.put('acercade/', { id: id },
                {
                    params: {
                        id: id,
                        a: a,
                        e: e,
                        ub: ub
                    }
                })
            const { records } = response.data as BusinessContentAPI;
            return records as BusinessContent
        } catch (error: any | AxiosError) {
            if (axios.isAxiosError(error)) {
                const message = `An error has occured: ${error.response?.status} - ${error.response?.statusText}`;
                alert(message);
            } else {
                throw new Error(error)

            }
        }
    }

    return { posts, postTracking }

}
export { usePublicaciones }