import React, { useState, useEffect } from 'react'
import { Container, Flex, Heading } from '@chakra-ui/react'
import { HomeProps } from './interface'
import { Header } from '../components'

const Home = ({ logoBusiness, nameBusiness }: HomeProps) => {
    return (
        <Container maxW="container.xl" p={0} h={'auto'} w={'full'}>
            <Flex>
                <Header logoBusiness={logoBusiness} nameBusiness={nameBusiness} />
                <Heading>

                </Heading>
            </Flex>
        </Container>
    )
}

export { Home }