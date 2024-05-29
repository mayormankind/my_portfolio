import { Box, Link, Flex, Text, Heading, VStack} from "@chakra-ui/react";

export default function ErrorPage() {
  return (
    <Box>
        <Flex align={"center"} textAlign={"center"} w='100%' flexDir='column' gap='20px' color='gray' height= '100vh' justify={"center"}>
          <Text>oops! page not found</Text>
          <Heading size={"4xl"} as="h1" color='#0A6DE4'>404 page</Heading>
          <Text>Sorry, but the page you requested was not found!</Text>
          <Link href="/" color='#E7F0FF' _hover={{ borderBottom:'2px solid #0A6DE4'}}>Go back to home page</Link>
        </Flex>
    </Box>
  )
}
