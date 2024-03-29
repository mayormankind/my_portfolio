import { Box, Flex, List, Text,  Spacer, IconButton, Image, useColorMode, Link, useDisclosure, keyframes, Slide} from '@chakra-ui/react';
import React, { useState } from 'react'
import {RiCloseFill,RiMenu3Fill} from 'react-icons/ri';
import { SocialIcons } from '../chakra/Styles';
import { Navs } from './Constants';
function Header() {
  const {colorMode, toggleColorMode} =useColorMode();
  const isDark = colorMode==='dark';
  const [modal,setModal ] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  function dispModal(){
    setModal(!modal);
    onToggle();
    console.log('hey its working!')
  }

  const Toggle = ()=>{
    const toggleAnim = keyframes`
    0%{transform:scale(1)}
    50%{transform:scale(2)}
    100%{transform:scale(1)}
  `;
    return (
        <Box boxSize='25px' borderRadius={'50%'} pos='relative' bg={colorMode=='dark' ?'white':'black'} p='5px' onClick={toggleColorMode}  _before={{content:'""',width:'100%',height:'100%',position:'absolute',top:'0', borderRadius:'50%',left:'0',border:'2px solid #00bfff',animation:`${toggleAnim} 1s linear infinite`}}>
        </Box>
    )
  }

  return (
    <Flex w='100%' h='100%' pos='sticky' top='0' zIndex='50' bg='black'>
      <Flex w='100%' align={'center'} h='70px' maxW='1100px' mx='auto' pl={{sm:'10px',base:'20px'}}>
        <Link to='/'>
          <Image h='100px' src={isDark ? 'images/Logow.png':'images/Logob.png'} loading='lazy'/>
        </Link>
        <Slide in={isOpen} zIndex='100'>
          <Flex flexDir={'column'} align={'center'} h='100%' w='100%' pos={'fixed'} top='0' left='0' right='0' bottom={'0'} bg={'black'} justify={'space-around'}>
            <Flex flexDir={'column'} p='30px 0' h='50%' w='100%' align='center' justify={'space-around'}>
              {Navs.map((nav,id)=>(
                <Link href={nav.refr} key={id} onClick={dispModal} fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" color='white'>{nav.lab}</Link>
              ))}
            </Flex>
            <SocialIcons display={'flex'}/>
          </Flex>
        </Slide>
        <Spacer/>
        <List display={{sm:'flex',base:'none'}} mr='10px' flexDir={{sm:'row',base:'column'}}>
          {Navs.map((nav,id)=>(
            <Link key={id} href={nav.refr} ml='20px' fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">{nav.lab}</Link>
          ))}
        </List>
        <IconButton icon={<RiMenu3Fill/>} display={{sm:'none',base:'flex'}} onClick={dispModal} zIndex='2000' color='red' fontSize='25px' variant={'ghost'}/>
        <IconButton m={'0 20px'} isRound icon={<Toggle/>}></IconButton>
      </Flex>
    </Flex>
  )
}

export default Header;
