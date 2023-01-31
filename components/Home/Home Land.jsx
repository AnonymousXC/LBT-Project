import {
    Box,
    Flex,
    Heading,
    Divider,
} from '@chakra-ui/react';

function Home() {
    return (
        <Flex
        w={'100%'}
        mt={'78px'}
        pt={'28px'}
        mb={'22px'}
        direction={'column'}
        alignItems={'center'}
        zIndex={10}
        className={'home-landing'}>
            <Flex gap={'8px'} mb={'26px'} flexWrap={'wrap'} justifyContent={'center'}>
                <Heading variant={'h2'}>
                    We 
                </Heading>
                <Heading variant={'h2'} color={'green-default'}>
                    #maketreesinteresting
                </Heading>
            </Flex>
            <Box
            w={'90%'}
            zIndex={100}
            borderStyle={'solid'}
            borderWidth={'5px'}
            borderColor={'#15AB90'}
            borderRadius={'15px'}
            maxW={'800px'}
            mb={'30px'}>
                <iframe width="100%" height="auto" style={{ aspectRatio : '16 / 9', borderRadius : '10px' }} src="https://www.youtube.com/embed/GbxPHdgqDR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Box>
            <Divider w={'90%'} mb={'1rem'} flex='1' color={'fg-default'} />
        </Flex>
    )
}

export default Home;