import { Box, Flex, useColorMode,Text, List } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { SidebarAnimation } from '../chakra/Styles';
import ProjectCard from '../Components/ProjectCard';
import { projectList } from '../Components/Constants';
import { Link } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';

//46IRNG5SEP
//dARK MOVIE

function Projects() {
    const [ projects, setProjects ] =  useState([]);
    // useEffect(()=>{
    //     const unsub = onSnapshot(userRef,(snapshot)=>{
    //         setProjects(
    //           snapshot.docs.map((docs) =>{
    //             return { ...docs.data() };
    //           })
    //         );
    //       })
    //     return ()=>{
    //         unsub();
    //     }
    // },[])
    const {colorMode}=useColorMode();
    const isDark = colorMode==='dark';
    
  return (
    <Box w='100%' h='100%' id='projects' className='scroll' mb={'30px'} pos='relative'>
        <Flex mx='auto' maxW='1100px' flexDir='column' w='100%' p='10px'>
            <Flex position='relative' mx={{sm:'auto',base:'30px'}}>
                <Text as={'span'} fontSize={{sm:'70px',base:'4xl'}} fontWeight='bold' textAlign={'left'} opacity='.4'>Projects</Text>
                <Text as={'span'} pos='absolute' top={{sm:'1.7em',base:'1em'}} fontSize={{sm: '2xl',base:'20px'}} textAlign={'left'} w='100%'>Projects worked on</Text>
            </Flex>
            <List gridGap={'30px'} w='100%' h={'100%'} mt='20px' flexWrap='wrap'  display={'grid'} gridTemplateColumns={'repeat(auto-fit, minmax(20rem, 1fr))'} px='10px'>
                {projectList.map(each=>(
                    <ProjectCard id={each.id} key={each.id} name={each.projectName} href={each.pref} git={each.github} img={each.projectImage} det={each.projectDetails} frames={each.frameworks}/>
                ))}
            </List>
            <Link to='/projects'><Text textAlign='center' fontSize='15px'>View all projects</Text></Link>
        </Flex>
        <SidebarAnimation/>
    </Box> 
    )
}

export default Projects;