import { Box } from '@chakra-ui/react'
import React from 'react'
import ProjectList from './ProjectList'
import Add from './Add'

export default function DashboardContent({ screen }) {

  return (
    <Box w='100%' flex='0.8'>
        {screen === 'list' && <ProjectList/>}
        {screen === 'add' && <Add/>}
    </Box>
  )
}
