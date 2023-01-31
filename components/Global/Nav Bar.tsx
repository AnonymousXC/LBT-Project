import { NextComponentType } from "next";
import {
    Flex,
    Image,
    Text,
    Button,
} from '@chakra-ui/react';
import { useState } from "react";
import { MenuOpen } from '@styled-icons/material-rounded/MenuOpen';
import { Close } from '@styled-icons/material-rounded/Close';

const NavBar : NextComponentType = () => {
    return (
        <NavBarMobile />
    )
}

function NavBarMobile() {

    const [ isMenuOpen, setMenuOpen ] = useState(false)

    return (
        <>
            <Flex
            w={'100%'}
            h={'78px'}
            py={'9px'}
            position={'fixed'}
            top={'0px'}
            left={'0px'}
            backgroundColor={isMenuOpen ? '#000' : 'transparent'}
            color={'#fff'}
            zIndex={1000}
            alignItems={'center'}
            justifyContent={'space-between'}
            px={'16px'}
            className={'nav-bar-mobile'}>
                <Flex gap={'12px'} justifyContent={'center'} alignItems={'center'}>
                    <Image src={'images/Logo.png'} w={'58px'} h={'58px'} rounded={'full'} />
                    <Flex>
                        <Text variant={'variex-ff'}>L</Text>
                        <Text variant={'variex-ff'} color={'#B6CE97'} >b</Text>
                        <Text variant={'variex-ff'} color={'#75A638'} >t</Text>
                    </Flex>
                </Flex>
                <Button variant={'unstyled'} 
                display={'flex'}
                onClick={() => {
                    setMenuOpen(!isMenuOpen)
                }}>
                    {isMenuOpen ? <Close size={'50px'} /> : <MenuOpen size={'50px'} />}
                </Button>
            </Flex>
            <Flex
            w={'100%'}
            maxW={'400px'}
            className={'nav-bar-mobile-drawer'}
            h={'calc(var(--height) - 78px)'}
            position={'fixed'}
            top={'78px'}
            right={isMenuOpen === true ? '0px' : '-400px'}
            zIndex={1000}
            direction={'column'}
            backgroundColor={'black'}
            justifyContent={'center'}
            alignItems={'center'}
            transition={'all 200ms'}>
                <Text>
                    Hello World
                </Text>
                <Text>
                    Hello World
                </Text>
                <Text>
                    Hello World
                </Text>
                <Text>
                    Hello World
                </Text>
            </Flex>
        </>
    )
}

export default NavBar;