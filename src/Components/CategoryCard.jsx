import { Box, Flex, useColorMode, Text, Button, HStack, VStack, IconButton, ListItem, Heading } from '@chakra-ui/react';
import React from 'react';
import { Reveal } from './Reveal';

export default function CategoryCard(props) {

    const {colorMode}=useColorMode();
    const isDark = colorMode==='dark';

  return (
    <Box p={'20px'} w='100%' maxW={'300px'} rounded={'xl'} boxShadow='xl' cursor='pointer' bg={isDark?'#121212':'#d0d0d0'} mx='auto'>
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