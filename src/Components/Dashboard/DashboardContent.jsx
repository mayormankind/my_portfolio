import { Box } from '@chakra-ui/react'
import React from 'react'
import ProjectList from './ProjectList'
import Add from './Add'

export default function DashboardContent({ screen }) {

  return (
    <Box flex='0.7'>
        {screen === 'list' && <ProjectList/>}
        {screen === 'add' && <Add/>}
    </Box>
  )
}
