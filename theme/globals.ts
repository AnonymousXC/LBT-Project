

const Colors = {
    light: {
        '--bg-default': '#000',
        '--fg-default': '#fff',
        '--fg-secondary': '#ffffff',
        '--green-default': '#259422',
        '--button-primary-bg': '#15AB90',
    },
    //
    dark: {
        '--bg-default': '#000000',
        '--fg-default': '#ffffff',
        '--fg-secondary': '#ffffff',
        '--green-default': '#259422',
        '--button-primary-bg': '#15AB90'
    },
}

const semanticTokens = {
    colors: {
        'bg-default': {
            default: Colors.light["--bg-default"],
            _dark: Colors.dark["--bg-default"]
        },
        'fg-default': {
            default: Colors.light["--fg-default"],
            _dark: Colors.dark["--fg-default"]
        },
        'fg-secondary': {
            default: Colors.light["--fg-secondary"],
            _dark: Colors.dark["--fg-secondary"]
        },
        'green-default': {
            default: Colors.light["--green-default"],
            _dark: Colors.dark["--green-default"]
        },
        'button-primary': {
            default: Colors.light["--button-primary-bg"],
            _dark: Colors.dark["--button-primary-bg"]
        }
    }
}

const styles = {
    global: {
        body: {
            backgroundColor: 'bg-default',
            color: 'fg-default',
        }
    }
}

export {Colors, semanticTokens, styles};