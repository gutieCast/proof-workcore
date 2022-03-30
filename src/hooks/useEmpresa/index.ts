import { useState } from 'react';
import { api } from '../../utils/axios';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { BusinessDataAPI, BusinessData } from '../../models/empresa'

const useEmpresa = () => {

  const [businessData, setBusinessData] = useState<BusinessData>({} as BusinessData)

  const getBusinessData = async (a: string, e: string, ub: string) => {
    try {
      const response: AxiosResponse = await api.get('/empresa/', {
        params: {
          a: a,
          e: e,
          ub: ub
        }
      })
      const { records } = response.data;
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

  return { getBusinessData, businessData, setBusinessData }

}
export { useEmpresa }