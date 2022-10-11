import React from 'react';
import { Box, Flex, Text, VStack, Circle, Stack, Image, Spacer, useMediaQuery, Button, useColorMode } from '@chakra-ui/react';

export default function About() {
  const [isBigScreen] = useMediaQuery('(min-width:600px)');
  const {colorMode}=useColorMode();
  const isDark = colorMode=='dark';
  return (
      <Stack px={isBigScreen?'0':'20px'} mt={isBigScreen?'0':'10px'} position='relative'>
        <Flex p={isBigScreen ? '40px':'0'} justify={'center'} flexDir={isBigScreen?'row':'column'}>
          <Box align='flex-start' w={isBigScreen?'70%':'100%'}>
            <Text fontSize={isBigScreen ? '3xl' :'2xl'}>Hello there, I'm </Text>
            <Text fontSize={isBigScreen ? '5xl' :'3xl'} fontWeight='bold'>Makinde Mayowa</Text>
            <Text>I am an entusiastic frontend developer with lots of vibes. You get what you want only if you give what you have. Lol</Text>
            <Button w={isBigScreen?'80%':'100%'} mt={'10px'}>Hire Me</Button>
          </Box>
          <Image alt='Makinde Mayowa' src='/mayowa.jpg' objectFit={'cover'} boxSize={'250'} boxShadow='lg' alignSelf={'center'} mt={isBigScreen?'0':'10px'} borderRadius='50%' border={isDark?'10px solid silver':'10px solid black'}/>
        </Flex>
      </Stack>
  )
}

// export default About;