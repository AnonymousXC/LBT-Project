import { extendTheme } from "@chakra-ui/react";
import { semanticTokens, styles } from "./globals";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Text from "./components/Text";


const components = {
    Button,
    Heading,
    Text,
}

const fonts = {
    body: 'Arial, Helvetica, sans-serif',
}


const theme = extendTheme({
    semanticTokens,
    styles,
    components,
    fonts
})

export default theme;