import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import {FaForward} from 'react-icons/fa'

function ProjectCard(props) {
  return (
    <Link key={props.id} href={props.pref} mb={'20px'}  borderRadius='10px' boxShadow='0px 5px 13px 2px rgba(0,0,0,0.5)' _hover={{transform:'scale(1.1)'}}>
        <Flex flexDir={'column'}>
            <Box width={'350px'} h='250px'>
                <Image src={props.img} borderRadius='10px' h='100%' w='100%'/>
            </Box>
            <Flex align={'center'} justify='space-around'>
                <Text textAlign={'center'} fontSize='20px' fontFamily={'monospace'}>{props.name}</Text>
                <FaForward/>
            </Flex>
        </Flex>
    </Link>
    )
}

export default ProjectCard;