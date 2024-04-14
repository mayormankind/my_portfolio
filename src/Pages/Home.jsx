import { Flex, Box, Grid, Text, Image, Button, useColorMode } from '@chakra-ui/react';
import React from 'react';
import Framework from '../Components/Framework';
import BackdropEffect from '../Components/BackdropEffect';
import { ColoredText, SidebarAnimation } from '../chakra/Styles';
import { Reveal } from '../Components/Reveal';

export default function Home() {
    const {colorMode}=useColorMode();
    const isDark = colorMode=='dark';
  return (
    <Grid w='100%' h='100%' minH='100vh' pos='relative' id='home' overflow='hidden'>
        <Flex m='auto' w='100%' flexDir={{md:'row',base:'column'}} maxW='1000px' justify={'space-between'} align='center' gap={'20px'} p={{lg:'20px',base:'20px 0'}}>
            <Flex flexDir='column' gap='10px' w={{sm:'70%',base:'100%'}} p={{sm:'0 10px',base:'0 20px'}}>
                <Reveal>
                    <Text fontSize={{md:'4xl',sm:'3xl',base:'2xl'}} fontWeight='bold'>Software Engineer</Text>
                </Reveal>
                <Reveal>
                    <Text fontSize={'sm'} fontWeight='bold'>A skilled and experienced web developer with a passion for crafting innovative and visually stunning  websites, apps and SPA's.</Text>
                </Reveal>
                <Box mx={{xs:'0',base:'auto'}} mt='10px' w={{lg:'50%', base:'100%'}}>
                    <Reveal>
                        <Button bg={'faintBlue'} as='a' href='mailto:mayowamakinde23@gmail.com' cursor='pointer' w='100%'>Mail Me</Button>
                    </Reveal>
                </Box>
            </Flex>
            <Reveal>
                <Box border={isDark?'10px solid silver':'10px solid black'} boxSize={'250px'} m='auto' mt={{sm:'0',base:'10px'}} borderRadius='50%'>
                    <Image alt='Makinde Mayowa' src='/mayowa.jpg' loading='lazy' objectFit={'cover'} borderRadius='50%'/>
                </Box>
            </Reveal>
        </Flex>
        <Framework/>
        <BackdropEffect/>
    </Grid>
  )
}