import { extendTheme, theme as base, withDefaultColorScheme } from '@chakra-ui/react';

const brandRing = {
    _focus: {
        ring: 2,
        ringColor: 'orange.500'
    },
};

const orangeTheme = extendTheme(
    {
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
        components: {
            Link: {
                baseStyle: {
                    display: "inline-block",
                    textTransform: 'uppercase',
                    focusBorderColor: 'none',
                    _hover: {
                        textDecoration: 'none',
                    },
                    isActive: {
                        focusBorderColor: 'none'
                    }
                },
                variants: {
                    sm: {
                        isActive: {
                            color: 'gray.700'
                        },
                        color: 'white',
                        fontSize: 'md',
                        ml: 2,
                        mb: 8,

                    },
                    md: {
                        fontSize: 'xs',
                        ml: 4,
                        mb: 0
                    },
                    lg: {
                        _hover: {
                            color: 'orange.500',
                        },
                        isActive: {
                            color: 'orange.500'
                        },
                        fontSize: 'xx-small',
                        color: 'gray.700',
                        ml: 8,
                        mb: 0,
                    },
                },
            },
            Button: {
                backgroundColor: 'white',
                fontWeight: 'semibold',
                letterSpacing: 'wide',
                fontSize: 'xs',
                textTransform: 'uppercase',
                ml: '2',
                rounded: 'none',
                ...brandRing,
                _hover: {
                    backgroundColor: 'orange.400',
                    color: 'white'
                },
                _active: {
                    backgroundColor: 'orange.500',
                },
                variants: {

                },
            },
        },

    },
    withDefaultColorScheme({
        colorScheme: 'orange',
        components: ['Icons'],
    })
)

export { orangeTheme }