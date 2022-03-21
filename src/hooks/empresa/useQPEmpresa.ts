import { useEffect, useState } from 'react';
import { useAuth } from '../useAuth';
import { ResponseBusinessDataAPI, BussinessDataAPI } from './interface'

const baseURL = 'workcore.net/apiv2/web/';

const useQPEmpresa = () => {

  const { a, e, ub } = useAuth()

  const [businessData, setBusinessData] = useState<BussinessDataAPI>({} as BussinessDataAPI)

  const getBusinessData = async (a: string, e: string, ub: string) => {
    try {
      const response = await fetch(`${baseURL}/empresa/?a=${a}&e=${e}&ub=${ub}`)

      if (!response.ok) {
        const message = `Ha ocurrido un error: ${response.status} - ${response.statusText}`;
        throw new Error(message);
      } else {
        const { records } = await response.json() as ResponseBusinessDataAPI
        setBusinessData(records)
      }
    } catch (err: any) {
      alert(err.message);
    }

    return businessData
  }

  useEffect(() => {
    getBusinessData(a, e, ub)
  }, [])

  return businessData
}

export { useQPEmpresa }