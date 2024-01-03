import { Button, Divider, Flex, Heading, IconButton, Input, useColorMode } from '@chakra-ui/react';
import React,{useState} from 'react';
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { V4 as uuid} from 'v4';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';


function AddNewProject() {
    const {colorMode}=useColorMode();
    const isDark = colorMode=='dark';
    const [ projectInfo, setProjectInfo ] = useState({});
    const CustomInput = ({text,holder}) =>{
        return(
            <Input placeholder={text} type='text' h='50px' w='100%' onChange={(e)=>setProjectInfo({...projectInfo,holder:e.target.value})} required/> 
        )
    }

    const addProject = async(e) =>{
        try{
          const imagesRef = ref(store,projectInfo.title);
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
                      gitlink: projectInfo.gitlink,
                      hostlink: projectInfo.hostlink,
                      tools: projectInfo.tools,
                      image: imageURL});
                    alert(`Project ${projectInfo.title} uploaded successfully`);
                });
            })
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
                <CustomInput text='Project Title' holder='title'/>
                <CustomInput text='A blank app for planks bank' holder='overview'/>
                <CustomInput text='Css,Js...' holder='tools'/>
                <CustomInput text='https://github/mankind/project' holder='gitlink'/>
                <CustomInput text='https://projectName.vercel.app' holder='hostlink'/>
                <label htmlFor='image'>Select the project image</label>
                <input type='file' id='image' required style={{display:'none'}} onChange={(e)=>setProjectInfo({...projectInfo,image:e.target.files[0]})}/>
                <Button bg='black' h='50px' color='whiteAlpha.700' _hover={{bg:'rgba(0,0,0,0.5)',color:'white'}}>Add Project</Button>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default AddNewProject;
