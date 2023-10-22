import { Flex, Text } from "@chakra-ui/react";

function Law({ text }) {
  return (
    <Flex
      backgroundColor={"#AAAAAA"}
      width={"90%"}
      h={"50px"}
      borderRadius={"20px"}
      alignItems={"center"}
      pl={"15px"}
    >
      <Text>Law : {text}</Text>
    </Flex>
  );
}
export default Law;
