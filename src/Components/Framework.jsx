import { Box, Flex, Grid, Text, useColorMode } from '@chakra-ui/react';
import React from 'react'
import { RiAngularjsFill, RiCss3Fill, RiHtml5Fill, RiReactjsFill } from 'react-icons/ri';
import {DiJavascript1,DiPhp} from 'react-icons/di';
import {SiNativescript, SiTypescript} from 'react-icons/si';
import {FaCss3, FaCss3Alt, FaHtml5, FaPhp} from 'react-icons/fa'
function Framework() {
    const Obj = [
        {id:'0',frname:'React',img:<RiReactjsFill/>,color:'cyan'},
        {id:'0',frname:'ReactNative',img:<SiNativescript/>,color:'cyan'},
        {id:'1',frname:'TypeScript',img:<SiTypescript/>,color:'blue.500'},
        {id:'3',frname:'PHP',img:<FaPhp/>,color:'purple'},
        {id:'4',frname:'JS',img:<DiJavascript1/>,color:'yellow'},
        {id:'5',frname:'HTML',img:<FaHtml5/>,color:'red'},
        {id:'6',frname:'CSS', img:<FaCss3Alt/>,color:'deepblue'}
    ];
    return (
        <Flex w='100%' p='0 10px'>
            <Flex flexDir={'column'} h={'100%'} w='100%' maxW={'1100px'} mx='auto' p='20px 0' gap='20px'>
                <Flex position='relative' mx='auto'>
                    <Text as={'span'} fontSize={{sm:'70px',base:'4xl'}} fontWeight='bold' textAlign={'left'} opacity='.2' w='100%' minW='300px'>F & L</Text>
                    <Text as={'span'} position='absolute' top={{sm:'1.5em',base:'1em'}} textAlign={'left'} fontSize={{sm:'2xl',base:'20px'}} w='100%'>Frameworks & Languages</Text>
                </Flex>
                <Grid gridTemplateColumns={'repeat(auto-fit, minmax(7rem, 1fr))'} justifyItems={'center'} w='100%' gap='20px'>
                    {Obj.map((each,id)=>(
                        <Flex key={id} fontSize={'30px'} lineHeight='5' flexDir={{sm:'row',base:'column'}} align={'center'} w={'fit-content'}>
                            <Text color={each.color} mr='5px'>{each.img}</Text>
                            <Text fontSize={'15px'} fontWeight='bold'>{each.frname}</Text>
                        </Flex>
                    ))}
                </Grid>
            </Flex>
        </Flex>
  )
}

export default Framework;