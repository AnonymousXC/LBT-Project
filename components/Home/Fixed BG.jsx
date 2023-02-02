import { useEffect } from 'react';
import {
    Box,
    Image,
} from '@chakra-ui/react';
import styles from '@/styles/BackgroundFixed.module.css'

const FixedBG = () => {

    useEffect(() => {
        document.querySelectorAll('.leaf-div > div > img').forEach((el) => {
            el.addEventListener('load', () => {
                el.style.display = 'block'
            })
        })
    })

    return (
        <Box
            w={'100%'}
            h={'var(--height)'}
            position={'fixed'}
            top={'0px'}
            left={'0px'}
            zIndex={-5}
            className={'Animated-BG'}>

            <Box className={styles.leaf + ' leaf-div'}>
                <Box>
                    <Image src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px" />
                </Box>
                <Box>
                    <Image src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px" />
                </Box>
                <Box>
                    <Image src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px" />
                </Box>
                <Box>
                    <Image src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px" />
                </Box>
                <Box>
                    <Image src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px" />
                </Box>
                <Box>
                    <Image src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" height="75px" width="75px" />
                </Box>
                <Box>
                    <Image src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px" />
                </Box>
                <Box>
                    <Image src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px" />
                </Box>
                <Box>
                    <Image src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px" />
                </Box>
            </Box>

        </Box>
    )
}

export default FixedBG;