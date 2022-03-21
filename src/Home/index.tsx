import React, { useState, useEffect } from 'react'
import { Container, Flex, Heading } from '@chakra-ui/react'
import { HomeProps } from './interface'
import { Header } from '../components'

const Home = ({ logoBusiness, businessName }: HomeProps) => {
    return (
        <Container maxW="container.xl" p={0} h={'auto'} w={'full'}>
            <Flex>
                <Header logoBusiness={logoBusiness} />
                <Heading>
                    {businessName}
                </Heading>
            </Flex>
        </Container>
    )
}

export { Home }