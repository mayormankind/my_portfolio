import { Box, Flex, Image, Heading, useColorMode, useMediaQuery,Text, Link } from '@chakra-ui/react';
import React,{useState} from 'react';
import ProjectCard, { ReadModal } from '../LinkSrc/ProjectCard';

function Projects() {
    const {colorMode}=useColorMode();
  const isDark = colorMode=='dark';
    const [readMore,setReadmore] = useState(false);
    const projectList = [
        {id:'1',projectName:'MyDo',projectDetails:'A todo app with other built in functions for personal use.',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1665533472/portfolio/p1_yyfza8.png',pref:'https://lightgram-mod.vercel.app',frameworks:['react','chakraUI','react-icons']},
        {id:'2',projectName:'HoistMe',projectDetails:'A CMS to create your own free business portfolio',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1665533483/portfolio/p3_oeeqme.png',pref:'https://lightgram-mod.vercel.app',frameworks:['react','chakraUI','react-icons']},
        {id:'4',projectName:'Lightgram WebApp',projectDetails:'A central web app for a community.',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1665533485/portfolio/p4_wz6gxs.png',pref:'https://lightgram-app.vercel.app',frameworks:['react','chakraUI','react-icons']},
        {id:'5',projectName:"Mankind's Portfolio",projectDetails:'My personal potfolio that consists of projects i have worked on',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1665533472/portfolio/p5_m8xwvj.png',pref:'https://my-portfolio-delta-lac.vercel.app',frameworks:['react','chakraUI','react-icons']},
        {id:'6',projectName:`EIT's Website`,projectDetails:'The official website of Essential Interlink Technologies (an engineering company',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1666756727/portfolio/etn_my3i4g.png',pref:'https://eit-website.vercel.app',frameworks:['react','chakraUI','react-icons']}
    ];
  return (
    <Box bg={isDark?'rgb(15,15,15)':'rgb(150,150,150)'} pb='20px' mb={'20px'} w='100%' h='100%' id='projects'>
        <Flex position='relative' ml={{sm:'20px',base:'60px'}} right='-20px'>
            <Text as={'span'} p='10px' fontSize={{sm: '70px',base:'5xl'}} fontWeight='bold' textAlign={'left'} opacity='.4'>Projects</Text>
            <Text as={'span'} position='absolute' top='1.7em' fontSize={{sm: '2xl',base:'20px'}} textAlign={'left'} color={'rgb(200, 500, 300)'}>Projects worked on</Text>
       </Flex>
        <Flex as={'ul'} w='100%' h={'100%'} flexWrap='wrap' justify={'space-around'}>
            {
                projectList.map(each=>(
                    <Box position={'relative'} key={each.id} px='70px'>
                        <ProjectCard id={each.id} name={each.projectName} href={each.pref} img={each.projectImage} det={each.projectDetails} frames={each.frameworks}/>
                    </Box>
                ))
            }
        </Flex>
    </Box>
    )
}

export default Projects;
