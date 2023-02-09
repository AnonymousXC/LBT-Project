import {
    Box
} from '@chakra-ui/react'

const VideoPlayer = (props) => {
    return (
        <Box
            w={'90%'}
            zIndex={100}
            borderStyle={'solid'}
            borderWidth={'5px'}
            borderColor={'#15AB90'}
            borderRadius={'15px'}
            maxW={'800px'}
            mb={'30px'}
            {...props}>
                <iframe width="100%" height="auto" style={{ aspectRatio : '16 / 9', borderRadius : '10px' }} frameBorder='0' src={props.source} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Box>
    )
}

export default VideoPlayer;