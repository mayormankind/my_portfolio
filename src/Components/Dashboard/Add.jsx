import { Box, Button, Flex, Input, Select, Text, useColorMode } from '@chakra-ui/react';
import React,{useState} from 'react';
import { v4 as uuid} from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { db, store } from '../../firebase';


export default function Add() {

    const {colorMode}=useColorMode();
    const isDark = colorMode=='dark';
    const [ projectInfo, setProjectInfo ] = useState({});

    const addProject = async(e) =>{
      try{
          const imagesRef = ref(store,`mankind/${projectInfo.projectName}`);
          const uploadTask = uploadBytesResumable(imagesRef, projectInfo.projectImage)
          let pid = uuid();
          uploadTask.on(
            (err) => {
                console.log(err);
            },
            ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(async(imageURL)=>{
                    await setDoc(doc(db, "mankind-projects", pid), {
                      pid: pid,
                      projectName: projectInfo.projectName,
                      projectDetails: projectInfo.projectDetails,
                      github: `https://github.com/mayormankind/${projectInfo.github}`,
                      pref: `https://${projectInfo.pref}.vercel.app`,
                      frameworks: projectInfo.frameworks,
                      category: projectInfo.category,
                      projectImage: imageURL});
                    });
                })
            alert(`Project ${projectInfo.projectName} uploaded successfully`);
      }catch(err){
          console.log(err)
          alert('an error occured while uploading');
      }
    }

  return (
    <Box w='100%' h='100%' bg={isDark ? 'black' : 'lightgray'}>
        <Flex gap='20px' flexDir='column'>
            <Flex position='relative' mx={{sm:'auto',base:'30px'}}>
                <Text as={'span'} fontSize={{sm:'70px',base:'4xl'}} fontWeight='bold' textAlign={'left'} opacity='.4'>Add</Text>
                <Text as={'span'} pos='absolute' top={{sm:'1.7em',base:'1em'}} fontSize={{sm: '2xl',base:'20px'}} textAlign={'left'} w='100%'>Add project</Text>
            </Flex>
            <Flex gap='10px' flexDir={'column'} borderRadius={'md'} textAlign='center' maxW={'450px'} mx='auto' w='100%' h='100%' p='30px' bg={'rgba(155,155,155,0.8)'}>
                <Input variant={'solid'} placeholder={'Project Name/Title'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,projectName:e.target.value})} required value={projectInfo.projectName}/> 
                <Input variant={'solid'} placeholder={'A blank app for planks bank'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,projectDetails:e.target.value})} required value={projectInfo.projectDetails}/> 
                <Input variant={'solid'} placeholder={'Css Js ...'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,frameworks:e.target.value})} required value={projectInfo.frameworks}/> 
                <Input variant={'solid'} placeholder={'https://github/mankind/project'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,github:e.target.value})} required value={projectInfo.github}/> 
                <Input variant={'solid'} placeholder={'https://projectName.vercel.app'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,pref:e.target.value})} required value={projectInfo.pref}/> 
                <Select variant={'filled'} onChange={(e)=>setProjectInfo({...projectInfo,category:e.target.value})}>
                  <option value=''>Select Category</option>
                  <option value='fe'>Front End</option>
                  <option value='fs'>Full Stack</option>
                  <option value='gm'>Gaming</option>
                </Select>
                <label htmlFor='image' style={{border:'2px solid white', padding:'5px', cursor:'pointer'}}>Select the project image</label>
                <input type='file' id='image' required style={{display:'none'}} onChange={(e)=>setProjectInfo({...projectInfo,projectImage:e.target.files[0]})}/>
                <Button colorScheme='blue' h='50px' onClick={addProject}>Add Project</Button>
            </Flex>
        </Flex>
    </Box>
  )
}
