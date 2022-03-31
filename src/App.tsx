import React from "react"

//Main component: Home screen
import { Home } from "./Home";

//Custom Hook to trigger Initial Content
import { useInitialContent } from './hooks/useInitialContent'

//Themes - contextProvider for theme (with import fonts)
import { ChakraProvider } from '@chakra-ui/react';
import { orangeTheme } from "./themes";
import '../src/themes/orangeTheme/styles.css';

const App: React.VFC = () => {

  //Destructuring Initial Content
  const {
    logoBusiness,
    nameBusiness,
    photosCarousel,
    descriptionBusiness,
    infoBusiness,
    locationBusiness,
    socialLinks
  } = useInitialContent();

  return (
    <ChakraProvider theme={orangeTheme}>
      <Home
        //Header
        nameBusiness={nameBusiness}
        logoBusiness={logoBusiness}
        //Carousel
        photosCarousel={photosCarousel}
        //Hero
        descriptionBusiness={descriptionBusiness}
        //Contact
        infoBusiness={infoBusiness}
        location={locationBusiness}
        //Footer
        socialLinks={socialLinks}

      />
    </ChakraProvider>
  )
}

export { App };
