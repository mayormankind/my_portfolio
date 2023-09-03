import { Flex, Box, Text, Image, Button, useColorMode } from '@chakra-ui/react';
import React from 'react';
import Framework from '../Components/Framework';
import BackdropEffect from '../Components/BackdropEffect';

export default function About() {
    const {colorMode}=useColorMode();
    const isDark = colorMode=='dark';
  return (
    <Flex bg={'rgba(0,0,0,0.2)'} w='100%' h='100%' flexDir='column' pos='relative'>
        <Flex mx='auto' w='100%' flexDir={{sm:'row',base:'column'}} maxW='1100px' justify={'space-between'} align='center' p='20px 0'>
            <Box w={{sm:'70%',base:'100%'}}>
                <Text fontSize={{sm:'3xl',base:'2xl'}}>Hello there, I'm </Text>
                <Text fontSize={{sm:'5xl',base:'3xl'}} fontWeight='bold'>Makinde Mayowa</Text>
                <Text textAlign={'justify'}>A skilled and experienced web developer with a passion for crafting innovative and visually stunning websites. With 3 years of experience in the industry, I have honed my skills in developing cutting-edge websites that not only look great but also function seamlessly. With a keen eye for detail and a commitment to excellence, I work closely with clients to understand their needs and create custom solutions that exceed their expectations. Whether you need a simple website or a complex web application, I have the expertise and creativity to bring your vision to life. Check out my portfolio to see some of the incredible projects I have worked on.</Text>
                <Button bg={isDark?'white':'rgb(30,30,30)'} color={isDark?'black':'white'} w={{sm:'80%',base:'100%'}} mt={'10px'} as='a' href='mailto:mayowamakinde23@gmail.com'>Mail Me</Button>
            </Box>
            <Box borderRadius='50%' border={isDark?'10px solid silver':'10px solid black'} boxSize={'250px'} alignSelf={'center'} mt={{sm:'0',base:'10px'}}>
                <Image alt='Makinde Mayowa' borderRadius='50%' src='/mayowa.jpg' objectFit={'cover'}/>
            </Box>
        </Flex>
        <Framework/>
        <BackdropEffect/>
    </Flex>
  )
}
