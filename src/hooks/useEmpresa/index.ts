import { api } from '../../utils/axios';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from '../useAuth';
import { ResponseBusinessDataAPI, BusinessDataAPI } from '../../interfaces/empresa'



const useEmpresa = () => {

  // const { a, e, ub } = useAuth()

  const [businessData, setBusinessData] = useState<BusinessDataAPI>({} as BusinessDataAPI)

  // useEffect(() => {
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
  // })

  return { getBusinessData, businessData, setBusinessData }

}
export { useEmpresa }