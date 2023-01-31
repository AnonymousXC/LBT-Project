import {
    Box,
    Flex,
    Text,
    Heading,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var sliderSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    className: 'trust-us-slider',
}

var sliderSettionTeam = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    className: 'team-slider'
}

function Section3() {


    return (
        <Flex
            mt={'18px'}
            w={'100%'}
            pb={'120px'}
            alignItems={'center'}
            direction={'column'}
            className={'section-3'}>
            <Heading variant={'h2'}> Institutions that trust us </Heading>
            <Box w={'85%'} mt={'34px'}>
                <Slider {...sliderSetting}>
                    <SliderContentInstution />
                    <SliderContentInstution />
                    <SliderContentInstution />
                    <SliderContentInstution />
                    <SliderContentInstution />
                    <SliderContentInstution />
                </Slider>
            </Box>
            <Heading variant={'h2'} mt={'47px'}> Meet our team! </Heading>
            <Box w={'85%'} mt={'50px'} h={'250px'}>
                <Slider {...sliderSettionTeam}>
                    <SliderContentTeam />
                    <SliderContentTeam />
                    <SliderContentTeam />
                    <SliderContentTeam />
                    <SliderContentTeam />
                    <SliderContentTeam />  
                </Slider>
            </Box>
        </Flex>
    )
}

function SliderContentInstution(img) {
    return (
        <Box
        w={'68px'}
        h={'68px'}
        backgroundColor={'#fff'}>

        </Box>
    )
}

function SliderContentTeam(name) {
    return(
        <Flex 
        w={'234px'} 
        h={'234px'}
        backgroundColor={'green-default'}
        rounded={'10px'}
        border={'5px solid #1C7E8B'}
        alignItems={'center'}
        gap={'5px'}
        direction={'column'}
        key={'team' + Math.random()}>
            <Box w={'96px'} h={'96px'} rounded={'full'} backgroundColor={'#D9D9D9'} mt={'14px'}></Box>
            <Text color={'#000'} fontWeight={'700'} mt={'4px'}>Vedant Kumar</Text>
            <Text color={'#601818'} fontWeight={'700'} >Founder</Text>
            <Flex mt={'12px'}>
                Socials
            </Flex>
        </Flex>
    )
}

export default Section3;