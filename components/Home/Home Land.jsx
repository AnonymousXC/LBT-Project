import {
    Box,
    Flex,
    Heading,
    Divider,
} from '@chakra-ui/react';
import VideoPlayer from '@/components/Global/Video Player'

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
            <VideoPlayer source={'https://www.youtube.com/embed/GbxPHdgqDR4'} />
            <Divider w={'90%'} mb={'1rem'} flex='1' backgroundColor={'fg-default'} />
        </Flex>
    )
}

export default Home;