import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from '../Components/Dashboard/Sidebar';
import DashboardContent from '../Components/Dashboard/DashboardContent';

export default function Dashboard() {

    const [ screen, setScreen ] = useState('list');

  return (
    <Box w='100%' h='100vh' overflow={'hidden'}>
        <Flex w='100%' gap='40px'>
            <Sidebar screen={screen} setScreen={setScreen}/>
            <DashboardContent screen={screen}/>
        </Flex>
    </Box>
  )
}
