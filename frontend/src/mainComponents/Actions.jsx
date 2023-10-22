import { Flex, Heading, Center, Text, Image } from "@chakra-ui/react";
import map from "../assets/map.png";
import Law from "./Law";

const Actions = ({ actions, laws, violations, isFirstTime }) => {
  return (
    <Flex
      width={"30%"}
      height={"95%"}
      backgroundColor={"#E0E0E0"}
      borderRadius={"20px"}
      flexDir={"column"}
      padding={"20px"}
      gap={"10px"}
    >
      <Center h={"80px"}>
        <Heading fontWeight={"medium"}>Recommended Actions</Heading>
      </Center>
      <Flex
        flex={1}
        alignItems={"center"}
        flexDirection={"column"}
        overflowY={"scroll"}
        p={"10px"}
        gap={"5px"}
        backgroundColor={"#F0F0F0"}
        borderRadius={"20px"}
      >
        <Text>{actions === "" ? "" : actions}</Text>
      </Flex>
      <Flex
        flex={1}
        alignItems={"center"}
        flexDirection={"column"}
        overflowY={"scroll"}
        p={"10px"}
        gap={"5px"}
      >
        {isFirstTime ? <Image src={map} /> : <h1>MAP</h1>}
      </Flex>
      <Text>{laws === "" ? "" : laws}</Text>
      <Flex
        flex={1}
        alignItems={"center"}
        flexDirection={"column"}
        overflowY={"scroll"}
        overflowX={"scroll"}
        p={"10px"}
        gap={"5px"}
      >
        <Law text={violations[0]} />
        <Law text={violations[1]} />
      </Flex>
    </Flex>
  );
};
export default Actions;
