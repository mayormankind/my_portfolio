import { Box, Flex, useColorMode,Text, List, Divider, IconButton } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { SidebarAnimation } from '../chakra/Styles';
import ProjectCard from '../Components/ProjectCard';
import { projectList,getProjects } from '../Components/Constants';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';


export default function AllProjects() {

    const [ projects, setProjects ] =  useState([]);
    
    useEffect(()=>{
        const call = getProjects(setProjects);
    },[])
      

  return (
    <Box w='100%' h='100%' className='scroll' mb={'30px'} pos='relative'>
        <Header/>
        <Divider/>
        <Link to='/'>
            <IconButton icon={<FaHome/>} fontSize='24px' pos='absolute' top={{sm:'110px',base:'100px'}} left='10px' variant='ghost'/>
        </Link>
        <Flex mx='auto' maxW='1100px' gap='30px' flexDir='column' w='100%'>
            <Flex position='relative' mx={'auto'}>
                <Text as={'span'} fontSize={{sm:'70px',base:'4xl'}} fontWeight='bold' textAlign={'left'} opacity='.4'>My Jacket</Text>
                <Text as={'span'} pos='absolute' top={{sm:'1.7em',base:'1em'}} fontSize={{sm: '2xl',base:'20px'}} textAlign={'left'} w='100%'>All of it in one place</Text>
            </Flex>
            <Divider/>
            <Text fontSize={{sm:'25px',base:'20px'}} fontWeight={'bold'} p={{sm:'0 20px',base:'0 10px'}}>Recent projects</Text>
            <List gridGap={'30px'} w='100%' h={'100%'} m='20px 0' flexWrap='wrap'  display={'grid'} gridTemplateColumns={'repeat(auto-fit, minmax(20rem, 1fr))'} px='10px'>
                {projects && projects.map(project=>(
                    <ProjectCard id={project.pid} key={project.pid} name={project.title} href={project.hostlink} git={project.gitlink} img={project.image} det={project.overview} frames={project.tools.trim().split(' ')}/>
                ))}
            </List>
            <Divider/>
            <Text fontSize={{sm:'25px',base:'20px'}} fontWeight={'bold'} p={{sm:'0 20px',base:'0 10px'}}>Other projects</Text>
            <List gridGap={'30px'} w='100%' h={'100%'} m='20px 0' flexWrap='wrap'  display={'grid'} gridTemplateColumns={'repeat(auto-fit, minmax(20rem, 1fr))'} px='10px'>
                {projectList.map(each=>(
                    <ProjectCard id={each.id} key={each.id} name={each.projectName} href={each.pref} git={each.github} img={each.projectImage} det={each.projectDetails} frames={each.frameworks}/>
                ))}
            </List>
        </Flex>
        <SidebarAnimation/>
        <Footer/>
    </Box> 
  )
}
