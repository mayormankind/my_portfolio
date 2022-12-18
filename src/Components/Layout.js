import React from 'react';
import { Box, Flex, ListItem,List,Text, VStack, Circle, useColorMode, useMediaQuery, Divider } from '@chakra-ui/react';
import Header from './Header';
import About from './About';
import Social from './Social';
import Framework from './Framework';
import Projects from './Projects';

function Layout() {
  const {colorMode}=useColorMode();
  const isDark = colorMode=='dark';
  const [isBigScreen] = useMediaQuery('(min-width:600px)');
  return (
  <Flex justify='center' bg={(isDark)?'rgba(0,0,0,0.2)':'rgba(155,155,155,0.7'} w='100%' h={'100%'}>
    <VStack w='100%' spacing={0} h='100%'>
        <About/>
        <Framework/>
        <Projects/>
        <Social/>
    </VStack>
  </Flex>
  )
}

export default Layout;