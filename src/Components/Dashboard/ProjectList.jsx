import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { deleteProject, getProjects, projectList } from '../Constants'
import EditProject from './EditProject';
import ListCard from './ListCard';

export default function ProjectList() {

    const [ projects, setProjects ] = useState([]);
    const [ isEdit, setIsEdit ] = useState(false);
    const [ currentProject, setCurrentProject ] = useState();

    useEffect(()=>{
        const Projects = getProjects(setProjects);
    },[])

    const handleEdit = ( data ) =>{
        setCurrentProject(data)
        setIsEdit(true);
    }
    console.log(projects)

  return (
    <Box w='100%' h='100%' maxH='100vh'>
        <Flex gap='10px' flexDir='column'>
            <Flex position='relative' mx={{sm:'auto',base:'30px'}}>
                <Text as={'span'} fontSize={{sm:'70px',base:'4xl'}} fontWeight='bold' textAlign={'left'} opacity='.4'>List</Text>
                <Text as={'span'} pos='absolute' top={{sm:'1.7em',base:'1em'}} fontSize={{sm: '2xl',base:'20px'}} textAlign={'left'} w='100%'>Project List</Text>
            </Flex>
            <Box w='100%' h='80vh' className='hide-scrollbar' overflowY='auto'>
                <Flex flexDir='column'>
                    {projects.map(proj=>(
                        <ListCard
                            key={proj.pid}
                            projectImage={proj.projectImage}
                            projectName={proj.projectName}
                            projectDetails={proj.projectDetails}
                            category={proj.category}
                            pref={proj.pref}
                            github={proj.github}
                            frameworks={proj.frameworks}
                            handleEdit={()=>handleEdit(proj)}
                            deleteProject={()=>deleteProject(proj.pid)}
                        />
                    ))}
                </Flex>
            </Box>
        </Flex>
        {isEdit && <EditProject 
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
        />}
    </Box>
  )
}
