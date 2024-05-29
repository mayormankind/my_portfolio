import { Button, Divider, Flex, Heading, IconButton, Input, Select, useColorMode } from '@chakra-ui/react';
import React,{useState} from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { v4 as uuid} from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { store, db } from '../firebase';


function AddNewProject() {
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
    <Flex  w='100%' h='100vh' flexDir={'column'} pos='relative'>
        <Link to='/'>
            <IconButton icon={<FaHome/>} pos='absolute' top='10px' left='10px' variant='ghost'/>
        </Link>
        <Flex borderRadius='10px' w='100%' bg='rgba(155,155,155,0.2)' maxW={'400px'} boxShadow={isDark ? '2px 2px 5px 2px rgba(155,155,155,0.3)' : 'dark-lg'}  gap='10px' flexDir='column' p='20px' m={'auto'}>
            <Heading fontSize={'lg'} textAlign='center'>Add New Project</Heading>
            <Divider/>
            <Flex gap='10px' flexDir={'column'} textAlign='center' w='100%' h='100%'>
                <Input placeholder={'Project Title'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,title:e.target.value})} required value={projectInfo.title}/> 
                <Input placeholder={'A blank app for planks bank'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,overview:e.target.value})} required value={projectInfo.overview}/> 
                <Input placeholder={'Css Js ...'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,tools:e.target.value})} required value={projectInfo.tools}/> 
                <Input placeholder={'https://github/mankind/project'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,gitlink:e.target.value})} required value={projectInfo.gitlink}/> 
                <Input placeholder={'https://projectName.vercel.app'} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,hostlink:e.target.value})} required value={projectInfo.hostlink}/> 
                <Select onChange={(e)=>setProjectInfo({...projectInfo,category:e.target.value})}>
                  <option value='fe'>Front End</option>
                  <option value='fs'>Full Stack</option>
                  <option value='gm'>Gaming</option>
                </Select>
                <label htmlFor='image'>Select the project image</label>
                <input type='file' id='image' required style={{display:'none'}} onChange={(e)=>setProjectInfo({...projectInfo,image:e.target.files[0]})}/>
                <Button bg='black' h='50px' color='whiteAlpha.700' _hover={{bg:'rgba(0,0,0,0.5)',color:'white'}} onClick={addProject}>Add Project</Button>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default AddNewProject;
