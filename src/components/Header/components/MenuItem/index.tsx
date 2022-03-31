import { Flex, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import { NavHashLink as NavLink } from 'react-router-hash-link'

interface MenuItemProps {
    name: string;
    to: string;
    isActive?: boolean;
    isLast?: boolean;
}

const MenuItem = ({ name, to, isActive, isLast }: MenuItemProps) => {

    const linkVariant = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' })

    return (
        <Flex dir={'row'} align={'center'}>
            <Link
                as={NavLink}
                smooth to={to}
                mb={{ base: isLast ? 0 : 8, md: 0 }}
                mt={{ base: 0, md: 4, lg: 0 }}
                mr={{ sm: isLast ? 0 : 2, lg: isLast ? 0 : 4 }}
                variant={linkVariant}
            // isActive={isActive}
            >
                {name}

            </Link>

            <Text
                display={{ base: 'none', lg: 'inline-block' }}
                fontSize='md'
            >
                {isLast ? '' : ' /'}
            </Text>
        </Flex>
    )
}

export { MenuItem }
