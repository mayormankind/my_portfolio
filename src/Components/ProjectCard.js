import { Box, Flex, useColorMode, Image, Text, Button, HStack, VStack, IconButton } from '@chakra-ui/react';
import React from 'react';
import { RiGithubFill, RiGlobalFill } from 'react-icons/ri';
import { BorderColorGen } from '../chakra/Styles';

function ProjectCard(props) {
    const {colorMode}=useColorMode();
    const isDark = colorMode==='dark';

  return (
    <Box p={{sm:'10px',base:'20px'}} mb={'20px'} w='90%' maxW={{sm:'750px',base:''}} key={props.id} rounded={'md'} bg={isDark?'rgb(40,40,40)':'rgb(200,200,200)'} boxShadow='xl' mx='auto'>
        <Flex position='relative' flexDir={{sm:'row',base:'column'}} w='100%' maxW={'900px'} gridGap='10px' mx='auto'>
            <Image src={props.img} rounded={'md'} w={{sm:'300px',base:'300px'}} h='200px' boxShadow={'xl'} mx={'auto'}/>
            <VStack w={'100%'} h='100%' spacing={'15px'} p={'10px'} minH={{sm:'250px',base:'100%'}} maxH={{sm:'300px',base:'100%'}}>
                <Box w={'100%'}>
                    <Text as={'h2'} textAlign='center' fontSize='25px' fontWeight={'bold'}>{props.name} -</Text>
                    <Text fontSize='15px' textAlign={'justify'}>{props.det}</Text>
                </Box>    
                <HStack spacing={'7px'} flexWrap={'wrap'} w='100%' fontSize={{sm:'15px',base:'14px'}}>
                    {props.frames.map(tech=>(
                        <Text border={`2px solid ${BorderColorGen()}`} textAlign='center' mb='5px' p='6px' rounded={'full'}>{tech}</Text>
                    ))}
                </HStack>
                <Flex mx={'auto'} justify='space-between' w='100%' p={'15px'}>                    
                    <Button as={'a'} variant={'outline'} bg={isDark?'':'rgb(30,30,30)'} color='white' href={props.href}><RiGlobalFill/></Button>
                    <Button as={'a'} variant={'outline'} bg={isDark?'':'rgb(30,30,30)'} color='white' href={props.href}><RiGithubFill/></Button>
              </Flex>
            </VStack>
        </Flex>
    </Box>
    )
}

export default ProjectCard;