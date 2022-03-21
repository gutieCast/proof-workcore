import { Flex } from '@chakra-ui/react';
import React from 'react'
import { orangeTheme } from '../../themes'
import { Logo } from './components/Logo';

interface HeaderInterface {
    logoBusiness: string;
};

const Header = ({ logoBusiness }: HeaderInterface) => {
    return (
        <header>
            <Flex>
                <Logo logoBusinessSrc={logoBusiness} />
            </Flex>
        </header>
    )
}

export { Header }
