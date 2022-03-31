import React, { useState, useEffect } from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { IHomeProps } from './interface'
import { Footer, Header } from '../components'

const Home = ({
    logoBusiness,
    nameBusiness,
    descriptionBusiness,
    infoBusiness,
    photosCarousel,
    socialLinks
}: IHomeProps) => {
    return (
        <Box p={0} h={'auto'} w={'full'}>
            <Header logoBusiness={logoBusiness} nameBusiness={nameBusiness} />
            <Heading>

            </Heading>
            <Footer logoBusiness={logoBusiness} socialLinks={socialLinks} />
        </Box>
    )
}

export { Home }