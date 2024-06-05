import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { projectList } from '../Constants'
import { RiDeleteBinFill, RiEdit2Fill, RiLiveFill } from 'react-icons/ri'

export default function ProjectList() {
  return (
    <Box w='100%' h='100%' maxH='100vh' overflowY={'scroll'}>
        <Flex gap='10px' flexDir='column'>
            <Flex position='relative' mx={{sm:'auto',base:'30px'}}>
                <Text as={'span'} fontSize={{sm:'70px',base:'4xl'}} fontWeight='bold' textAlign={'left'} opacity='.4'>List</Text>
                <Text as={'span'} pos='absolute' top={{sm:'1.7em',base:'1em'}} fontSize={{sm: '2xl',base:'20px'}} textAlign={'left'} w='100%'>Project List</Text>
            </Flex>
            <Flex flexDir='column' overflowY={'scroll'}>
                {projectList.map(proj=>(
                    <Flex justify={'space-between'} align='center' cursor='pointer' p={'10px'} w='100%' _hover={{bg:'#0a6ce470'}}>
                        <Flex gap='20px' align='center'>
                            <Box w='100px'><Image src={proj.projectImage} m='auto'/></Box>
                            <Text>{proj.projectName}</Text>
                            <Text>{proj.cat}</Text>
                        </Flex>

                        <Flex gap='10px' align='center'>
                            <IconButton icon={<RiLiveFill/>} title='View Live'/>
                            <IconButton icon={<RiEdit2Fill/>} title='Edit Project'/>
                            <IconButton icon={<RiDeleteBinFill/>} title='Delete Project'/>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>

    </Box>
  )
}
