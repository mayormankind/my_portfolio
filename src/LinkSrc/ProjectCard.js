import { Box, Flex, useColorMode, Image, Link, Text, Button,useMediaQuery, HStack, VStack, Grid, color } from '@chakra-ui/react';
import React,{useState} from 'react';
import {FaForward} from 'react-icons/fa';

function ProjectCard(props) {
    const [readMore,setReadmore] = useState(false);
    const {colorMode}=useColorMode();
    const isDark = colorMode=='dark';
    function BorderColorGen(){
        var color = ''
        const colors = ['red','green','blue','purple','orange','yellow','black','skyblue','magenta','cyan','deepblue','violet','indigo']
        const colorIndex = Math.floor(Math.random()*13);
        color = colors[colorIndex];
        return (color);
    }
const ReadModal = (props)=>{
    return(
        <Flex bg={'rgba(0,0,0,1)'} p='0 10px' w='100%' h='100%' color='white' position={'absolute'} bottom='0' textAlign={'center'} justify={'center'} flexDir={'column'} zIndex='1'>
            <Text fontSize={'15px'}>{props.det}</Text>
            <Link href={props.href} onClick={()=>setReadmore(false)} mt='10px'><Text as={'span'}>Go to Site</Text></Link>
        </Flex>        
    )
}
  return (
    <Box p={'20px'} mb={'30px'} key={props.id} rounded={'md'} minW={{sm:'1000px',base:'100%'}} maxW='1000px' bg={isDark?'rgb(40,40,40)':'rgb(200,200,200)'} boxShadow='xl'>
        <Flex position='relative' flexDir={{sm:'row',base:'column'}} w='100%' maxW={'900px'} gridGap={{sm:'30px',base:'0'}} mx='auto'>
            <Image src={props.img} rounded={'md'} w='350px' h='200px' boxShadow={'xl'} mx={'auto'}/>
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
                <Flex mx={'auto'} justify='space-around' w='100%'>
                    <Button as={'a'} variant={'outline'} href={props.href}>View Demo</Button>
                    <Button as={'a'} variant={'outline'} href={props.href}>Github Repo</Button>
              </Flex>
            </VStack>
            </Box>
        </Flex>
    </Box>
    )
}

export default ProjectCard;