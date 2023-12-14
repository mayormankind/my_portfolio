import React from 'react';
import { Box, Flex, useColorMode } from '@chakra-ui/react';
import Header from '../Components/Header';
import About from './About';
import Projects from './Projects';
import Footer from '../Components/Footer';

function Layout() {
  const {colorMode}=useColorMode();
  const isDark = colorMode=='dark';
  return (
  <Flex justify='center' w='100%' h={'100%'} flexDir='column' overflowX={'hidden'}>
    <Header/>
    <About/>
    <Projects/>
    <Footer/>
  </Flex>
  )
}

export default Layout;