import { Flex, Heading, Center } from "@chakra-ui/react";
import Story from "./Story";

function History() {
  return (
    <Flex backgroundColor={"#E0E0E0"} h={'95%'} w={'15%'} borderRadius={'20px'} flexDirection={'column'}>
      <Center h={'80px'}>
        <Heading size='lg' fontWeight={'medium'}>History</Heading>
      </Center>
      <Flex flex={1}  alignItems={'center'} flexDirection={'column'} overflowY={'scroll'} p={'10px'} maxHeight={'calc(100% - 80px)'} gap={'12px'}>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
      </Flex>
    </Flex>
  );
}

export default History;
