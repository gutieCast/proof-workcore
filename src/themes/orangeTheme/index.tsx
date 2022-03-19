import { extendTheme, theme as base } from '@chakra-ui/react';

const orangeTheme = extendTheme({
    fonts: {
        heading: `Poppins, ${base.fonts?.heading}`,
        body: `Poppins, ${base.fonts?.body}`
    },
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        orange: {
            300: '#fe624d',
            400: '#fd361c',
            500: '#e31e02',
        },
        gray: {
            50: '#e7f5fa',
            100: '#cfdde1',
            700: '#35464b',
        }
    },
})

export { orangeTheme }