import { useState } from 'react';
import { api } from '../../utils/axios';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { PhotoLanding, PhotoLandingAPI } from '../../models/portada'

const usePortada = () => {
  const [photosLanding, setPhotosLanding] = useState<PhotoLanding[]>([] as PhotoLanding[])

  const getPhotosLanding = async (a: string, e: string, ub: string) => {
    try {
      const response: AxiosResponse = await api.get('/portada/', {
        params: {
          a: a,
          e: e,
          ub: ub
        }
      })
      const { records } = response.data as PhotoLandingAPI;
      setPhotosLanding(records as PhotoLanding[])
      return photosLanding

    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        const message = `An error has occured: ${error.response?.status} - ${error.response?.statusText}`;
        alert(message);
      } else {
        throw new Error(error)
      }
    }
  }

  return { getPhotosLanding, photosLanding, setPhotosLanding }
}

export { usePortada }