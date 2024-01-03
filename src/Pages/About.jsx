import { Flex, Box, Text, Image, Button, useColorMode } from '@chakra-ui/react';
import React from 'react';
import Framework from '../Components/Framework';
import BackdropEffect from '../Components/BackdropEffect';
import { ColoredText, SidebarAnimation } from '../chakra/Styles';

export default function About() {
    const {colorMode}=useColorMode();
    const isDark = colorMode=='dark';
  return (
    <Flex bg={isDark?'rgba(155,155,155,0.1)':'rgba(0,0,0,0.2)'} w='100%' h='100%' flexDir='column' pos='relative' id='about'>
        <Flex mx='auto' w='100%' flexDir={{sm:'row',base:'column'}} maxW='1100px' justify={'space-between'} align='center' p='20px 0'>
            <Box w={{sm:'70%',base:'100%'}} p={{sm:'0 10px',base:'0 20px'}}>
                <Text fontSize={{sm:'3xl',base:'2xl'}}>Hello there, I'm </Text>
                <Text fontSize={{sm:'5xl',base:'3xl'}} fontWeight='bold'>Makinde Mayowa</Text>
                <Text textAlign={'justify'}>A skilled and experienced web developer with a passion for crafting <ColoredText>innovative</ColoredText> and <ColoredText>visually stunning</ColoredText>  websites. With 3 years of experience in the industry, I have honed my skills in developing cutting-edge websites that not only look great but also function seamlessly. With a keen eye for detail and a commitment to excellence,I work closely with team members to understand and create custom solutions that exceed their expectations. </Text>
                <Button bg={isDark?'white':'rgb(30,30,30)'} color={isDark?'black':'white'} w={{sm:'80%',base:'100%'}} mt={'10px'} as='a' href='mailto:mayowamakinde23@gmail.com' cursor='pointer'>Mail Me</Button>
            </Box>
            <Box borderRadius='50%' border={isDark?'10px solid silver':'10px solid black'} boxSize={'250px'} alignSelf={'center'} mt={{sm:'0',base:'10px'}}>
                <Image alt='Makinde Mayowa' borderRadius='50%' src='/mayowa.jpg' loading='lazy' objectFit={'cover'}/>
            </Box>
        </Flex>
        <Framework/>
        <BackdropEffect/>
        <SidebarAnimation/>
    </Flex>
  )
}
// I work closely with clients to understand their needs and create custom solutions that exceed their expectations. Check out my portfolio to see some of the incredible projects I have worked on.
// Whether you need a simple website or a complex web application, I have the expertise and creativity to bring your vision to life.