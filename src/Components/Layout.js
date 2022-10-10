import React from 'react';
import { Box, Flex, ListItem,List,Text, VStack, Circle, useColorMode, useMediaQuery, Divider } from '@chakra-ui/react';
import Header from './Header';
import About from './About';
import Social from './Social';
import Framework from './Framework';
import Projects from './Projects';

function Layout() {
  const isDark = useColorMode();
  const [isBigScreen] = useMediaQuery('(min-width:600px)');
  return (
  <Flex justify='center'  bg='rgba(0,0,0,0.2)' w='100%' h={'100%'}>
    <VStack w='100%' spacing={0} h='100%'>
        <About/>
        <Framework/>
        <Divider color={'green'} w='100%'/>
        <Projects/>
        <Social/>
    </VStack>
  </Flex>
  )
}

export default Layout;