import React, { useEffect, useState } from "react"

//Main component: Home screen
import { Home } from "./Home";

//Hook hardcoded to get 'a' 'e' & 'ub'
import { useAuth } from './hooks/useAuth'

// data
import { useQPEmpresa } from "./hooks/empresa/useQPEmpresa";

//Themes - contextProvider and theme
import { ChakraProvider } from '@chakra-ui/react';
import { orangeTheme } from "./themes";
import '../src/themes/orangeTheme/styles.css';

const App: React.VFC = () => {

  //Call to API
  const { nombre, logo } = useQPEmpresa();

  //States to print the info
  const [logoBusiness, setLogoBusiness] = useState('')
  const [businessName, setBusinessName] = useState('');


  //Extract data
  useEffect(() => {
    console.log('render');
    setBusinessName(nombre);
    setLogoBusiness(logo);
  });

  console.log('render');


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
