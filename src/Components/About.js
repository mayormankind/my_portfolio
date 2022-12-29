import React from 'react';
import { Box, Flex, Text, Stack, Image, useMediaQuery, Button, useColorMode } from '@chakra-ui/react';

export default function About() {
  const {colorMode}=useColorMode();
  const isDark = colorMode=='dark';
  return (
      <Stack px={{sm:'0',base:'20px'}} mt={{sm:'0',base:'10px'}} position='relative'>
        <Flex p={{sm:'40px',base:'0'}} justify={'center'} align='center' flexDir={{sm:'row',base:'column'}}>
          <Box align='flex-start' w={{sm:'60%',base:'100%'}}>
            <Text fontSize={{sm:'3xl',base:'2xl'}}>Hello there, I'm </Text>
            <Text fontSize={{sm:'5xl',base:'3xl'}} fontWeight='bold'>Makinde Mayowa</Text>
            <Text>I'm an entusiastic frontend developer with lots of vibes 🚀🚀. I specialize in making catchy web apps that you might just want to sleep on. I really do love classic designs and interfaces and that makes me want to work on myself. You get what you want only if you give what you have. Guess i have the time that's why i'm giving it. Lol!!😂😂😂😂</Text>
            <Button bg={isDark?'white':'rgb(30,30,30)'} color={isDark?'black':'white'} w={{sm:'80%',base:'100%'}} mt={'10px'} as='a' href='mailto:mayowamakinde23@gmail.com'>Hire Me</Button>
          </Box>
          <Image alt='Makinde Mayowa' src='/mayowa.jpg' objectFit={'contain'} boxSize={'250'} boxShadow='lg' alignSelf={'center'} mt={{sm:'0',base:'10px'}} borderRadius='50%' border={isDark?'10px solid silver':'10px solid black'}/>
        </Flex>
      </Stack>
  )
}