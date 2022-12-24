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
        {id:'4',frname:'JavaScript',img:<DiJavascript1/>,color:'yellow'},
        {id:'5',frname:'HTML',img:<FaHtml5/>,color:'red'},
        //{id:'6',frname:'CSS', img:<FaCss3Alt/>,color:'deepblue'},
    ];
    const {colorMode} = useColorMode();
    const isDark = colorMode=='dark';
    return (
    <Flex flexDir={'column'} align='center' h={'100%'} w='100%'>
        <Flex position='relative' w={{sm:'88%',base:'100%'}} ml={{sm:'0',base:'30px'}}>
            <Text as={'span'} p='10px' fontSize={{sm:'70px',base:'5xl'}} fontWeight='bold' textAlign={'left'} opacity='.2'>F & L</Text>
            <Text as={'span'} position='absolute' top='1.5em' fontSize={{sm:'2xl',base:'20px'}} textAlign={'left'} color={'rgb(129, 129, 129)'}>Frameworks & Languages</Text>
       </Flex>
        <Flex w='100%' h={'90px'} justify={'space-around'} align='center' flexWrap={'wrap'}>
            {Obj.map(each=>(
                <Flex key={each.id} fontSize={{sm:'50px',base:'40px'}} flexDir={{sm:'row',base:'column'}} alignItems={'center'} w={{sm:'160px',base:'fit-content'}}>
                    <Text color={each.color} mr='5px'>{each.img}</Text>
                    <Text fontSize={'20px'} fontWeight='bold'>{each.frname}</Text>
                </Flex>
            ))}
        </Flex>
    </Flex>
  )
}

export default Framework;