import { Flex, AspectRatio, Image } from '@chakra-ui/react'

interface LogoProps {
  logoBusinessSrc: string;
}

export const Logo = ({ logoBusinessSrc }: LogoProps) => {
  return (
    <Flex justify={'flex-start'}>
      <AspectRatio as={'div'} w={150} px={50} >
        <Image src={logoBusinessSrc} />
      </AspectRatio>
    </Flex>
  )
}

