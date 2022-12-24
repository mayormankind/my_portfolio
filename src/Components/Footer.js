import React from 'react';
import {Box, Flex, Text, Image, Input,Link , Button, VStack, HStack, Textarea} from '@chakra-ui/react';
import { Accounts, Navs } from './Constants';


function Footer() {
    const Navigator = ()=>{
    return(
      <Flex flexDir={'column'} gap='20px'>
        {Navs.map(nav=>(
          <Link href={nav.refr} listStyleType='none' color='white'>{nav.lab}</Link>
        ))}
      </Flex>
    )
  }
  const NewsLetter=()=>{
    return(
      <VStack spacing={'20px'} boxShadow={'xl'} color='white' w={{sm:'30%',base:'100%'}}>
        <Text fontWeight={'semibold'}>Do you have something to tell me?</Text>
        <VStack spacing={'10px'} w='100%'>
          <Input type={'text'} w='95%' placeholder='Your Name'/>
          <Input type={'text'} w='95%' placeholder='Your Email'/>
          <Textarea type={'text'} w='95%' placeholder='Your Message'/>
        </VStack>
        <Button variant={'outline'} fontWeight='extrabold' w='95%'>SEND</Button>
      </VStack>
    )
  }
  const Socials=()=>{
    return(
      <Box>
        <Text mb={'10px'} fontWeight='extrabold'>CONTACT ME</Text>
        <Box>
          {Accounts.map(social=>(
            <Link key={social.id} href={social.ref} display={'flex'} align={'center'} p='10px'>
              <Text fontSize={'2xl'} mr='3px'>{social.icon}</Text>
              <Text>{social.Sname}</Text>
            </Link>
          ))}
        </Box>
      </Box>
    )
  }
  return (
    <Flex bg={'rgb(20,20,20)'} justify='space-around' w='100%' align={'center'} p='10px' color={'white'} flexDir={{sm:'row',base:'column'}} id='contact'>
      <Box w={{sm:'10%',base:'100%'}}>
        <Image src='/images/MankindW.png' w={{sm:'150px',base:'100px'}} mx='auto'/>
      </Box>
      <HStack justify={'space-between'} w={{sm:'30%',base:'100%'}} m={{sm:'0',base:'20px'}}>
        <Navigator/>
        <Socials/>
      </HStack>
      <NewsLetter/>
    </Flex>
  )
}
export default Footer;