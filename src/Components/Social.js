import { Box, HStack, List,Text,ListItem, Heading, Flex, Icon, Link } from '@chakra-ui/react';
import React from 'react';
import {RiMailFill,RiWhatsappFill,RiGithubFill,RiTwitterFill, RiFacebookFill} from 'react-icons/ri';
// import { Link } from 'react-router-dom';

function Social() {
  const Accounts=[
    {
      id:'1',
      Sname:'Github',
      icon:<RiGithubFill/>,
      ref:'https://github.com/mayormankind'
    },
    {
      id:'2',
      Sname:'Twitter',
      icon:<RiTwitterFill/>,
      ref:'https://mobile.twitter.com/MakindeMayowa05'
    },
    {
      id:'3',
      Sname:'Whatsapp',
      icon:<RiWhatsappFill/>,
      ref:'https://github.com/mayormankind'
    },
    {
      id:'4',
      Sname:'Email',
      icon:<RiMailFill/>,
      ref:'mailto:mayowamakinde23@gmail.com?subject=SendMail&body=Description'
    },
    {
      id:'5',
      Sname:'Facebook',
      icon:<RiFacebookFill/>,
      ref:'https://www.facebook.com/profile.php?id=100081687606178'
    }
  ]
  return (
    <Box bg={'black'} color={'white'} w='100%' h='100%' p='30px'>
      <Heading textAlign={'center'}>Social</Heading>
      <Flex justify='space-around' mt='30px' w='100%' h='100%' flexWrap='wrap'>
        {Accounts.map(social=>(
          <Link key={social.id} href={social.ref} display={'flex'} align={'center'} p='10px'>
              <Text fontSize={'2xl'} mr='3px'>{social.icon}</Text>
              <Text>{social.Sname}</Text>
          </Link>
        ))}
      </Flex>
    </Box>
  )
}

export default Social;