import { useState } from 'react';
import { Flex, Box, Stack, useBreakpointValue } from '@chakra-ui/react';
import { MainMenu, MenuItem, MenuToggle } from './components';
import { Logo } from '../ui/Logo';

interface IHeaderProps {
    logoBusiness: string;
    nameBusiness: string
};

const Header = ({ logoBusiness, nameBusiness }: IHeaderProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen)

    const menu = [
        { name: 'inicio', to: '/', isActive: true },
        { name: 'aplicaciones', to: '/#aplicaciones', isActive: false },
        { name: 'habilidades', to: '/#habilidades', isActive: false },
        { name: `sobre ${nameBusiness}`, to: '/#sobre-nosotros', isActive: false },
        { name: 'datos curiosos', to: '/#datos-curiosos', isActive: false },
        { name: 'contáctanos', to: '/#contactanos', isLast: true, isActive: false },
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
                    display={{ base: isOpen ? "block" : "none", lg: "block" }}
                    flexBasis={{ base: "100%", lg: "auto" }}
                >
                    <Stack
                        spacing={[8, 6, 0, 0]}
                        align="center"
                        direction={{ base: "column", md: "row" }}
                        justify={menuJustifyVariant}
                        h={'auto'}
                        mx={{ base: 0, lg: 4 }}
                        pt={[4, 4, 0, 0]}
                    >

                        {
                            menu.map(({ name, to, isActive, isLast }) => {
                                return (
                                    <MenuItem key={`menu-item-${name}`} to={to} name={name} isActive={isActive} isLast={isLast} />
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
