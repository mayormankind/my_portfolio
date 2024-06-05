import { Button, Flex, Icon, IconButton, Text, useColorMode } from '@chakra-ui/react'
import React from 'react';
import { RiAddFill, RiEyeFill, RiListCheck, RiLogoutBoxLine, RiMenu2Fill, RiMoonClearLine, RiSunFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Sidebar({ screen, setScreen }) {

    const {colorMode, toggleColorMode} =useColorMode();
    const isDark = colorMode==='dark';


    const Screens = [
        {label: 'Add New', action: ()=>setScreen('add'), icon: <RiAddFill/>, ref:'add'},
        {label: 'Project List', action: ()=>setScreen('list'), icon: <RiListCheck/>, ref:'list'},
        {label: 'Preview Screen', action: ()=>setScreen('project'), icon: <RiEyeFill/>, ref:'project'},
        {label: 'Switch Mode', action: toggleColorMode, icon: isDark ? <RiSunFill/> : <RiMoonClearLine/>},
    ]

  return (
    <Flex gap='20px' flexDir={'column'} p="30px" flex='0.20' h='100vh'>
        <Text color='faintBlue' fontSize={'xl'} fontWeight={'bold'}>Man Kind</Text>
        <Flex align='center' justify={'space-between'}>
            <Text fontSize={'xl'}>Action Menu</Text>
            <IconButton icon={<RiMenu2Fill/>}/>
        </Flex>
        <hr/>
        <Flex flexDir='column' justify='space-between' h='100%'>
            <Flex flexDir='column' align='center' w='100%' h='100%'>
                {Screens.map(( scr, id )=>(
                    <Flex key={id} justify='space-between' cursor='pointer' borderLeft={screen === scr.ref ? '3px solid #0A6DE4' : '' } p={'10px'} align='center' w='100%' onClick={scr.action} bg={screen === scr.ref ? '#0a6ce470' : ''}>
                        <Text fontWeight={'semibold'}>{scr.label}</Text>
                        <Icon fontSize={'xl'}>{scr.icon}</Icon>
                    </Flex>
                ))}
            </Flex>
            <Link to={'/'}>
                <Flex gap='30px' cursor='pointer' p={'10px'} align='center' w='100%' color='faintBlue'>
                    <Icon fontSize={'xl'}><RiLogoutBoxLine/></Icon>
                    <Text fontWeight={'semibold'}>Go home</Text>
                </Flex>
            </Link>
        </Flex>
    </Flex>
  )
}
