import { Box, Flex, Icon, Text, useColorMode, useMediaQuery } from '@chakra-ui/react';
import React from 'react'
import { RiAngularjsFill, RiCss3Fill, RiHtml5Fill, RiReactjsFill } from 'react-icons/ri';
import {DiJavascript1,DiPhp} from 'react-icons/di';
import {SiTypescript} from 'react-icons/si';
import {FaCss3, FaCss3Alt, FaHtml5, FaPhp} from 'react-icons/fa'
function Framework() {
    const Obj = [
        {id:'0',frname:'React',img:<RiReactjsFill/>,color:'cyan'},
        {id:'1',frname:'TypeScript',img:<SiTypescript/>,color:'blue.500'},
        {id:'3',frname:'PHP',img:<FaPhp/>,color:'purple'},
        {id:'4',frname:'JS',img:<DiJavascript1/>,color:'yellow'},
        {id:'5',frname:'HTML',img:<FaHtml5/>,color:'red'},
        {id:'6',frname:'CSS', img:<FaCss3Alt/>,color:'deepblue'}
    ];
    return (
        <Flex w='100%' p='0 10px'>
            <Flex flexDir={'column'} h={'100%'} w='100%' maxW={'1100px'} mx='auto' p='20px 0'>
                <Flex position='relative' ml={{sm:'0',base:'30px'}} zIndex='2'>
                    <Text as={'span'} fontSize={{sm:'70px',base:'4xl'}} fontWeight='bold' textAlign={'left'} opacity='.2'>F & L</Text>
                    <Text as={'span'} position='absolute' top={{sm:'1.5em',base:'1em'}} fontSize={{sm:'2xl',base:'20px'}} textAlign={'left'}>Frameworks & Languages</Text>
                </Flex>
                <Flex h={'90px'} w='100%' justify={'space-between'} align='center' flexWrap={'wrap'}>
                    {Obj.map(each=>(
                        <Flex key={each.id} fontSize={{sm:'40px',base:'30px'}} lineHeight='10' flexDir={{sm:'row',base:'column'}} alignItems={'center'} w={{sm:'160px',base:'fit-content'}}>
                            <Text color={each.color} mr='5px'>{each.img}</Text>
                            <Text fontSize={'15px'} fontWeight='bold'>{each.frname}</Text>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Flex>
  )
}

export default Framework;