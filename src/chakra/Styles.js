import { Box, Text, Link } from "@chakra-ui/react";
import { Accounts } from "../Components/Constants";


export function BorderColorGen(){
    var color = ''
    const colors = ['red','green','blue','purple','orange','yellow','black','skyblue','magenta','cyan','deepblue','violet','indigo']
    const colorIndex = Math.floor(Math.random()*13);
    color = colors[colorIndex];
    return (color);
}
export const SocialIcons = ()=>{
    return( 
        <Box display={'grid'} gridTemplateColumns={'repeat(3,1fr)'} gridGap='2px'>
          {Accounts.map(social=>(
            <Link key={social.id} href={social.ref} display={'flex'} align={'center'} p='10px'>
              <Text fontSize={'2xl'} mx='auto'>{social.icon}</Text>
            </Link>
          ))}
        </Box>
    );
}