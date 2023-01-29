import {
    Box,
    Flex,
    Heading
} from '@chakra-ui/react';

function Home() {
    return (
        <Flex
        w={'100%'}
        h={'calc(var(--height) - 78px)'}
        mt={'78px'}
        pt={'28px'}
        direction={'column'}
        alignItems={'center'}
        zIndex={10}
        className={'home-landing'}>
            <Flex gap={'8px'}>
                <Heading variant={'h2'}>
                    We 
                </Heading>
                <Heading variant={'h2'} color={'green-default'}>
                    #maketreesinteresting
                </Heading>
            </Flex>
        </Flex>
    )
}

export default Home;