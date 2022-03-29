import React from 'react'
import { Box } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

type MenuToggleProps = {
    toggle: () => void;
    isOpen: boolean;
}

const MenuToggle = ({ toggle, isOpen }: MenuToggleProps): JSX.Element => {
    return (
        <Box
            alignItems={{ base: 'center', md: 'none' }}
            display={{ base: 'flex', md: 'none' }}
            h={8}
            justifyContent={{ base: 'center', md: 'none' }}
            onClick={toggle}
            w={8}
        >
            {isOpen ? <CloseIcon h={6} w={6} /> : <HamburgerIcon h={"full"} w={"full"} />}
        </Box>
    )
}

export { MenuToggle }