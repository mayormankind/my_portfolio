import { Box, Flex, useColorMode, Text, IconButton, Heading } from '@chakra-ui/react';
import React from 'react';
import { Reveal } from './Reveal';
import { useNavigate } from 'react-router-dom';

export default function CategoryCard(props) {

    const {colorMode}=useColorMode();
    const isDark = colorMode==='dark';
    const navigate = useNavigate();

    const handleClick=(arial)=>{
        props.setCategory(arial);
        navigate('/projects');
    }

  return (
    <Box p={'30px 20px'} w='100%' onClick={()=>handleClick(props.arial)} rounded={'xl'} boxShadow='xl' cursor='pointer' bg={isDark?'#121212':'#d0d0d0'} _hover={{border:'3px solid #0A6DE4', blur:'0.5'}} mx='auto'>
        <Flex flexDir={'column'} gap='20px' w='100%'>
            <Flex justify={'space-between'} align={'center'}>
                <Heading fontSize={'md'}>{props.label}</Heading>
                <IconButton variant='unstyled' icon={props.icon}/>
            </Flex>
            <Text fontSize={'sm'}>{props.desc}</Text>
        </Flex>
    </Box>
    )
}