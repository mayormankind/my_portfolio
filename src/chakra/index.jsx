import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';


export const theme = extendTheme({
    config : {
        initialColorMode: 'dark',
        useSystemColorMode: true,
    },
    breakpoints:{
        xs: "480px",
        sm: "600px",
        md: "850px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1536px"
    },
    styles: {
        global: (props)=>({
            body: {
                bg: mode('white','black')(props),
                color: mode('black','white')(props),
                // fontFamily: 'Constantia',
                // fontFamily: 'Harlow Solid Italic',
            },
        }),
    },
    colors: {
        dark:{
            100: '#262626',
            700: '#262626'
        },
        light:{
            100: '#FAFAFA',
            700: '#FAFAFA',
        },
        
    }
})