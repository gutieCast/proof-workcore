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
    component: {
        Text: {
            variants: {
                primary: {
                    color: 'white',
                    fontSize: 'md',
                },
                secondary: {
                    color: 'gray.700',
                    fontSize: 'xx-small',
                    _hover: {
                        color: 'orange.400',
                        transition: 'all 0s ease 2s',
                    }
                }

            }
        }
    },
    styles: {
        global: {
            body: {
                color: {
                    variants: {
                        primary: 'orange.500',
                        secondary: 'gray.700'
                    }
                },
                a: {

                }
            }
        }
    }
})

export { orangeTheme }