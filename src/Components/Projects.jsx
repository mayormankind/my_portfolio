import { Box, Flex, useColorMode,Text, List } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
    const {colorMode}=useColorMode();
  const isDark = colorMode==='dark';
    const projectList = [
        {id:'1',projectName:'MyDo',projectDetails:'A todo app with other built in functions for personal use.',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1665533472/portfolio/p1_yyfza8.png',pref:'https://mydo.vercel.app',github:'https://github.com/mayormankind/mydo',frameworks:['react','chakraUI','react-icons']},
        {id:'2',projectName:'HoistMe',projectDetails:'A CMS to create your own free business portfolio',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1665533483/portfolio/p3_oeeqme.png',pref:'https://lightgram-mod.vercel.app',github:'https://github.com/mayormankind/HoistMe',frameworks:['react','chakraUI','react-icons']},
        {id:'3',projectName:'FaithStream',projectDetails:'A central web app for a readers community where books, videos, and stories are stored for reading and learning purposes.',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1665533485/portfolio/p4_wz6gxs.png',pref:'https://lightgram-app.vercel.app',github:'https://github.com/mayormankind/lightgramApp',frameworks:['react','chakraUI','react-icons']},
        {id:'4',projectName:'ResCALC',projectDetails:'A resistor value calculator that uses the color band code for its calculation.',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1674818587/portfolio/Screenshot_20230126-174704_1_fvjg0p.jpg',pref:'https://res-calc.vercel.app',github:'https://github.com/mayormankind/ResCALC',frameworks:['HTML5','CSS3','javascript']},
        {id:'5',projectName:"My Portfolio",projectDetails:'My personal potfolio that consists of all projects i have worked on',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1665533472/portfolio/p5_m8xwvj.png',pref:'https://my-portfolio-delta-lac.vercel.app',github:'https://github.com/mayormankind/my_portfolio',frameworks:['react','chakraUI','react-icons']},
        {id:'6',projectName:"Pick n' Toe",projectDetails:'A TIC-TAC-TOE multiplayer that you could play game with your friends. Designed with javascript',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1673298543/portfolio/pnt1_gngvyz.png',pref:'https://tic-tac-toe-mayormankind.vercel.app',github:'https://github.com/mayormankind/TicTacToe',frameworks:['HTML','JavaScript','CSS/SCSS']},
        {id:'7',projectName:`EIT's Website`,projectDetails:'The official website of Essential Interlink Technologies (an engineering/electronics company)',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1666756727/portfolio/etn_my3i4g.png',pref:'https://eit-website.vercel.app',github:'https://github.com/mayormankind/etn_website',frameworks:['react','chakraUI','react-icons']},
        {id:'8',projectName:`HillTop Snake`,projectDetails:'A snake game for PC. mobile version coming soon',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1678196514/portfolio/hillSnake_b6ngkk.png',pref:'https://hilltop-snake.vercel.app',github:'https://github.com/mayormankind/Hill-top_Snake',frameworks:['react','chakraUI','react-icons']},
        {id:'9',projectName:`ProspectTailors`,projectDetails:'A webpage(portfolio template) designed for HoistMe',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1678196514/portfolio/hillSnake_b6ngkk.png',pref:'https://prospectTailors.vercel.app',github:'https://github.com/mayormankind/prospectTailors',frameworks:['react','chakraUI','react-icons']},
        {id:'9',projectName:`Mongfrens`,projectDetails:'An anonymous messaging app with timer for self-destructible messages.',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1678196514/portfolio/hillSnake_b6ngkk.png',pref:'https://prospectTailors.vercel.app',github:'https://github.com/mayormankind/Amongfriends',frameworks:['react','chakraUI','react-icons']},
        {id:'10',projectName:`WordList`,projectDetails:'A character randomizer that gives all possible combinations of a set of characters given.',projectImage:'https://res.cloudinary.com/dcesze7l8/image/upload/v1678196514/portfolio/hillSnake_b6ngkk.png',pref:'https://wordlist-rust.vercel.app',github:'https://github.com/mayormankind/wordList',frameworks:['HTML','CSS','javascript']}
    ];
  return (
    <Box w='100%' h='100%' id='projects' className='scroll' mb={'30px'}>
        <Flex mx='auto' maxW='1100px' flexDir='column'>
            <Flex position='relative' mx='auto'>
                <Text as={'span'} fontSize={{sm: '70px',base:'4xl'}} fontWeight='bold' textAlign={'left'} opacity='.4'>Projects</Text>
                <Text as={'span'} pos='absolute' top='1.7em' fontSize={{sm: '2xl',base:'20px'}} textAlign={'left'}>Projects worked on</Text>
            </Flex>
            <List gridGap={'30px'} w='100%' h={'100%'} mt='20px' flexWrap='wrap' justify={'space-around'} display={'grid'} gridTemplateColumns={'repeat(auto-fit, minmax(20rem, 1fr))'} p='10px'>
                {projectList.map(each=>(
                    <ProjectCard id={each.id} name={each.projectName} href={each.pref} git={each.github} img={each.projectImage} det={each.projectDetails} frames={each.frameworks}/>
                ))}
            </List>
        </Flex>
    </Box> 
    )
}

export default Projects;