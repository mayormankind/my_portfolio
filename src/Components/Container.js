import { Box, useColorMode } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'

export default function Container({children}) {
  const {colorMode} = useColorMode();
  const isDark = colorMode=='dark';
  return (
    <Box className='bgg' h='100%' w={'100%'} overflow='hidden' bg={isDark? '#262626' : '#FAFAFA'}>
        <Box maxW={'1200px'} mx='auto' w={'100%'}>
          <Header/>
          <Box position={'relative'}>
            {children}
          </Box>
        </Box>
    </Box>
  )
}
