import { Center, Heading, Image, Flex, Text, Button } from "@chakra-ui/react";
import Logo from "./assets/balance.png";
import google from "./assets/google.png";

function Banner({ username }) {
  return (
    <Center backgroundColor={"#E0E0E0"} h={"80px"} gap={5} boxShadow={"md"}>
      <Flex position={"absolute"} left={"50px"} gap={1.5}></Flex>
      <Image src={Logo} alt="LegalAid Logo" height={"60px"} />
      <Flex alignItems={"flex-end"}>
        <Heading size="3xl" fontWeight={"bold"} as={"h1"}>
          L
        </Heading>
        <Heading size="2xl" fontWeight={"bold"} style={{ margin: "1px 0" }}>
          EGAL
        </Heading>
        <Heading size="3xl" fontWeight={"bold"} color={"#213A83"}>
          AI
        </Heading>
        <Heading size="2xl" fontWeight={"bold"} style={{ margin: "1px 0" }}>
          D
        </Heading>
      </Flex>
    </Center>
  );
}
export default Banner;
