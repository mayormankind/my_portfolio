import { Box, Flex, Heading, useMediaQuery,Text, Link } from '@chakra-ui/react';
import React,{useState} from 'react';
import ProjectCard, { ReadModal } from '../LinkSrc/ProjectCard';

function Projects() {
    const [readMore,setReadmore] = useState(false);
    const [isBigScreen] = useMediaQuery('(min-width:600px)');
    const projectList = [
        {id:'1',projectName:'Feedback Manga',projectDetails:'A yearBook with a schedular just for you.',projectImage:'/p1.png',pref:'https://lightgram-mod.vercel.app'},
        {id:'2',projectName:'HoistMe',projectDetails:'A CMS to create your own free business portfolio',projectImage:'/p2.png',pref:'https://lightgram-mod.vercel.app'},
        {id:'3',projectName:'Lightgram LoginPage',projectDetails:'A central web app with for a community.',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1665533483/portfolio/p3_oeeqme.png',pref:'https://lightgram-mod.vercel.app'},
        {id:'4',projectName:'Lightgram WebApp',projectDetails:'A central web app with for a community.',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1665533485/portfolio/p4_wz6gxs.png',pref:'https://lightgram-app.vercel.app'},
        {id:'5',projectName:"Mankind's Portfolio",projectDetails:'my personal potfolio made with react and chakra UI',projectImage:'/https://res.cloudinary.com/dcesze7l8/image/upload/v1665533472/portfolio/p5_m8xwvj.png',pref:'https://my-portfolio-delta-lac.vercel.app/'},
        {id:'6',projectName:'Portfolio 2',projectDetails:'my personal potfolio made with react and chakra UI',projectImage:'/https://res.cloudinary.com/dcesze7l8/image/upload/v1665533462/portfolio/p6_y2kauc.png',pref:'https://lightgram-mod.vercel.app'}
    ];
  return (
    <Box bg={'rgba(155,155,155,0.5)'} pb='20px' mb={'20px'} w='100%' h='100%'>
        <Flex position='relative' ml={isBigScreen?'20px':'60px'} right='-20px'>
            <Text as={'span'} p='10px' fontSize={isBigScreen? '70px':'5xl'} fontWeight='bold' textAlign={'left'} opacity='.4'>Projects</Text>
            <Text as={'span'} position='absolute' top='1.7em' fontSize={isBigScreen? '2xl':'20px'} textAlign={'left'} color={'rgb(200, 500, 300)'}>Projects worked on</Text>
       </Flex>
        <Flex as={'ul'} w='100%' h={'100%'} flexWrap='wrap' justify={'space-around'}>
            {
                projectList.map(each=>(
                    <Box position={'relative'} key={each.id}>
                        <Text as={'span'} zIndex='1' right={'-10px'} position='absolute' fontWeight='bold' fontSize={'60px'} bg='transparent' opacity={'.3'}>{`0${each.id}`}</Text>
                        <ProjectCard id={each.id} name={each.projectName} href={each.pref} img={each.projectImage} det={each.projectDetails}/>
                    </Box>
                ))
            }
        </Flex>
    </Box>
    )
}

export default Projects;