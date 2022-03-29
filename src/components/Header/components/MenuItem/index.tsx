import React from 'react'
import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { NavHashLink as NavLink } from 'react-router-hash-link'

type MenuItemProps = {
    name: string;
    isLast?: boolean;
    to: string;
    key: string
}

const MenuItem = ({ name, isLast, to, ...rest }: MenuItemProps) => {
    const textVariant = useBreakpointValue({ base: "primary", lg: "secondary" });

    return (
        <Flex dir={'row'}>
            <NavLink style={{ margin: 0 }} to={to} scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}>
                <Text
                    mb={{ base: isLast ? 0 : 8, sm: 8, md: 0, lg: 0 }}
                    mr={{ base: 0, sm: isLast ? 0 : 2, lg: isLast ? 0 : 4 }}
                    ml={{ base: 2, lg: 8 }}
                    display="inline-block"
                    variant={textVariant}
                    textTransform={'uppercase'}
                >
                    {name}
                </Text>
            </NavLink>

            <Text display={{ base: 'none', lg: 'inline-block' }}>
                {isLast ? '' : ' /'}
            </Text>
        </Flex>
    )
}

export { MenuItem }
