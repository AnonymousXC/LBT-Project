import {
    Box, 
    Heading,
    Text,
    Divider,
} from '@chakra-ui/react';

function HomeSection2() {
    return (
        <Box
        w={'100%'}
        pl={'24px'}>
            <Heading variant={'h1'}>Why?</Heading>
            <Text variant={'emphysis'} mt={'24px'} maxW={'300px'} w={'100%'}>Trees are boring, and teenagers are not interested in them, and do not like learning about them through conventionally boring mediums, such as textbooks!</Text>
            <Heading variant={'h1'} mt={'38px'}>How?</Heading>
            <Text variant={'emphysis'} mt={'24px'} maxW={'300px'} w={'100%'}>We help teenagers learn more about the practical uses of trees, not the boring uses they have been taught in science class!</Text>
            <Divider mt={'12px'} w={'90%'} />
        </Box>
    )
}

export default HomeSection2;