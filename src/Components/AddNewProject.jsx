import { Box, Button, Flex, Grid, Heading, Input } from '@chakra-ui/react';
import React,{useState} from 'react'

function AddNewProject({onClose}) {
    const [ projectInfo, setProjectInfo ] = useState({})
    const CustomInput = ({text}) =>{
        return(
            <Input placeholder={text} type='text' h='50px' w='100%' required/> 
        )
    }
  return (
    <Grid pos={'fixed'} placeContent='center' top='0' left='0' h={'100vh'} w='100%' bg='rgba(0,0,0,0.7)' zIndex={'100'}>
        <Flex w='100%' maxW={'400px'} minW='350px' gap='20px' bg='rgba(110,110,110,0.7)' justify={'center'} flexDir='column' p='20px'>
            <Heading fontSize={'lg'} color='black'>Add New Project Idan</Heading>
            <Grid gap='10px' textAlign='center' w='100%' h='100%'>
                <CustomInput text='Project Title'/>
                <CustomInput text='A blank app for planks bank'/>
                <CustomInput text='https://github/mankind/project'/>
                <CustomInput text='https://projectName.vercel.app'/>
                <label htmlFor='image'>Select the project image</label>
                <input type='file' id='image' required style={{display:'none'}}/>
            </Grid>
            <Button bg='black' h='50px' color='whiteAlpha.700' _hover={{bg:'rgba(0,0,0,0.6)',color:'white'}} onClick={onClose}>Add Project</Button>
        </Flex>
    </Grid>
  )
}

export default AddNewProject;
