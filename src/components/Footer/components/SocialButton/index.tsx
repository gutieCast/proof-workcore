import { LinkBox, LinkOverlay, IconButton } from '@chakra-ui/react';


interface SocialButtonProps {
    name: string,
    link: string,
    icon: JSX.Element
}

const SocialButton = ({ name, link, icon }: SocialButtonProps) => {
    return (
        <LinkBox
            as="article"
        >
            <LinkOverlay href={link} isExternal={true}>

            </LinkOverlay>
            <IconButton
                aria-label={name}
                icon={icon}
            />
        </LinkBox>
    )
}

export { SocialButton }