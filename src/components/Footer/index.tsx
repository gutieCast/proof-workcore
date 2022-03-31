import { Flex, Stack, useBreakpointValue } from '@chakra-ui/react';
import { Logo } from '../ui';
import { FaFacebookF, FaGooglePlus, FaLinkedin, FaTwitter, FaYoutube, FaTelegram } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri';
import { SocialButton } from './components';
import { ISocialLinks } from '../../Home/interface';

interface FooterProps {
    logoBusiness: string;
    socialLinks: ISocialLinks
}


const Footer = ({ logoBusiness, socialLinks }: FooterProps) => {

    const borders = useBreakpointValue({ base: 'none', lg: '1px solid gray.50' });

    const SocialMedia = [
        { name: 'facebook', icon: <FaFacebookF />, link: socialLinks.facebook },
        { name: 'google', icon: <FaGooglePlus />, link: socialLinks.google },
        { name: 'instagram', icon: <RiInstagramFill />, link: socialLinks.instagram },
        { name: 'linkedin', icon: <FaLinkedin />, link: socialLinks.linkedin },
        { name: 'twitter', icon: <FaTwitter />, link: socialLinks.twitter },
        { name: 'youtube', icon: <FaYoutube />, link: socialLinks.youtube },
        { name: 'telegram', icon: <FaTelegram />, link: socialLinks.telegram }
    ]

    return (
        <Flex
            as="footer"
            align="center"
            bg="gray.700"
            borderTop={borders}
            direction={{ base: "column-reverse", lg: "row" }}
            justify={{ base: "space-between", lg: "space-evenly" }}
            // wrap={{ base: "wrap", lg: "nowrap" }}
            w='full'
            mb={8}
            p={8}
            color={["white", "white", "gray.700", "gray.700"]}
        >
            <Stack
                justify={'center'}
                borderRight={borders}
            >
                <Logo logoBusinessSrc={logoBusiness} />
            </Stack>
            <Stack
                className='social-buttons-container'
                isInline={true}
                justify={'center'}
                spacing={{ base: 1, md: 2, lg: 4 }}
            >
                {
                    SocialMedia.map(({ name, link, icon }) => {
                        if (link !== '') {
                            return (
                                <SocialButton key={`social-link-${name}`} name={name} icon={icon} link={link} />
                            )
                        }
                    })
                }

            </Stack>
        </Flex>
    )
}

export { Footer }
