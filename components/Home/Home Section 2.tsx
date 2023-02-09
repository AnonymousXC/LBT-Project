import {
    Box, 
    Heading,
    Text,
    Divider,
} from '@chakra-ui/react';

function HomeSection2() {
    return (
        <Box
        mt={'22px'}
        w={'100%'}
        className={'section-2'}>
            <Heading variant={'h1'} pl={'24px'}>Why?</Heading>
            <Text variant={'emphysis'} pl={'24px'} mt={'24px'} maxW={'300px'} w={'100%'}>Trees are boring, and teenagers are not interested in them, and do not like learning about them through conventionally boring mediums, such as textbooks!</Text>
            <Heading variant={'h1'} pl={'24px'} mt={'38px'}>How?</Heading>
            <Text variant={'emphysis'} pl={'24px'} mt={'24px'} maxW={'300px'} w={'100%'}>We help teenagers learn more about the practical uses of trees, not the boring uses they have been taught in science class!</Text>
            <Divider mt={'25px'} w={'90%'} position='relative' left={'50%'} transform={'translateX(-50%)'}  backgroundColor={'fg-default'} />
        </Box>
    )
}

export default HomeSection2;