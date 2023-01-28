import { extendTheme } from "@chakra-ui/react";
import { semanticTokens, styles } from "./globals";
import Button from "./components/Button";


const components = {
    Button,
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