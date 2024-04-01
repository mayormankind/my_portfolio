import { Flex, Box, Text, Image, Button, useColorMode } from '@chakra-ui/react';
import React from 'react';
import Framework from '../Components/Framework';
import BackdropEffect from '../Components/BackdropEffect';
import { ColoredText, SidebarAnimation } from '../chakra/Styles';

export default function About() {
    const {colorMode}=useColorMode();
    const isDark = colorMode=='dark';
  return (
    <Box bg={isDark?'rgba(155,155,155,0.1)':'rgba(0,0,0,0.2)'} w='100%' h='100%' pos='relative' id='about' overflow='hidden'>
        <Flex mx='auto' w='100%' flexDir={{md:'row',base:'column'}} maxW='1100px' justify={'space-between'} align='center' gap={'20px'} p={{lg:'20px',base:'20px 0'}}>
            <Flex flexDir='column' gap='10px' w={{sm:'70%',base:'100%'}} p={{sm:'0 10px',base:'0 20px'}}>
                <Text fontSize={{md:'3xl',base:'2xl'}}>Hello there, I'm </Text>
                <Text fontSize={{md:'5xl',sm:'4xl',base:'3xl'}} fontWeight='bold'>Makinde Mayowa</Text>
                <Text as='h2' textAlign={'justify'}>A skilled and experienced web developer with a passion for crafting <ColoredText>innovative</ColoredText> and <ColoredText>visually stunning</ColoredText>  websites. With 3 years of experience in the industry, I have honed my skills in developing cutting-edge websites that not only look great but also function seamlessly. With a keen eye for detail and a commitment to excellence,I work closely with team members to understand and create custom solutions that exceed their expectations. </Text>
                <Button bg={isDark?'white':'rgb(30,30,30)'} color={isDark?'black':'white'} w={{lg:'50%', base:'100%'}} mx={{xs:'0',base:'auto'}} as='a' href='mailto:mayowamakinde23@gmail.com' cursor='pointer'>Mail Me</Button>
            </Flex>
            <Box border={isDark?'10px solid silver':'10px solid black'} boxSize={'250px'} m='auto' mt={{sm:'0',base:'10px'}}>
                <Image alt='Makinde Mayowa' src='/mayowa.jpg' loading='lazy' objectFit={'cover'}/>
            </Box>
        </Flex>
        <Framework/>
        <BackdropEffect/>
        <SidebarAnimation/>
    </Box>
  )
}