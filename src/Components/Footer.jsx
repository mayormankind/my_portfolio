import React from 'react';
import {Box, Flex, Text, useColorMode, Image, Link, Divider, Grid} from '@chakra-ui/react';
import { Accounts, Navs } from './Constants';
import { Reveal } from './Reveal';


function Footer({ alt }) {
  const {colorMode}=useColorMode();
  const isDark = colorMode==='dark';
    const Navigator = ()=>{
    return(
      <Flex gap='20px' fontSize={'13px'}>
        {Navs.map((nav, id)=>(
          <Link href={alt ? nav.alt : nav.refr} key={id} listStyleType='none' color='white' _hover={{transform:'translateY(-5px)'}}>{nav.lab}</Link>
        ))}
      </Flex>
    )
  }
  return (
    <Flex bg={'rgb(20,20,20)'} id='contact' flexDir='column'>
      <Flex justify='space-between' w='100%' align={'center'} p='10px' color={'white'} flexDir={{sm:'row',base:'column'}} className='scroll' maxW='1100px' mx='auto'>
        <Box w={{sm:'10%',base:'fit-content'}} mx={{sm:'0',base:'auto'}}>
          <Reveal>
            <Image src='images/Logow.png' loading='lazy' w={{sm:'150px',base:'100px'}} mx='auto'/>
          </Reveal>
        </Box>
        <Flex>
            {Accounts.map((social,id)=>(
              <Reveal>
                <Link key={id} href={social.ref} display={'flex'} align={'center'} p='10px'>
                  <Text fontSize={'xl'} mx='auto' color={'white'} _hover={{opacity:'0.6',transform:'translateY(-3px)'}}>{social.icon}</Text>
                </Link>
              </Reveal>
            ))}
        </Flex>
      </Flex>
      <Divider orientation='horizontal'/>
      <Box p='10px' w='100%' maxW='1100px' mx='auto' fontSize='13px'>
        <Flex align='center' w='100%' flexWrap={'wrap'} m={'auto'}>
          <Flex mx={{sm:'0',base:'auto'}} flexDir={{sm:'row',base:'column'}} justify='space-between' w={{sm:'100%',base:'fit-content'}} textAlign={'center'}>
            <Navigator/>
            <Text color='white' as='p'>copyright © {new Date().getFullYear()} <b>Man kind</b></Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}
export default Footer;