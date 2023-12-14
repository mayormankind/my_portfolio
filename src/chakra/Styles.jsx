import { Box, Text, Link, Flex, keyframes } from "@chakra-ui/react";
import { Accounts } from "../Components/Constants";


export function BorderColorGen(){
    var color = ''
    const colors = ['red','green','blue','purple','orange','tomato','steelblue','yellow','black','skyblue','magenta','cyan','coral','chocolate','crimson','violet','indigo']
    const colorIndex = Math.floor(Math.random()*17);
    color = colors[colorIndex];
    return (color);
}
export const SocialIcons = ()=>{
    return( 
        <Box display={'grid'} gridTemplateColumns={'repeat(3,1fr)'} gridGap='2px'>
          {Accounts.map(social=>(
            <Link key={social.id} href={social.ref} display={'flex'} align={'center'} p='10px'>
              <Text fontSize={'2xl'} mx='auto' color={'white'} _hover={{opacity:'0.6',transform:'translateY(-3px)'}}>{social.icon}</Text>
            </Link>
          ))}
        </Box>
    );
}

export const SidebarAnimation = () =>{
  const circleAnimate = keyframes`
    0%{transform:translateY(0px)}
    25%{transform:translateY(200px)}
    50%{transform:translateY(400px)}
    75%{transform:translateY(200px)}
    100%{transform:translateY(0px)}
  `;
  return(
    <Flex pos='absolute' top={{sm:'15%',base:'25%'}} left={{sm:'70px',base:'5px'}} h='400px' w='10px' bg='lightgray' opacity='0.2'>
      <Box w='20px' pos='absolute' h='20px' bg='gray' top='0' left={'-50%'} borderRadius='50%' animation={`${circleAnimate} 5s linear infinite`}/>
    </Flex>
  )
}
export const ColoredText = ({children}) =>{
  return(
    <p style={{color:'#00bfff',display:'inline', fontWeight:'bold'}}>{children}</p>
  )
}