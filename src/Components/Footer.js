import React from 'react';
import {Box, Flex, Text, useColorMode, Image, Input,Link , Button, VStack, HStack, Textarea} from '@chakra-ui/react';
import { Navs } from './Constants';
import { SocialIcons } from '../chakra/Styles';


function Footer() {
  const {colorMode}=useColorMode();
  const isDark = colorMode==='dark';
    const Navigator = ()=>{
    return(
      <Flex flexDir={'column'} gap='20px'>
        {Navs.map(nav=>(
          <Link href={nav.refr} key={nav.id} listStyleType='none' color='white'>{nav.lab}</Link>
        ))}
      </Flex>
    )
  }
  const Socials=()=>{
    return(
      <Box>
        <Text mb={'10px'} fontWeight='bold'>CONTACT/ FOLLOW ME</Text>
        <SocialIcons />
      </Box>
    )
  }
  return (
    <Flex bg={'rgb(20,20,20)'} justify='space-around' w='100%' align={'center'} p='10px' color={'white'} flexDir={{sm:'row',base:'column'}} id='contact' className='scroll'>
      <Box w={{sm:'10%',base:'100%'}}>
        <Image src='/images/MankindW.png' w={{sm:'150px',base:'100px'}} mx='auto'/>
      </Box>
      <HStack justify={'space-between'} p={{sm:'0',base:'0 20px'}} w={{sm:'30%',base:'100%'}} m={{sm:'0',base:'20px'}}>
        <Navigator/>
        <Socials/>
      </HStack>
    </Flex>
  )
}
export default Footer;