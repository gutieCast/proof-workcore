import React, { useEffect, useState } from "react"

//Main component: Home screen
import { Home } from "./Home";

//Login component that setting isAuth
//Hook hardcoded to get 'a' 'e' & 'ub'
import { useAuth } from './hooks/useAuth'

// Custom hook to handle api request
import { useEmpresa } from "./hooks/useEmpresa";

//Themes - contextProvider and theme
import { ChakraProvider } from '@chakra-ui/react';
import { orangeTheme } from "./themes";
import '../src/themes/orangeTheme/styles.css';

const App: React.VFC = () => {

  const { a, e, ub } = useAuth();

  //Call to API
  const { getBusinessData, businessData } = useEmpresa();

  //States to print the info
  const [logoBusiness, setLogoBusiness] = useState('')
  const [nameBusiness, setNameBusiness] = useState('');


  //Trigger with data
  useEffect(() => {
    getBusinessData(a, e, ub);
    setNameBusiness(businessData.nombre);
    setLogoBusiness(businessData.logo);
  });


  return (
    <ChakraProvider theme={orangeTheme}>
      <Home
        //Header
        nameBusiness={nameBusiness}
        logoBusiness={logoBusiness}
      />
    </ChakraProvider>
  )
}

export { App };
