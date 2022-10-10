import { Box, Flex, Icon, Text, useColorMode, useMediaQuery } from '@chakra-ui/react';
import React from 'react'
import { RiAngularjsFill, RiCss3Fill, RiHtml5Fill, RiReactjsFill } from 'react-icons/ri';
import {DiJavascript1,DiPhp} from 'react-icons/di';
import {SiTypescript} from 'react-icons/si';
import {FaPhp} from 'react-icons/fa'
function Framework() {
    const Obj = [
        {
            id:'0',
            frname:'React',
            img:<RiReactjsFill/>,
            color:'cyan'
        },
        {
            id:'1',
            frname:'TypeScript',
            img:<SiTypescript/>,
            color:'blue.500'
        },
        {
            id:'3',
            frname:'PHP',
            img:<FaPhp/>,
            color:'purple'
        },
        {
            id:'4',
            frname:'JavaScript',
            img:<DiJavascript1/>,
            color:'yellow'
        }
    ];
    const [isBigScreen] = useMediaQuery('(min-width:600px)')
    const {colorMode} = useColorMode();
    const isDark = colorMode=='dark';
    return (
    <Flex flexDir={'column'} align='center' h={'100%'} w='100%'>
        <Flex position='relative' w={isBigScreen? '88%':'100%'} ml={isBigScreen?'':'30px'}>
            <Text as={'span'} p='10px' fontSize={isBigScreen? '70px':'5xl'} fontWeight='bold' textAlign={'left'} opacity='.2'>F & L</Text>
            <Text as={'span'} position='absolute' top='1.5em' fontSize={isBigScreen? '2xl':'20px'} textAlign={'left'} color={'rgb(129, 129, 129)'}>Frameworks & Languages</Text>
       </Flex>
        <Flex w='100%' h={'90px'} justify={'space-around'} align='center'>
            {Obj.map(each=>(
                <Flex key={each.id} fontSize={isBigScreen?'50px':'40px'} flexDir={isBigScreen?'row':'column'} alignItems={'center'} w={isBigScreen?'140px':'fit-content'}>
                    <Text color={each.color} mr='5px'>{each.img}</Text>
                    <Text fontSize={'20px'}>{each.frname}</Text>
                </Flex>
            ))}
        </Flex>
    </Flex>
  )
}

export default Framework;