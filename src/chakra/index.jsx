import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    breakpoints:{
        xs: "480px",
        sm: "600px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1536px"
    },
    colors: {
        dark:{
            100: '#262626',
            700: '#262626'
        },
        light:{
            100: '#FAFAFA',
            700: '#FAFAFA',
        }
    }
})