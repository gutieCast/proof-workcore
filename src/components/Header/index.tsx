import React, { useState } from 'react'
import { Flex, Box, Stack, useBreakpointValue } from '@chakra-ui/react';
import { Logo, MainMenu, MenuItem, MenuToggle } from './components';

type HeaderProps = {
    logoBusiness: string;
    nameBusiness: string
};

const Header = ({ logoBusiness, nameBusiness }: HeaderProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen)

    const menu = [
        { name: 'inicio', to: '/', component: {} },
        { name: 'aplicaciones', to: '/#aplicaciones', component: {} },
        { name: 'habilidades', to: '/#habilidades', component: {} },
        { name: `sobre ${nameBusiness}`, to: '/#sobre-nosotros', component: {} },
        { name: 'datos curiosos', to: '/#datos-curiosos', component: {} },
        { name: 'contáctanos', to: '/#contactanos', isLast: true, component: {} },
    ]

    const menuJustifyVariant = useBreakpointValue({ base: "center", md: "space-between", lg: "flex-end" });

    return (
        <Flex
            as={"header"}
            w={'full'}
        >
            <MainMenu >
                <Logo logoBusinessSrc={logoBusiness} />
                <MenuToggle toggle={toggle} isOpen={isOpen} />
                <Box
                    display={{ base: isOpen ? "block" : "none", md: "block" }}
                    flexBasis={{ base: "100%", md: "auto" }}
                >
                    <Stack
                        spacing={[8, 6, 0, 0]}
                        align="center"
                        direction={{ base: "column", md: "row" }}
                        justify={menuJustifyVariant}
                        h={'auto'}
                        // mx={{ base: 0, md: 4 }}
                        pt={[4, 4, 0, 0]}
                    >

                        {
                            menu.map(({ name, to, isLast }) => {
                                let key;
                                return (
                                    <MenuItem key={`menu-item-${name}`} to={to} name={name} isLast={isLast} />
                                )
                            })
                        }
                    </Stack>
                </Box>
            </MainMenu>
        </Flex>
    )
}

export { Header }
