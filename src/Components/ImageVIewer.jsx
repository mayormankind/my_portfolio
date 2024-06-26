import { CloseButton, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import BackdropEffect from './BackdropEffect'

export default function ImageVIewer(props) {
  return (
    <Flex pos='fixed' h='100%' w='100%' top='0' bottom='0' right='0' left='0' bg='rgba(0,0,0,0.6)' zIndex='200' overflow='hidden'>
        <CloseButton color='red' pos='absolute' right='40px' top='40px' zIndex='30' onClick={()=>props.setPreview(false)}/>
        <Flex w='100%' m='auto' maxW='1000px'>
            <Image src={props.img} w='100%' h='100%'/>
        </Flex>
      <BackdropEffect/>
    </Flex>
  )
}