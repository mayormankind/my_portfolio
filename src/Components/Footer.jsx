import React,{useState} from 'react';
import {Box, Flex, Text, useColorMode, Image, Input,Link , Button, VStack, HStack, Textarea, Divider} from '@chakra-ui/react';
import { Accounts, Navs } from './Constants';
import { SocialIcons } from '../chakra/Styles';
import AddNewProject from './AddNewProject';


function Footer() {
  const [ newProject, setNewProject ] = useState(false);
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
          <Image src='images/Logow.png' w={{sm:'150px',base:'100px'}} mx='auto' onClick={()=>setNewProject(true)}/>
        </Box>
        <Flex flexDir='column'>
          <Text fontSize='25px' color='#1fd577' fontWeight='bold' borderBottom={'3px solid white'} transition={'borderBottom 500ms'}>You could reach out!</Text>
          <HStack justify={{sm:'space-between',base:'space-around'}} w={'100%'}flexWrap='wrap'>
            {Accounts.map(social=>(
              <Link key={social.id} href={social.ref} display={'flex'} align={'center'} p='10px'>
                <Text fontSize={'2xl'} mx='auto' color={'white'} _hover={{opacity:'0.6',transform:'translateY(-3px)'}}>{social.icon}</Text>
              </Link>
            ))}
          </HStack>
        </Flex>
        {newProject && <AddNewProject onClose={()=>setNewProject(false)}/>}
      </Flex>
      <Divider orientation='horizontal'/>
      <Box p='10px' w='100%' maxW='1100px' mx='auto' fontSize='13px'>
        <Flex align='center' justify='space-between' w='100%'>
          <Navigator/>
          <Text color='white' as='p'>copyright © 2023 maximals</Text>
        </Flex>
      </Box>
    </Flex>
  )
}
export default Footer;