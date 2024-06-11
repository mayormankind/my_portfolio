import { Box, Button, Flex, IconButton, Image, Input, Select, Text, useColorMode } from '@chakra-ui/react';
import React,{ useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { updateProject } from '../Constants';


export default function EditProject( props ) {

    const {colorMode}=useColorMode();
    const isDark = colorMode=='dark';
    const [ projectInfo, setProjectInfo ] = useState(props.currentProject);

    const handleUpdate = () =>{
      updateProject(props.currentProject.pid,projectInfo)
      props.setIsEdit(false);
      props.setCurrentProject('');
    }

    const handleClose = () =>{
      props.setIsEdit(false)
      props.setCurrentProject('');
    }

  return (
    <Flex w='100%' h='100vh' pos='fixed' top='0' bottom={'0'} left='0' right='0' bg='rgba(0,0,0,0.6)'>
        <Flex gap='20px' flexDir='column' h='100%' maxH='80vh' overflowY={'auto'} className='hide-scrollbar' m='auto' w='100%' maxW='450px' bg={'rgba(155,155,155,0.7)'} color={'black'} p='20px'>
            <Flex justify='space-between' align='center' w='100%'>
                <Text as={'span'} fontSize='lg' fontWeight='bold'>Edit Project</Text>
                <IconButton variant='ghost' icon={<RiCloseFill/>} onClick={handleClose}/>
            </Flex>
            <Flex gap='10px' flexDir={'column'} textAlign='center' maxW={'500px'} mx='auto' w='100%' h='fit-content'>
                <Input variant={'solid'} placeholder={'Project Title'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,projectName:e.target.value})} required value={projectInfo.projectName}/> 
                <Input variant={'solid'} placeholder={'A blank app for planks bank'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,projectDetails:e.target.value})} required value={projectInfo.projectDetails}/> 
                <Input variant={'solid'} placeholder={'Css Js ...'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,frameworks:e.target.value})} required value={projectInfo.frameworks}/> 
                <Input variant={'solid'} placeholder={'https://github/mankind/project'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,github:e.target.value})} required value={projectInfo.github}/> 
                <Input variant={'solid'} placeholder={'https://projectName.vercel.app'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,pref:e.target.value})} required value={projectInfo.pref}/> 
                <Select variant={'filled'} onChange={(e)=>setProjectInfo({...projectInfo,category:e.target.value})}>
                  <option value='fe'>Front End</option>
                  <option value='fs'>Full Stack</option>
                  <option value='gm'>Gaming</option>
                </Select>
                <Box w='100%'>
                  <Image src={projectInfo.projectImage}/>
                </Box>
                <label htmlFor='image' style={{border:'2px solid white', padding:'5px', cursor:'pointer'}}>Select the project image</label>
                <input type='file' id='image' required style={{display:'none'}} onChange={(e)=>setProjectInfo({...projectInfo,projectImage:e.target.files[0]})}/>
                <Button colorScheme='blue' h='50px' onClick={handleUpdate}>Save changes</Button>
            </Flex>
        </Flex>
    </Flex>
  )
}
