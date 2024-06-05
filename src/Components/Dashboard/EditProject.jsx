import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react'


export default function EditProject() {
  return (
    <Box w='100%' h='100%'>
        <Flex gap='10px' flexDirr='column'>
            <Flex position='relative' mx={{sm:'auto',base:'30px'}}>
                <Text as={'span'} fontSize={{sm:'70px',base:'4xl'}} fontWeight='bold' textAlign={'left'} opacity='.4'>Edit</Text>
                <Text as={'span'} pos='absolute' top={{sm:'1.7em',base:'1em'}} fontSize={{sm: '2xl',base:'20px'}} textAlign={'left'} w='100%'>Edit Project</Text>
            </Flex>
        </Flex>

    </Box>
  )
}
