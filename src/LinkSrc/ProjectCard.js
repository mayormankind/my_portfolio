import { Box, Flex, useColorMode, Image, Link, Text, Button,useMediaQuery, HStack, VStack, Grid, color } from '@chakra-ui/react';
import React,{useState} from 'react';
import {FaForward} from 'react-icons/fa'

function ProjectCard(props) {
    const [readMore,setReadmore] = useState(false);
    const [isBigScreen] = useMediaQuery('(min-width:600px)');
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
    <Box p={'20px'} mb={'30px'} key={props.id} rounded={'md'} minW={isBigScreen?'1000px':''} maxW='1000px' bg={isDark?'rgb(40,40,40)':'rgb(200,200,200)'} boxShadow='xl'>
        <Flex position='relative' flexDir={isBigScreen?'row':'column'} w='100%' maxW={'900px'} gridGap={isBigScreen?'30px':'0'} mx='auto'>
            <Image src={props.img} rounded={'md'} w='350px' h='200px' boxShadow={'xl'} mx={'auto'}/>
            <Box flex='2' gridGap={'20px'} w={'100%'} h='100%' minH={isBigScreen?'250px':'100%'}>
            <VStack p='20px' flex='2'>
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


{/* <Box key={props.id} mb={'20px'} w='100%' onClick={(e)=>setReadmore(true)}>
        <Flex flexDir={'column'} position='relative'> */}
        {/* {readMore&&<ReadModal det={props.det} href={props.href}/>} */}
            {/* <Box width={'350px'} h='250px' rounded={'md'} boxShadow={'xl'}>
                <Image src={props.img} rounded={'md'} h='100%' w='100%'/>
                <Image src='LogoBlack.png' boxSize={'100px'} borderRadius='50%' bg={'red'}/>
            </Box>
        </Flex>
            <Text textAlign={'center'} fontSize='20px' fontFamily={'monospace'}>{props.name}</Text>
    </Box> */}