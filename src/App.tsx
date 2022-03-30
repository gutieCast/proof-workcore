import React, { useEffect, useState } from "react"

//Main component: Home screen
import { Home } from "./Home";

//Login component that setting isAuth
//Hook hardcoded to get 'a' 'e' & 'ub'
import { useAuth } from './hooks/useAuth'

//Themes - contextProvider and theme
import { ChakraProvider } from '@chakra-ui/react';
import { orangeTheme } from "./themes";
import '../src/themes/orangeTheme/styles.css';

// Custom hook to handle api request
import { useEmpresa } from "./hooks/useEmpresa";
import { usePortada } from "./hooks/usePortada";

//Models typing responses
import { BusinessContent } from "./models/publicaciones";
import { PhotoLanding, PhotoLandingAPI } from "./models/portada";
import { BusinessData } from "./models/empresa";

const App: React.VFC = () => {

  const { a, e, ub } = useAuth();

  //Destructuring calls API from custom hooks
  const { getBusinessData } = useEmpresa();
  const { getPhotosLanding } = usePortada();

  //States to print the info
  const [logoBusiness, setLogoBusiness] = useState<string>('');
  const [nameBusiness, setNameBusiness] = useState<string>('');
  const [photosHero, setPhotosHero] = useState<PhotoLanding[]>([]);

  //Trigger with data
  useEffect(() => {
    const allPromises = async () => {
      try {
        const allPromises = Promise.all([
          getBusinessData(a, e, ub),
          getPhotosLanding(a, e, ub)
        ]);
        const [businessData, photosLanding] = await allPromises;
        if (businessData) {
          await setNameBusiness(businessData.nombre);
          await setLogoBusiness(businessData.logo);
        }
        if (photosLanding) setPhotosHero(photosLanding)
      } catch (error: any) {
        console.error(error.message)
      };
    }
    allPromises();
  }, []);

  return (
    <ChakraProvider theme={orangeTheme}>
      <Home
        //Header
        nameBusiness={nameBusiness}
        logoBusiness={logoBusiness}
        photosHero={photosHero}
      />
    </ChakraProvider>
  )
}

export { App };
