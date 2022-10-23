import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import React,{useState} from 'react';
import {FaForward} from 'react-icons/fa'

function ProjectCard(props) {
// const [readMore,setReadmore] = useState(false);
const [readMore,setReadmore] = useState(false);

const ReadModal = (props)=>{
    return(
        <Flex bg={'rgba(0,0,0,1)'} p='0 10px' w='100%' h='100%' color='white' position={'absolute'} bottom='0' textAlign={'center'} justify={'center'} flexDir={'column'} zIndex='1'>
            <Text fontSize={'15px'}>{props.det}</Text>
            <Link href={props.href} onClick={()=>setReadmore(false)} mt='10px'><Text as={'span'}>Go to Site</Text></Link>
        </Flex>        
    )
}
  return (
    <Box key={props.id} mb={'20px'} w='100%' onClick={(e)=>setReadmore(true)}>
        <Flex flexDir={'column'} position='relative'>
        {readMore&&<ReadModal det={props.det} href={props.href}/>}
            <Box width={'350px'} h='250px' rounded={'md'} boxShadow={'xl'}>
                <Image src={props.img} rounded={'md'} h='100%' w='100%'/>
            </Box>
        </Flex>
            <Text textAlign={'center'} fontSize='20px' fontFamily={'monospace'}>{props.name}</Text>
    </Box>
    )
}

export default ProjectCard;
