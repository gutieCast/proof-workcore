import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from '../useAuth';
import { ResponseBusinessDataAPI, BussinessDataAPI } from '../../interfaces/empresa'

const baseURL = 'https://workcore.net/apiv2/web/';
const api = axios.create({
  baseURL: baseURL
});

const useEmpresa = () => {

  const { a, e, ub } = useAuth()

  const [businessData, setBusinessData] = useState<BussinessDataAPI>({} as BussinessDataAPI)

  useEffect(() => {
    const getBusinessData = async (a: string, e: string, ub: string) => {
      try {
        const response: AxiosResponse = await api.get('/empresa/', {
          params: {
            a: a,
            e: e,
            ub: ub
          }
        })
        const { records } = response.data as ResponseBusinessDataAPI;
        setBusinessData(records)
        return businessData

      } catch (error: any | AxiosError) {
        if (axios.isAxiosError(error)) {
          const message = `An error has occured: ${error.response?.status} - ${error.response?.statusText}`;
          alert(message);
        } else {
          throw new Error(error)
        }
      }
    }

    getBusinessData(a, e, ub);

  }, [])

  return { businessData }

}
export { useEmpresa }