import { Box, Button, Divider, Flex, Heading, IconButton, Input, Select, Text, useColorMode } from '@chakra-ui/react';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
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
          const imagesRef = ref(store,`mankind/${projectInfo.title}`);
          const uploadTask = uploadBytesResumable(imagesRef,projectInfo.image)
          uploadTask.on(
            (err) => {
                console.log(err);
            },
            ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(async(imageURL)=>{
                    await setDoc(doc(db, "mankind-projects", uuid()), {
                      pid:uuid(),
                      title: projectInfo.title,
                      overview: projectInfo.overview,
                      gitlink: `https://github.com/mayormankind/${projectInfo.gitlink}`,
                      hostlink: `https://${projectInfo.hostlink}.vercel.app`,
                      tools: projectInfo.tools,
                      cat: projectInfo.category,
                      image: imageURL});
                    });
                })
            alert(`Project ${projectInfo.title} uploaded successfully`);
      }catch(err){
          console.log(err)
          alert('an error occured while uploading');
      }
    }

  return (
    <Box w='100%' h='100%'>
        <Flex gap='20px' flexDir='column'>
            <Flex position='relative' mx={{sm:'auto',base:'30px'}}>
                <Text as={'span'} fontSize={{sm:'70px',base:'4xl'}} fontWeight='bold' textAlign={'left'} opacity='.4'>Add</Text>
                <Text as={'span'} pos='absolute' top={{sm:'1.7em',base:'1em'}} fontSize={{sm: '2xl',base:'20px'}} textAlign={'left'} w='100%'>Add project</Text>
            </Flex>
            <Flex gap='10px' flexDir={'column'} textAlign='center' maxW={'500px'} mx='auto' w='100%' h='100%'>
                <Input variant={'solid'} placeholder={'Project Title'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,title:e.target.value})} required value={projectInfo.title}/> 
                <Input variant={'solid'} placeholder={'A blank app for planks bank'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,overview:e.target.value})} required value={projectInfo.overview}/> 
                <Input variant={'solid'} placeholder={'Css Js ...'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,tools:e.target.value})} required value={projectInfo.tools}/> 
                <Input variant={'solid'} placeholder={'https://github/mankind/project'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,gitlink:e.target.value})} required value={projectInfo.gitlink}/> 
                <Input variant={'solid'} placeholder={'https://projectName.vercel.app'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,hostlink:e.target.value})} required value={projectInfo.hostlink}/> 
                <Select variant={'filled'} onChange={(e)=>setProjectInfo({...projectInfo,category:e.target.value})}>
                  <option value='fe'>Front End</option>
                  <option value='fs'>Full Stack</option>
                  <option value='gm'>Gaming</option>
                </Select>
                <label htmlFor='image' style={{border:'2px solid white', padding:'5px', cursor:'pointer'}}>Select the project image</label>
                <input type='file' id='image' required style={{display:'none'}} onChange={(e)=>setProjectInfo({...projectInfo,image:e.target.files[0]})}/>
                <Button bg={isDark ? 'white' : 'black'} h='50px' color={isDark ? 'black' : 'white'} onClick={addProject}>Add Project</Button>
            </Flex>
        </Flex>
    </Box>
  )
}
