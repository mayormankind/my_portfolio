import {IconButton, VStack, Image, Link, useColorMode } from '@chakra-ui/react';
import {Link as Clink} from 'react-router-dom';
function TailorLink({href,ChakraComponent,children, ...props}) {
  return (
    <Clink href={href} passHref>
        <Link><ChakraComponent {...props}>{children}</ChakraComponent></Link>
    </Clink>
  )
}

export default TailorLink;