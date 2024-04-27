import { Flex, Box, Text, Image, useColorMode, Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import { Reveal } from '../Components/Reveal';

export default function About() {
    const {colorMode}=useColorMode();
    const isDark = colorMode=='dark';
  return (
    <Grid w='100%' h='100%' minH='100vh' id='about'>
        <Grid gap='20px' maxW='1000px' w='100%' m='auto'>
            <Box mx='auto'>
                <Reveal>
                    <Flex pos='relative'>
                        <Text as={'span'} fontSize={{sm:'70px',base:'4xl'}} fontWeight='bold' textAlign={'left'} opacity='.2' w='100%'>A M</Text>
                        <Text as={'span'} pos='absolute' top={{sm:'1.5em',base:'1em'}} textAlign={'left'} fontSize={{sm:'2xl',base:'20px'}} w='100%'>About Me</Text>
                    </Flex>
                </Reveal>
                </Box>
            <Flex w='100%' flexDir={{md:'row',base:'column'}}  justify={'space-between'} align='center' gap={'20px'} p={{lg:'20px',base:'20px 0'}}>
                <Reveal>
                    <Box borderRadius={'md'} boxSize={'250px'} m='auto' mt={{sm:'0',base:'10px'}}>
                        <Image alt='Makinde Mayowa' borderRadius={'md'} src='/mayowa.jpg' loading='lazy' objectFit={'cover'}/>
                    </Box>
                </Reveal>
                <Flex flexDir='column' gap='10px' w={{sm:'70%',base:'100%'}} p={{sm:'0 10px',base:'0 20px'}}>
                    <Reveal>
                        <Text fontSize={{md:'3xl',sm:'2xl',base:'xl'}} fontWeight='bold'>I'm Makinde Mayowa! 👋👋</Text>
                    </Reveal>
                    <Reveal>
                        <Text fontSize='sm' textAlign={'justify'}>A skilled and experienced web developer with a passion for crafting innovative and visually stunning  websites. With 3 years of experience in the industry, I have honed my skills in developing cutting-edge websites that not only look great but also function seamlessly. With a keen eye for detail and a commitment to excellence,I work closely with team members to understand and create custom solutions that exceed their expectations. </Text>
                    </Reveal>
                </Flex>
            </Flex>
        </Grid>
    </Grid>
  )
}