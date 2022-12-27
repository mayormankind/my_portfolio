import { Box, Flex, useColorMode, Image, Text, Button, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

function ProjectCard(props) {
    const {colorMode}=useColorMode();
    const isDark = colorMode==='dark';
    function BorderColorGen(){
        var color = ''
        const colors = ['red','green','blue','purple','orange','yellow','black','skyblue','magenta','cyan','deepblue','violet','indigo']
        const colorIndex = Math.floor(Math.random()*13);
        color = colors[colorIndex];
        return (color);
    }

  return (
    <Box p={'20px'} mb={'30px'} key={props.id} rounded={'md'} minW={{sm:'800px',base:'100%'}} maxW='800px' bg={isDark?'rgb(40,40,40)':'rgb(200,200,200)'} boxShadow='xl'>
        <Flex position='relative' flexDir={{sm:'row',base:'column'}} w='100%' maxW={'900px'} gridGap={{sm:'30px',base:'0'}} mx='auto'>
            <Image src={props.img} rounded={'md'} w='300px' h='200px' boxShadow={'xl'} mx={'auto'}/>
            <Box flex='2' gridGap={'20px'} w={'100%'} h='100%' minH={{sm:'250px',base:'100%'}}>
            <VStack p={{sm:'20px',base:'10px'}} flex='2'>
                <Box w={'100%'}>
                    <Text as={'h2'} textAlign='center' fontFamily={'open sans'} fontSize='25px' fontWeight={'bold'}>{props.name} -</Text>
                    <Text fontSize='15px' textAlign={'justify'}>{props.det}</Text>
                </Box>    
                <HStack spacing={'7px'} flexWrap={'wrap'} w='100%' fontSize={'15px'}>
                    {props.frames.map(tech=>(
                        <Text border={`2px solid ${BorderColorGen()}`} textAlign='center' mb='5px' p='6px' rounded={'full'}>{tech}</Text>
                    ))}
                </HStack>
                <Flex mx={'auto'} justify='space-between' w='100%'>
                    <Button as={'a'} variant={'outline'} bg={isDark?'red.400':'rgb(30,30,30)'} color='white' href={props.href}>View Demo</Button>
                    <Button as={'a'} variant={'outline'} bg={isDark?'red.400':'rgb(30,30,30)'} color='white' href={props.href}>Github Repo</Button>
              </Flex>
            </VStack>
            </Box>
        </Flex>
    </Box>
    )
}

export default ProjectCard;