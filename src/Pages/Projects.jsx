import { Box, Flex, useColorMode,Text, List, keyframes, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { SidebarAnimation } from '../chakra/Styles';
import ProjectCard from '../Components/ProjectCard';
import { projectList, getProjects } from '../Components/Constants';
import { Link } from 'react-router-dom';
import { RiArrowRightFill } from 'react-icons/ri';

//46IRNG5SEP
//dARK MOVIE

function Projects() {
    // const [ projects, setProjects ] =  useState([]);
    
    // useEffect(()=>{
    //     async function unsub(){
    //         const call = await getProjects(setProjects);
    //     } 
    //     return ()=>{
    //         unsub();
    //     }
    // },[])
    // console.log(projects)
    const {colorMode}=useColorMode();
    const isDark = colorMode==='dark';
    const animate = keyframes`
        0%{transform:translateX(0px)}
        50%{transform:translateX(20px)}
        100%{transform:translateX(0px)}
    `;
    
  return (
    <Box w='100%' h='100%' id='projects' className='scroll' mb={'30px'} pos='relative'>
        <Flex mx='auto' maxW='1100px' flexDir='column' w='100%' p='10px'>
            <Flex position='relative' mx={{sm:'auto',base:'30px'}}>
                <Text as={'span'} fontSize={{sm:'70px',base:'4xl'}} fontWeight='bold' textAlign={'left'} opacity='.4'>Projects</Text>
                <Text as={'span'} pos='absolute' top={{sm:'1.7em',base:'1em'}} fontSize={{sm: '2xl',base:'20px'}} textAlign={'left'} w='100%'>Projects worked on</Text>
            </Flex>
            <List gridGap={'30px'} w='100%' h={'100%'} mt='20px' flexWrap='wrap'  display={'grid'} gridTemplateColumns={'repeat(auto-fit, minmax(20rem, 1fr))'} px='10px' mb='20px'>
                {projectList.map(each=>(
                    <ProjectCard id={each.id} key={each.id} name={each.projectName} href={each.pref} git={each.github} img={each.projectImage} det={each.projectDetails} frames={each.frameworks}/>
                ))}
            </List>
            <Button variant='outline' as='flex' alignItems='center' mx='auto' w='fit-content' colorScheme={isDark ? 'white' : 'black'}>
                    <Link to='/projects'>
                        <Flex gap='3px' align='center' w='fit-content'>
                            <Text fontSize='15px'>View all projects</Text>
                            <Text as='i' animation={`${animate} 2s linear infinite`}><RiArrowRightFill/></Text>
                        </Flex>
                    </Link>
            </Button>
        </Flex>
        <SidebarAnimation/>
    </Box> 
    )
}

export default Projects;