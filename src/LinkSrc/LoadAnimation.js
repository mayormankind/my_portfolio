import { Box, calc, Text, Flex, keyframes } from '@chakra-ui/react';
import React from 'react'

function LoadAnimation() {
    const batt = keyframes`
        0%{
            height: 100%;
            background: green;
        }
        100%{
            height: 0%;
            background: red;
        }
    `;
    const anim = keyframes`
        0%{
            width: 100%;
            color: rgb(120,10,12);
        }
        100%{
            width: 100%;
            color: green;
        }
    `
  return (
    <Flex h='100%' w='100%' bg={'black'} minH='100vh' justify={'center'} align='center'>
        <Box position='relative' w='400px' h='100px'>
            <Text fontSize={'7xl'} position='absolute' w={'100%'} bgGradient='linear(to-r, red,green)' bgClip='text' fontWeight='bold' color={'rgba(155,155,155,0.3)'} animation={`${anim} 3s linear infinite`}>Man kind</Text>
        </Box>
        {/* <Box border={'6px solid white'} bg='transparent' borderRadius='7px' position={'relative'} w='150px' h='300px' _before={{content:`''`,position:'absolute',height:'20px',width:'40px',background:'white',right:'36%'}}>
            <Box w='100%' h='100%' bg='white' position={'absolute'} bottom='0' animation={`${batt} 3s linear reverse infinite`}></Box>
        </Box> */}
    </Flex>
  )
}

export default LoadAnimation;