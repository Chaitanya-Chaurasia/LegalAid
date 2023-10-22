import { Flex, Center, Heading, Input, Button, Image } from "@chakra-ui/react";
import google from "./assets/google.png";

function Login() {
  return (
    <Center w={"100%"} h={"90vh"}>
      <Flex
        w={"400px"}
        h={"500px"}
        backgroundColor={"#E0E0E0"}
        borderRadius={"20px"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Center p={"40px"} pb={"20px"}>
          <Heading>Login</Heading>
        </Center>
        <Center flex={1} width={"100%"} gap={"50px"} flexDir={"column"}>
          <Input placeholder="Username" backgroundColor={"#F0F0F0"} w={"80%"} />
          <Input placeholder="Password" backgroundColor={"#F0F0F0"} w={"80%"} />
          <Center flexDir={"column"} gap={"20px"}>
            <Button colorScheme="blackAlpha" p={"0 50px"}>
              Login
            </Button>
            <Button colorScheme="whiteAlpha" textColor={"#101010"}>
              <Image src={google} h={"30px"} pr={"10px"} />
              Log-in with Google
            </Button>
          </Center>
        </Center>
      </Flex>
    </Center>
  );
}
export default Login;
