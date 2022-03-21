import { AspectRatio, Image } from '@chakra-ui/react'

interface LogoInterface {
  logoBusinessSrc: string;
}

export const Logo = ({ logoBusinessSrc }: LogoInterface) => {
  return (
    <AspectRatio>
      <Image src={logoBusinessSrc} />
    </AspectRatio>
  )
}

