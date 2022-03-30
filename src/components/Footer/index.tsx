import React from 'react'
import { Flex, Stack } from '@chakra-ui/react'

interface FooterProps {
    children: JSX.Element | JSX.Element[];
}

const Footer = ({ children }: FooterProps) => {
    return (
        <Flex
            as="footer"
            align="flex-end"
            justify={{ base: "space-between", lg: "space-evenly" }}
            wrap={{ base: "wrap", lg: "nowrap" }}
            w='full'
            mb={8}
            p={8}
            bg={["orange.400", "orange.400", "transparent", "transparent"]}
            color={["white", "white", "gray.700", "gray.700"]}
        >
            <Stack>

            </Stack>
        </Flex>
    )
}

export { Footer }
