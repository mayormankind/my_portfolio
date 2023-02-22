import React from 'react';
import { Box, Flex, Text, Stack, Image, useMediaQuery, Button, useColorMode } from '@chakra-ui/react';

export default function About() {
  const {colorMode}=useColorMode();
  const isDark = colorMode=='dark';
  return (
      <Stack px={{sm:'0',base:'20px'}} mt={{sm:'0',base:'10px'}} position='relative'>
        <Flex p={{sm:'40px',base:'0'}} gridGap={{sm:'30px',base:'10px'}} justify={'center'} align='center' flexDir={{sm:'row',base:'column'}}>
          <Box w={{sm:'60%',base:'100%'}}>
            <Text fontSize={{sm:'3xl',base:'2xl'}}>Hello there, I'm </Text>
            <Text fontSize={{sm:'5xl',base:'3xl'}} fontWeight='bold'>Makinde Mayowa</Text>
            <Text textAlign={'justify'}>, a skilled and experienced web developer with a passion for crafting innovative and visually stunning websites. With 3 years of experience in the industry, I have honed my skills in developing cutting-edge websites that not only look great but also function seamlessly. With a keen eye for detail and a commitment to excellence, I work closely with clients to understand their needs and create custom solutions that exceed their expectations. Whether you need a simple website or a complex web application, I have the expertise and creativity to bring your vision to life. Check out my portfolio to see some of the incredible projects I have worked on.</Text>
            <Button bg={isDark?'white':'rgb(30,30,30)'} color={isDark?'black':'white'} w={{sm:'80%',base:'100%'}} mt={'10px'} as='a' href='mailto:mayowamakinde23@gmail.com'>Mail Me</Button>
          </Box>
          <Image alt='Makinde Mayowa' src='/mayowa.jpg' objectFit={'contain'} boxSize={'250'} boxShadow='lg' alignSelf={'center'} mt={{sm:'0',base:'10px'}} borderRadius='50%' border={isDark?'10px solid silver':'10px solid black'}/>
        </Flex>
      </Stack>
  )
}

  <Text textAlign={'justify'}>I'm an entusiastic frontend developer with lots of vibes 🚀🚀. I specialize in making catchy web apps that you might just want to sleep on. I really do love classic designs and interfaces and that makes me want to work on myself. You get what you want only if you give what you have. Guess i have the time that's why i'm giving it. Lol!!😂😂😂😂</Text>
