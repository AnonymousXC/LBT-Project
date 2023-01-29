import { extendTheme } from "@chakra-ui/react";
import { semanticTokens, styles } from "./globals";
import Button from "./components/Button";
import Heading from "./components/Heading";


const components = {
    Button,
    Heading,
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