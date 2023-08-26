import { Box, Flex, useColorMode, Image, Text, Button, HStack, VStack, IconButton, ListItem } from '@chakra-ui/react';
import React from 'react';
import { RiGithubFill, RiGlobalFill } from 'react-icons/ri';
import { BorderColorGen } from '../chakra/Styles';

function ProjectCard(props) {
    const {colorMode}=useColorMode();
    const isDark = colorMode==='dark';

  return (
    <ListItem p={'20px'} w='100%' maxW={'350px'} key={props.id} rounded={'xl'} boxShadow='xl' bg={isDark?'#121212':'#e6e6e6'} mx='auto'>
        <Flex position='relative' flexDir={'column'} w='100%' gridGap='10px' mx='auto'>
            <Image src={props.img} rounded={'md'} w={'300px'} h='200px' boxShadow={'xl'} mx={'auto'}/>
            <VStack w={'100%'} textAlign='center' h='100%' spacing={'15px'} p={'10px'}>
                <Box w={'100%'}>
                    <Text as={'h2'}  fontSize='20px' fontWeight={'bold'}>{props.name}</Text>
                    <Text fontSize='12px'>{props.det}</Text>
                </Box>    
                <HStack flexWrap={'wrap'} w='100%' fontSize={'12px'}>
                    {props.frames.map(tech=>(
                        <Text border={`2px solid ${BorderColorGen()}`}  lineHeight={'short'} p='6px' rounded={'full'}>{tech}</Text>
                    ))}
                </HStack>
                <HStack w='100%'>                    
                    <Button as={'a'} variant={'outline'} bg={isDark?'':'rgb(30,30,30)'} color='white' href={props.href}><RiGlobalFill/></Button>
                    <Button as={'a'} variant={'outline'} bg={isDark?'':'rgb(30,30,30)'} color='white' href={props.git}><RiGithubFill/></Button>
              </HStack>
            </VStack>
        </Flex>
    </ListItem>
    )
}

export default ProjectCard;