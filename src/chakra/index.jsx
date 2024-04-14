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
                fontFamily: 'poppins',
            },
        }),
    },
    colors: {
        skyBlue: '#E7F0FF',
        faintBlue: '#0A6DE4',    
        darkGray: '#676E7E',
        faintText: '#8B9BB0',
        blueText: '#0D6EFD',    
    }
})