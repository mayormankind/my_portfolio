import React from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import Header from '../Components/Header';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Footer from '../Components/Footer';
import Categories from './Categories';

function Layout({ setCategory }) {
  const {colorMode}=useColorMode();
  const isDark = colorMode=='dark';
  return (
  <Box w='100%' h={'100%'}>
    <Header/>
    <Home/>
    <About/>
    {/* <Projects/> */}
    <Categories setCategory={setCategory}/>
    <Footer/>
  </Box>
  )
}

export default Layout;