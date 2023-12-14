import { Box, Button, Divider, Flex, Grid, Heading, Input } from '@chakra-ui/react';
import React,{useState} from 'react'

function AddNewProject() {
    const [ projectInfo, setProjectInfo ] = useState({})
    const CustomInput = ({text}) =>{
        return(
            <Input placeholder={text} type='text' h='50px' w='100%' required/> 
        )
    }
  return (
    <Flex  w='100%' h='100vh' flexDir={'column'}>
        <Flex w='100%' maxW={'400px'} boxShadow={'dark-lg'}  gap='10px' flexDir='column' p='20px' m={'auto'}>
            <Heading fontSize={'lg'} color='black' textAlign='center'>Add New Project</Heading>
            <Divider/>
            <Flex gap='10px' flexDir={'column'} textAlign='center' w='100%' h='100%'>
                <CustomInput text='Project Title' />
                <CustomInput text='A blank app for planks bank'/>
                <CustomInput text='https://github/mankind/project'/>
                <CustomInput text='https://projectName.vercel.app'/>
                <label htmlFor='image'>Select the project image</label>
                <input type='file' id='image' required style={{display:'none'}}/>
                <Button bg='black' h='50px' color='whiteAlpha.700' _hover={{bg:'rgba(0,0,0,0.6)',color:'white'}}>Add Project</Button>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default AddNewProject;
