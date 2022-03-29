import React from 'react';
import { Flex } from '@chakra-ui/react';

interface MainMenuProps {
  children: JSX.Element | JSX.Element[];
}

const MainMenu = ({ children, ...rest }: MainMenuProps): JSX.Element => {

  return (
    <Flex
      as="nav"
      align="center"
      justify={{ base: "space-between", lg: "space-evenly" }}
      wrap={{ base: "wrap", lg: "nowrap" }}
      w='full'
      mb={8}
      p={8}
      bg={["orange.400", "orange.400", "transparent", "transparent"]}
      color={["white", "white", "gray.700", "gray.700"]}
    >
      {children}
    </Flex>
  )
}

export { MainMenu }
