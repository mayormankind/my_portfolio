import React from 'react';
import { Box, Flex, ListItem,List,Text, VStack, Circle, useColorMode, useMediaQuery, Divider } from '@chakra-ui/react';
import Header from './Header';
import About from './About';
import Framework from './Framework';
import Projects from './Projects';
import Footer from './Footer';

function Layout() {
  const {colorMode}=useColorMode();
  const isDark = colorMode=='dark';
  return (
  <Flex justify='center' w='100%' h={'100%'}>
    <Box w='100%' h='100%'>
        <About/>
        <Projects/>
        <Footer/>
    </Box>
  </Flex>
  )
}

export default Layout;

// bg={isDark?'rgb(15,15,15)':'rgb(150,150,150)'}
// bg={(isDark)?'rgba(0,0,0,0.2)':'rgba(155,155,155,0.7'}