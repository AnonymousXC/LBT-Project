import {
    Button,
    Flex,
    Text,
    Divider,
    Box,
} from "@chakra-ui/react";
import { NextComponentType } from "next";
import dynamic from "next/dynamic";

const VideoPlayer = dynamic(() => import('../Global/Video Player'))


const Landing: NextComponentType = () => {
    return (
        <Flex
            w={'100%'}
            mt={'calc(78px + 24px)'}
            alignItems={'center'}
            direction={'column'}
            className={'Landing'}>
            <Flex w={'100%'} px={'20px'} alignItems={'center'} justifyContent={'space-between'}>
                <Button
                    variant={'primary-60'}
                    color={'fg-default'}
                    //backgroundColor={'rgba(21, 171, 144, 0.6)'}
                    fontSize={'30px'}
                    py={'11px'}
                    height={'50px'}
                    fontWeight={'400'}
                    fontFamily={'Impact'}
                    lineHeight={'40px'}
                    textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'}
                    _hover={{
                        backgroundColor: 'rgba(21, 171, 144, 1)',
                        transform: 'scale(1.05)'
                    }}>
                    Banyan Tree
                </Button>
                <Text>Share</Text>
            </Flex>
            <VideoPlayer source={'https://www.youtube.com/embed/GbxPHdgqDR4'} mt={'30px'} />
            <Text
                letterSpacing={'1px'}
                fontSize={'1.2rem'}
                fontFamily={'Impact'}
                fontWeight={'400'}
                mt={'20px'}
                color={'green-default'}>Botanical Name: Ficus benghalensis</Text>
            <Divider w={'90%'} backgroundColor={'fg-default'} mt={'16px'} />
            <Button
            w={'calc(100% - 50px)'}
            fontSize={'1.5rem'}
            color={'#000'}
            fontFamily={'Impact'}
            mt={'22px'}
            lineHeight={'29.27px'}
            fontWeight={'normal'}
            wordBreak={'break-word'}
            height={'80px'}
            variant={'primary-60'}
            _hover={{
                transform: 'scale(1.05)'
            }}>
                <Flex 
                h={'90%'} 
                gap={'6px'}
                alignItems={'center'}
                justifyContent={'center'}
                mx={'8px'}>
                    <Box 
                    fontSize={'54px'}>🙂</Box>
                    <Text whiteSpace={'break-spaces'}>
                        Banyan Tree is the National Tree of India
                    </Text>
                </Flex>
            </Button>
            <Divider w={'90%'} backgroundColor={'fg-default'} mt={'28px'} />
            <Button
            w={'calc(100% - 50px)'}
            fontSize={'1.5rem'}
            color={'#000'}
            fontFamily={'Impact'}
            mt={'22px'}
            lineHeight={'29.27px'}
            fontWeight={'normal'}
            wordBreak={'break-word'}
            height={'80px'}
            variant={'primary-60'}
            _hover={{
                transform: 'scale(1.05)'
            }}>
                <Flex 
                h={'90%'} 
                gap={'6px'}
                alignItems={'center'}
                justifyContent={'center'}
                mx={'8px'}
                direction={'column'}>
                    <Text whiteSpace={'break-spaces'} 
                    color={'#fff'} 
                    textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)'}
                    fontSize={'1.5rem'}>
                        India
                    </Text>
                    <Text whiteSpace={'break-spaces'} fontSize={'1.2rem'}>
                        Native Habitat
                    </Text>
                </Flex>
            </Button>
            <Divider w={'90%'} backgroundColor={'fg-default'} mt={'28px'} />
        </Flex>
    )
}

export default Landing;