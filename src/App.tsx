import React, { useEffect, useState } from "react"

//Main component: Home screen
import { Home } from "./Home";

//Hook hardcoded to get 'a' 'e' & 'ub'
import { useAuth } from './hooks/useAuth'

// Custom hook to handle api request
import { useEmpresa } from "./hooks/useEmpresa";

import { BusinessStateInterface } from "./contexts/BusinessProvider/interfaces";

//Themes - contextProvider and theme
import { ChakraProvider } from '@chakra-ui/react';
import { orangeTheme } from "./themes";
import '../src/themes/orangeTheme/styles.css';

const App: React.VFC = () => {

  //Call to API
  const { businessData } = useEmpresa();

  //States to print the info
  const [logoBusiness, setLogoBusiness] = useState('')
  const [businessName, setBusinessName] = useState('');


  //Trigger with data
  useEffect(() => {
    console.log('render');
    setBusinessName(businessData.nombre);
    setLogoBusiness(businessData.logo);
  });


  return (
    <ChakraProvider theme={orangeTheme}>
      <Home
        //Header
        businessName={businessName}
        logoBusiness={logoBusiness}
      />
    </ChakraProvider>
  )
}

export { App };
