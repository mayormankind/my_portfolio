import React from 'react';
import {Box, Flex, Text, useColorMode, Image, Link, Divider, Grid} from '@chakra-ui/react';
import { Accounts, Navs } from './Constants';


function Footer() {
  const {colorMode}=useColorMode();
  const isDark = colorMode==='dark';
    const Navigator = ()=>{
    return(
      <Flex gap='20px' fontSize={'13px'}>
        {Navs.map(nav=>(
          <Link href={nav.refr} key={nav.id} listStyleType='none' color='white'>{nav.lab}</Link>
        ))}
      </Flex>
    )
  }
  return (
    <Flex bg={'rgb(20,20,20)'} id='contact' flexDir='column'>
      <Flex justify='space-between' w='100%' align={'center'} p='10px' color={'white'} flexDir={{sm:'row',base:'column'}} className='scroll' maxW='1100px' mx='auto'>
        <Box w={{sm:'10%',base:'100%'}}>
          <Image src='images/Logow.png' loading='lazy' w={{sm:'150px',base:'100px'}} mx='auto'/>
        </Box>
        <Flex >
            {Accounts.map(social=>(
              <Link key={social.id} href={social.ref} display={'flex'} align={'center'} p='10px'>
                <Text fontSize={'2xl'} mx='auto' color={'white'} _hover={{opacity:'0.6',transform:'translateY(-3px)'}}>{social.icon}</Text>
              </Link>
            ))}
        </Flex>
      </Flex>
      <Divider orientation='horizontal'/>
      <Box p='10px' w='100%' maxW='1100px' mx='auto' fontSize='13px'>
        <Flex align='center' justify='space-between' w='100%' flexWrap={'wrap'} m={'auto'}>
          <Navigator/>
          <Text color='white' as='p'>copyright © 2023 maximals</Text>
        </Flex>
      </Box>
    </Flex>
  )
}
export default Footer;