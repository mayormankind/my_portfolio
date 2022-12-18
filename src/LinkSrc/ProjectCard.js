import { Box, Flex, useColorMode, Image, Link, Text, Button,useMediaQuery, HStack, VStack, Grid } from '@chakra-ui/react';
import React,{useState} from 'react';
import {FaForward} from 'react-icons/fa'

function ProjectCard(props) {
const [readMore,setReadmore] = useState(false);
const [isBigScreen] = useMediaQuery('(min-width:600px)');
const {colorMode}=useColorMode();
const isDark = colorMode=='dark';

const ReadModal = (props)=>{
    return(
        <Flex bg={'rgba(0,0,0,1)'} p='0 10px' w='100%' h='100%' color='white' position={'absolute'} bottom='0' textAlign={'center'} justify={'center'} flexDir={'column'} zIndex='1'>
            <Text fontSize={'15px'}>{props.det}</Text>
            <Link href={props.href} onClick={()=>setReadmore(false)} mt='10px'><Text as={'span'}>Go to Site</Text></Link>
        </Flex>        
    )
}
  return (
        // <Box mb={'20px'} key={props.id} rounded={'md'} w={'100%'} p='30px' bg={isDark?'rgb(40,40,40)':'rgb(200,200,200)'} minW={isBigScreen?'1000px':'100%'}>
        //     <Flex position='relative' flexDir={isBigScreen?'row':'column'} w='100%' maxW={'900px'} bg='green' gridGap={isBigScreen?'30px':'0'} mx='auto'>
        //         <Image src={props.img} rounded={'md'} w='300px' h='200px' boxShadow={'xl'} mx={'auto'} flex='1.5'/>
        //         <VStack bg={'red'} p='20px' flex='2'>
        //             <Box w={'100%'} bg='blue'>
        //                 <Text as={'h2'} fontSize='25px' fontWeight={'bold'}>{props.name} -</Text>
        //                 <Text fontSize='15px'>{props.det}</Text>
        //             </Box>    
        //             <Flex justify={'space-between'} flexWrap={'wrap'} w='100%'>
        //                 <Text border={isDark?'1px solid silver':'1px solid black'} p='6px' rounded={'xl'}>🎈React</Text>
        //                 <Text border={isDark?'1px solid silver':'1px solid black'} p='6px' rounded={'xl'}>🎈React Icons</Text>
        //                 <Text border={isDark?'1px solid silver':'1px solid black'} p='6px' rounded={'xl'}>🎈Chakra Ui</Text>
        //             </Flex>
        //             <Flex mx={'auto'} justify='space-around' w='100%'>
        //                 <Button as={'a'} variant={'outline'} href={props.href}>View Demo</Button>
        //                 <Button as={'a'} variant={'outline'} href={props.href}>View Github Repo</Button>
        //           </Flex>
        //         </VStack> 
        //     </Flex>
        // </Box>
    <Box p={'20px'} mb={'30px'} key={props.id} rounded={'md'} minW={isBigScreen?'1000px':''} maxW='1000px' bg={isDark?'rgb(40,40,40)':'rgb(200,200,200)'} boxShadow='xl'>
        <Flex position='relative' flexDir={isBigScreen?'row':'column'} w='100%' maxW={'900px'} gridGap={isBigScreen?'30px':'0'} mx='auto'>
            <Image src={props.img} rounded={'md'} w='350px' h='200px' boxShadow={'xl'} mx={'auto'}/>
            <Box flex='2' gridGap={'20px'} w={'100%'} h='100%' minH={isBigScreen?'250px':'100%'}>
            <VStack p='20px' flex='2'>
                <Box w={'100%'}>
                    <Text as={'h2'} textAlign='center' fontFamily={'open sans'} fontSize='25px' fontWeight={'bold'}>{props.name} -</Text>
                    <Text fontSize='15px' textAlign={'justify'}>{props.det}</Text>
                </Box>    
                <Flex justify={'space-between'} flexWrap={'wrap'} w='100%'>
                    <Text border={isDark?'1px solid silver':'1px solid black'} mb='5px' p='6px' rounded={'xl'}>🎈React</Text>
                    <Text border={isDark?'1px solid silver':'1px solid black'} mb='5px' p='6px' rounded={'xl'}>🎈React Icons</Text>
                    <Text border={isDark?'1px solid silver':'1px solid black'} mb='5px' p='6px' rounded={'xl'}>🎈Chakra Ui</Text>
                </Flex>
                <Flex mx={'auto'} justify='space-around' w='100%'>
                    <Button as={'a'} variant={'outline'} href={props.href}>View Demo</Button>
                    <Button as={'a'} variant={'outline'} href={props.href}>Github Repo</Button>
              </Flex>
            </VStack>
            </Box>
        </Flex>
    </Box>
    )
}

export default ProjectCard;


{/* <Box key={props.id} mb={'20px'} w='100%' onClick={(e)=>setReadmore(true)}>
        <Flex flexDir={'column'} position='relative'> */}
        {/* {readMore&&<ReadModal det={props.det} href={props.href}/>} */}
            {/* <Box width={'350px'} h='250px' rounded={'md'} boxShadow={'xl'}>
                <Image src={props.img} rounded={'md'} h='100%' w='100%'/>
                <Image src='LogoBlack.png' boxSize={'100px'} borderRadius='50%' bg={'red'}/>
            </Box>
        </Flex>
            <Text textAlign={'center'} fontSize='20px' fontFamily={'monospace'}>{props.name}</Text>
    </Box> */}