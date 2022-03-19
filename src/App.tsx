import React, { useContext } from "react"
import { Home } from "./components";

//Authentication - contextProvider Admin and Business

import { AuthContext, AuthProvider } from "./contexts/AuthProvider";
import { AuthStateInterface } from "./contexts/AuthProvider/interfaces";
import { BusinessContext, BusinessProvider } from "./contexts/BusinessProvider";
import { BusinessStateInterface } from "./contexts/BusinessProvider/interfaces";

//Themes - contextProvider and theme
import { ChakraProvider } from '@chakra-ui/react';
import { orangeTheme } from "./themes";
import '../src/themes/orangeTheme/styles.css';

export const App: React.VFC = () => (

  // const { a } = useContext(AuthContext as AuthStateInterface);
  // const { e, ub } useContext(BusinessContext as BusinessStateInterface);

  <AuthProvider>
    <BusinessProvider>
      <h1>
        {/* {{ a, e, ub }} */}
      </h1>
      <ChakraProvider theme={orangeTheme}>
        <Home />
      </ChakraProvider>
    </BusinessProvider>
  </AuthProvider>
)
