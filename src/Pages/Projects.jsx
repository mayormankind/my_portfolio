import { Box, Flex, Grid, useColorMode, Text, keyframes, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ProjectCard from '../Components/ProjectCard';
import { getProjects, projectList } from '../Components/Constants';
import { Reveal } from '../Components/Reveal';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


function Projects({ setCategory, category }) {

    const [ projects, setProjects ] = useState([]);

    useEffect(()=>{
        const Projects = getProjects(setProjects);
    },[])

    const CatIdent = [
        { id:'fe', label:'Front-end' },
        { id:'fs', label:'Full Stack' },
        { id:'gm', label:'Games' },
    ]
    console.log(projects);

    const {colorMode}=useColorMode();
    const isDark = colorMode==='dark';
    const animate = keyframes `
        0%{transform:translateX(0px)}
        50%{transform:translateX(20px)}
        100%{transform:translateX(0px)}`;
    
    const handleClick=(id)=>{
        setCategory(id)
    }
    
  return (
    <Box w='100%' h='100%' id='projects' pos='relative'>
        <Header alt/>
        <Flex mx='auto' maxW='1100px' gap={'10px'} flexDir='column' w='100%' p='10px'>
            <Box mx='auto'>
                <Reveal>
                    <Flex position='relative' mx={{sm:'auto',base:'30px'}}>
                        <Text as={'span'} fontSize={{sm:'70px',base:'4xl'}} fontWeight='bold' textAlign={'left'} opacity='.4'>Projects</Text>
                        <Text as={'span'} pos='absolute' top={{sm:'1.7em',base:'1em'}} fontSize={{sm: '2xl',base:'20px'}} textAlign={'left'} w='100%'>Projects worked on</Text>
                    </Flex>
                </Reveal>
            </Box>
            <Flex textAlign={'center'} w='100%'>
                {CatIdent.map(cat=>(
                    <Button p={'2px 5px'} w='100%' borderRadius={'0'} borderBottom={category === cat.id ? '3px solid #0A6DE4' : ''} onClick={()=>handleClick(cat.id)}>{cat.label}</Button>
                ))}
            </Flex>
            <Grid gridTemplateColumns={'repeat(auto-fit, minmax(20rem, 1fr))'} justifyItems={'center'} w='100%' gap='30px' px='10px' m='20px 0'>
                {projects.filter(proj=>proj.category === category).map(proj=>(
                    <Reveal key={proj.id}>
                        <ProjectCard 
                            key={proj.pid}
                            projectImage={proj.projectImage}
                            projectName={proj.projectName}
                            projectDetails={proj.projectDetails}
                            category={proj.category}
                            pref={proj.pref}
                            github={proj.github}
                            frameworks={proj.frameworks}
                        />
                    </Reveal>
                ))}
            </Grid>
        </Flex>
        <Footer alt/>
    </Box> 
    )
}


export default Projects;