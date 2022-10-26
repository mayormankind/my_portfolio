import footer from './wave.svg';
import { Box,Image, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'
// import LoadAnimation from '../LinkSrc/LoadAnimation';

export default function Container({children}) {
  const {colorMode} = useColorMode();
  const isDark = colorMode=='dark';
  return (
    <Box h='100%' w={'100%'} overflow='hidden' bgGradient={isDark?'linear(to-tr,black,red,black)':'linear(to-tr,lightgray,whitesmoke)'}>
      {/* <LoadAnimation/> */}
        <Box maxW={'7xl'} mx='auto' w={'100%'}>
          <Header/>
          <Box position={'relative'}>
            {children}
          </Box>
        </Box>
    </Box>
  )
}
