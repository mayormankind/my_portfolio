import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import React from 'react';   
import { RiDeleteBinFill, RiEdit2Fill, RiLiveFill } from 'react-icons/ri'


export default function ListCard(props) {
  return (
    <Flex justify={'space-between'} align='center' boxShadow={'sm'} h='100px' cursor='pointer' p={'10px'} w='100%' _hover={{bg:'#0a6ce470'}}>
        <Flex gap='20px' align='center'>
            <Box w='100px'><Image src={props.projectImage} m='auto'/></Box>
                <Text>{props.projectName}</Text>
                <Text>{props.category}</Text>
        </Flex>

        <Flex gap='10px' align='center'>
            <IconButton icon={<RiLiveFill/>} as='a' href={props.pref} title='View Live'/>
            <IconButton icon={<RiEdit2Fill/>} title='Edit Project' onClick={props.handleEdit}/>
            <IconButton icon={<RiDeleteBinFill/>} title='Delete Project' onClick={props.deleteProject}/>
        </Flex>
    </Flex>
  )
}
