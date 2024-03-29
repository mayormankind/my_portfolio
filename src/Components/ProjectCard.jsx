import { Box, Flex, useColorMode, Image, Text, Button, HStack, VStack, IconButton, ListItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiGithubFill, RiGlobalFill } from 'react-icons/ri';
import { BorderColorGen } from '../chakra/Styles';
import ImageVIewer from './ImageVIewer';

function ProjectCard(props) {
    const [ preview, setPreview ] = useState(false);
    const [ image, setImage ] = useState('');
    const {colorMode}=useColorMode();
    const isDark = colorMode==='dark';
    const pippete = (image) =>{
        setPreview(true);
        setImage(image);
    }

  return (
    <ListItem p={'20px'} w='100%' maxW={'350px'} rounded={'xl'} boxShadow='xl' cursor='pointer' bg={isDark?'#121212':'#d0d0d0'} mx='auto' _hover={{transform:'translateY(-20px)'}}>
        <Flex pos='relative' flexDir={'column'} w='100%' gap='10px' mx='auto'>
            <Image src={props.img} rounded={'md'} w={'300px'} loading='lazy' h='200px' boxShadow={'xl'} mx={'auto'} onClick={()=>pippete(props.img)} cursor='pointer' _hover={{opacity:'0.7',blur:'lg'}}/>
            <VStack w={'100%'} textAlign='center' h='100%' spacing={'15px'} p={'10px'}>
                <Box w={'100%'}>
                    <Text as={'h2'}  fontSize='20px' fontWeight={'bold'}>{props.name}</Text>
                    <Text fontSize='12px'>{props.det}</Text>
                </Box>    
                <HStack flexWrap={'wrap'} w='100%' fontSize={'12px'}>
                    {props.frames.map(tech=>(
                        <Text border={`2px solid ${BorderColorGen()}`}  lineHeight={'short'} p='6px' rounded={'full'}>{tech}</Text>
                    ))}
                </HStack>
                <HStack w='100%'>                    
                    <Button as={'a'} variant={'outline'} colorScheme={isDark ? 'white' : 'black'} href={props.href} p='7px' display='flex' alignItems={'center'} w='100%'><Text fontSize='small' mr='10px'>View project</Text><RiGlobalFill/></Button>
                    <Button as={'a'} variant={'outline'} colorScheme={isDark ? 'white' : 'black'} href={props.git} p='7px' display='flex' alignItems={'center'} w='100%'><Text fontSize='small' mr='10px'>Github link</Text><RiGithubFill/></Button>
              </HStack>
            </VStack>
        </Flex>
        {preview && <ImageVIewer img={image} setPreview={setPreview}/>}
    </ListItem>
    )
}

export default ProjectCard;