import { Box, Flex, ListItem,List,Text,Circle, useMediaQuery, Spacer, IconButton, VStack, Image, useColorMode, Link, Icon } from '@chakra-ui/react';
import React, { useState } from 'react'
import {RiCloseFill,RiMenu3Fill} from 'react-icons/ri';
import { Navs } from './Constants';
function Header() {
  const {colorMode, toggleColorMode} =useColorMode();
  const isDark = colorMode==='dark';
  const [modal,setModal ] = useState(false);
  function dispModal(){
    setModal(true);
    console.log('clicked')
  }

  const Toggle = (props)=>{
    return (
      <Circle h='15px' w='15px' bg={colorMode=='dark' ?'white':'black'} onClick={toggleColorMode}/>
    )
  }
  const MobileTabs = ()=>{
    return(
      <Flex pos={'fixed'} flexDir={'column'} align={'center'} zIndex='100' h='50%' w='100%' bottom={0} bg={'rgba(0,0,0,0.9)'}>
        <IconButton icon={<RiCloseFill/>} variant='ghost' fontSize='40px' mt='5px' onClick={()=>setModal(false)} color='white'/>
        <Flex flexDir={'column'} p='30px 0' h='100%' w='100%' align='center' justify={'space-around'}>
          {Navs.map(nav=>(
            <Link href={nav.refr} key={nav.id}><Text key={nav.id} color='white' mr={'10px'}>{nav.lab}</Text></Link>
          ))}
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex w='100%' align={'center'} h='70px'>
      <Image h='100px' src={isDark ? '/LogoWhite.png':'/LogoBlack.png'}/>
        <Spacer/>
        <List display={{sm:'flex',base:'none'}} mr='10px' flexDir={{sm:'row',base:'column'}}>
            {Navs.map((nav)=>(
              <Link key={nav.id} href={nav.refr} ml='20px'>{nav.lab}</Link>
            ))}
          </List>
        <IconButton icon={<RiMenu3Fill/>} display={{sm:'none',base:'block'}} onClick={(!modal)? dispModal:()=>setModal(false)} fontSize='25px' variant={'ghost'} mt='5px'/>
        <IconButton m={'0 20px'} isRound icon={<Toggle/>}></IconButton>
        {modal && <MobileTabs/>}
    </Flex>
  )
}

export default Header;
