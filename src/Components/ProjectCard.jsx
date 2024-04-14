import { Box, Flex, useColorMode, Image, Text, Button, HStack, VStack, IconButton, ListItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiGithubFill, RiGlobalFill } from 'react-icons/ri';
import { BorderColorGen } from '../chakra/Styles';
import ImageVIewer from './ImageVIewer';
import { Reveal } from './Reveal';

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
    <Box p={'20px'} w='100%' maxW={'350px'} rounded={'xl'} boxShadow='xl' cursor='pointer' bg={isDark?'#121212':'#d0d0d0'} mx='auto'>
        <Flex pos='relative' flexDir={'column'} w='100%' gap='10px' mx='auto'>
            <Reveal>
                <Image src={props.img} rounded={'md'} w={'300px'} loading='lazy' h='200px' boxShadow={'xl'} mx={'auto'} onClick={()=>pippete(props.img)} cursor='pointer' _hover={{opacity:'0.7',blur:'lg'}}/>
            </Reveal>
            <VStack w={'100%'} textAlign='center' h='100%' spacing={'15px'} p={'10px'}> 
                <Box w={'100%'}>
                    <Reveal>
                        <Text as={'h2'} fontSize='20px' fontWeight={'bold'}>{props.name}</Text>
                    </Reveal>
                    <Reveal>
                        <Text fontSize='12px'>{props.det}</Text>
                    </Reveal>
                </Box>    
                <HStack flexWrap={'wrap'} w='100%' fontSize={'12px'}>
                    {props.frames.map(tech=>(
                        <Reveal>
                            <Text border={`2px solid ${BorderColorGen()}`}  lineHeight={'short'} p='6px' rounded={'full'}>{tech}</Text>
                        </Reveal>
                    ))}
                </HStack>
                <HStack w='100%'>     
                    <Reveal>
                        <Button as={'a'} variant={'outline'} colorScheme={isDark ? 'white' : 'black'} href={props.href} fontSize='xs' w='100%' borderTopLeftRadius={'40px'} borderBottomRightRadius={'40px'} fontWeight='normal' rightIcon={<RiGlobalFill/>}>View demo</Button>
                    </Reveal>               
                    <Reveal>
                        <Button as={'a'} variant={'outline'} colorScheme={isDark ? 'white' : 'black'} href={props.git} borderTopLeftRadius={'40px'} borderBottomRightRadius={'40px'} fontSize='xs' w='100%' fontWeight='normal' rightIcon={<RiGithubFill/>}>Github repo</Button>
                    </Reveal>
              </HStack>
            </VStack>
        </Flex>
        {preview && <ImageVIewer img={image} setPreview={setPreview}/>}
    </Box>
    )
}

export default ProjectCard;