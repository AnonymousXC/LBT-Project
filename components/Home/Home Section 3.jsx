import {
    Box,
    Flex,
    Text,
    Image,
    Button,
    Heading,
    Divider,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import Airtable from 'airtable';
import { Table } from 'airtable';


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

    const [ DBData, setDBData ] = useState()

    // useEffect(() => {
    //     fetchData(setDBData)
    //     setInterval(() => {
    //         console.log(DBData)
    //     }, 2000)
    // }, [])

    return (
        <Flex
            mt={'18px'}
            w={'100%'}
            pb={'120px'}
            alignItems={'center'}
            direction={'column'}
            className={'section-3'}>
            <Heading variant={'h2'}> Institutions that trust us </Heading>
            <Box w={'85%'} mt={'52px'}>
                <Slider {...sliderSetting}>
                    <SliderContentInstution img='https://i.ibb.co/8B0VcF2/Xartup.png' />
                    <SliderContentInstution img='https://i.ibb.co/7JZBfPN/IAF.jpg' />
                    <SliderContentInstution img='https://i.ibb.co/xzFFn1H/SCS.jpg' />
                    <SliderContentInstution img='https://i.ibb.co/t2XVhPh/Social-Shifters.png' />
                </Slider>
            </Box>
            <Divider mt={'20px'} backgroundColor={'fg-default'} width={'90%'} />
            <Heading variant={'h2'} mt={'24px'}> Media Spotlight </Heading>
            <Box w={'85%'} mt={'56px'}>
                <Slider {...sliderSetting}>
                    <SliderContentInstution img='https://i.ibb.co/8B0VcF2/Xartup.png' />
                    <SliderContentInstution img='https://i.ibb.co/7JZBfPN/IAF.jpg' />
                    <SliderContentInstution img='https://i.ibb.co/xzFFn1H/SCS.jpg' />
                    <SliderContentInstution img='https://i.ibb.co/t2XVhPh/Social-Shifters.png' />
                </Slider>
            </Box>
            <Divider mt={'20px'} backgroundColor={'fg-default'} width={'90%'} />
            <Heading variant={'h2'} mt={'47px'}> Meet our team! </Heading>
            <Box w={'85%'} mt={'50px'}>
                <Slider {...sliderSettionTeam}>
                    <SliderContentTeam name={'Vedant Kumar'} position={'Founder'} />
                    <SliderContentTeam name={'Vedant Kumar'} position={'Founder'} />
                    <SliderContentTeam name={'Vedant Kumar'} position={'Founder'} />
                    <SliderContentTeam name={'Vedant Kumar'} position={'Founder'} />
                    <SliderContentTeam name={'Vedant Kumar'} position={'Founder'} />
                    <SliderContentTeam name={'Vedant Kumar'} position={'Founder'} />  
                </Slider>
            </Box>
        </Flex>
    )
}

function SliderContentInstution({img}) {
    return (
        <Box
        w={'68px'}
        h={'68px'}
        backgroundColor={'#fff'}>
            <Image src={img} />
        </Box>
    )
}

function SliderContentTeam({name, position}) {
    return(
        <Flex 
        w={'95%'} 
        maxW={'300px'}
        backgroundColor={'green-default'}
        rounded={'10px'}
        border={'5px solid #1C7E8B'}
        alignItems={'center'}
        gap={'5px'}
        direction={'column'}>
            <Box w={'96px'} h={'96px'} rounded={'full'} backgroundColor={'#D9D9D9'} mt={'14px'}></Box>
            <Text color={'#000'} fontWeight={'700'} mt={'4px'}>{name}</Text>
            <Text color={'#601818'} fontWeight={'700'} >{position}</Text>
            <Flex mt={'12px'} gap={'16px'}>
                <Button variant={'unstyled'} w={'30px'} h={'30px'} _hover={{transform: 'scale(1.1)'}}>
                    <Image src={'sm/LinkedIn.png'} />
                </Button>
                <Button variant={'unstyled'} w={'30px'} h={'30px'} _hover={{transform: 'scale(1.1)'}}>
                    <Image src={'sm/Instagram.png'} />
                </Button>
                <Button variant={'unstyled'} w={'30px'} h={'30px'} _hover={{transform: 'scale(1.1)'}}>
                    <Image src={'sm/YouTube.png'} />
                </Button>
            </Flex>
            <Text px={'16px'} color={'#000'} mt={'16px'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit animi pariatur assumenda iste ducimus blanditiis, dignissimos mollitia fugiat distinctio alias porro harum. Rerum nemo cumque quas ducimus voluptatem soluta repellendus?</Text>
            <Button variant={'unstyled'} color={'#072D19'} _hover={{ color: '#000'}}>Learn More!</Button>
        </Flex>
    )
}

async function fetchData(setDBData)   {
    Airtable.configure({
        apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY
    });
    const base1 = await  Airtable.base('appXgN8LuyTPSXgAK')
    await base1('Table 1').select().eachPage((records) => {
        let data = []
        records.forEach((record) => {
            data.push(record._rawJson.fields)
        })
        setDBData(data)
    })
}

export default Section3;