import { Box, Flex, List,Text,Circle, Spacer, IconButton, Image, useColorMode, Link, useDisclosure, keyframes} from '@chakra-ui/react';
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
    setModal(true);
    onToggle;
  }
  const toggleAnim = keyframes`
    0%{transform:scale(1)}
    50%{transform:scale(2)}
    100%{transform:scale(1)}
  `;

  const Toggle = ()=>{
    const toggleAnim = keyframes`
    0%{transform:scale(1)}
    50%{transform:scale(2)}
    100%{transform:scale(1)}
  `;
    return (
        <Box boxSize='25px' borderRadius={'50%'} pos='relative' bg={colorMode=='dark' ?'white':'black'} p='5px' onClick={toggleColorMode}  _before={{content:'""',width:'100%',height:'100%',position:'absolute',top:'0', borderRadius:'50%',left:'0',border:'2px solid #84cdf7',animation:`${toggleAnim} 1s linear infinite`}}>
        </Box>
    )
  }
  const MobileTabs = ()=>{
    return(
        <Flex pos={'fixed'} flexDir={'column'} align={'center'} zIndex='100' h='100%' w='100%' bottom={0} bg={'black'} justify={'space-around'} display={{sm:'none',base:'flex'}} transition={'.5s ease in'} left='0'>
          <IconButton icon={<RiCloseFill/>} variant='ghost' fontSize='40px' mt='5px' onClick={()=>setModal(false)} color='white'/>
          <Flex flexDir={'column'} p='30px 0' h='50%' w='100%' align='center' justify={'space-around'}>
            {Navs.map(nav=>(
              <Link href={nav.refr} onClick={()=>setModal(false)} key={nav.id}><Text key={nav.id} color='white' mr={'10px'}fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" fontWeight='semibold'>{nav.lab}</Text></Link>
            ))}
          </Flex>
          <SocialIcons display={'flex'}/>
        </Flex>
    )
  }

  return (
    <Flex w='100%' h='100%'>
      <Flex w='100%' align={'center'} h='70px' id='about' maxW='1100px' mx='auto' pl={{sm:'0',base:'20px'}}>
        <Image h='100px' src={isDark ? 'images/Logow.png':'images/Logob.png'}/>
        <Spacer/>
        <List display={{sm:'flex',base:'none'}} mr='10px' flexDir={{sm:'row',base:'column'}}>
          {Navs.map((nav)=>(
            <Link key={nav.id} href={nav.refr} ml='20px' fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">{nav.lab}</Link>
          ))}
        </List>
        <IconButton icon={<RiMenu3Fill/>} display={{sm:'none',base:'block'}} onClick={(!modal)? dispModal:()=>setModal(false)} fontSize='25px' variant={'ghost'} mt='5px'/>
        <IconButton m={'0 20px'} isRound icon={<Toggle/>}></IconButton>
        {modal && <MobileTabs/>}
      </Flex>
    </Flex>
  )
}

export default Header;
