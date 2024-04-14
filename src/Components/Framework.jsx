import { Box, Flex, Grid, Text, useColorMode } from '@chakra-ui/react';
import React from 'react'
import { RiAngularjsFill, RiCss3Fill, RiHtml5Fill, RiReactjsFill } from 'react-icons/ri';
import {DiJavascript1,DiPhp} from 'react-icons/di';
import {SiNativescript, SiTailwindcss, SiTypescript} from 'react-icons/si';
import {FaCss3, FaCss3Alt, FaHtml5, FaPhp} from 'react-icons/fa'
import { Reveal } from './Reveal';
function Framework() {
    const Obj = [
        {frname:'React',img:<RiReactjsFill/>,color:'cyan'},
        {frname:'ReactNative',img:<SiNativescript/>,color:'cyan'},
        {frname:'TypeScript',img:<SiTypescript/>,color:'blue.500'},
        {frname:'JS',img:<DiJavascript1/>,color:'yellow'},
        {frname:'HTML',img:<FaHtml5/>,color:'red'},
        {frname:'CSS', img:<FaCss3Alt/>,color:'#0A6DE4'},
        {frname:'TailwindCSS', img:<SiTailwindcss/>,color:'#0D6EFD'},
    ];
    return (
        <Flex w='100%' p='20px 10px'>
            <Flex flexDir={'column'} h={'100%'} w='100%' maxW={'1000px'} mx='auto' gap='10px'>
                <Box mx='auto'>
                    <Reveal>
                        <Flex pos='relative'>
                            <Text as={'span'} fontSize={{sm:'70px',base:'4xl'}} fontWeight='bold' textAlign={'left'} opacity='.2' w='100%' minW='300px'>F & L</Text>
                            <Text as={'span'} position='absolute' top={{sm:'1.5em',base:'1em'}} textAlign={'left'} fontSize={{sm:'2xl',base:'20px'}} w='100%'>Frameworks & Languages</Text>
                        </Flex>
                    </Reveal>
                </Box>
                <Grid gridTemplateColumns={'repeat(auto-fit, minmax(3rem, 1fr))'} justifyItems={'center'} w='100%' gap='20px'>
                    {Obj.map((each,id)=>(
                        <Reveal key={id}>
                            <Flex fontSize={'25px'} lineHeight='5' flexDir={{sm:'row',base:'column'}} align={'center'} w={'fit-content'}>
                                <Text color={each.color} mr='5px'>{each.img}</Text>
                                <Text fontSize={'12px'} fontWeight='bold'>{each.frname}</Text>
                            </Flex>
                        </Reveal>
                    ))}
                </Grid>
            </Flex>
        </Flex>
  )
}

export default Framework;