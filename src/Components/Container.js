import { Box, useColorMode } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'

export default function Container({children}) {
  const {colorMode} = useColorMode();
  const isDark = colorMode=='dark';
  return (
    <Box className='bgg' h='100%' w={'100%'} overflow='hidden' bgGradient={isDark?'linear(to-tr,black,red,black)':'linear(to-tr,white,lightgray,gray)'}>
        <Box maxW={'1200px'} mx='auto' w={'100%'}>
          <Header/>
          <Box position={'relative'}>
            {children}
          </Box>
        </Box>
    </Box>
  )
}
