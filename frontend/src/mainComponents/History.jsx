import { Flex, Heading, Center } from "@chakra-ui/react";
import Story from "./Story";

function History() {
  return (
    <Flex backgroundColor={"#E0E0E0"} h={'95%'} w={'15%'} borderRadius={'20px'} flexDirection={'column'}>
      <Center h={'80px'}>
        <Heading size='lg' fontWeight={'medium'}>History</Heading>
      </Center>
      <Flex flex={1}  alignItems={'center'} flexDirection={'column'} overflowY={'scroll'} p={'10px'} maxHeight={'calc(100% - 80px)'} gap={'12px'}>
        <Story st="Personal Injury Claims"/>
        <Story st="Criminal Defense"/>
        <Story st="Family Law Matters"/>
        <Story st="Estate Planning Advice"/>
        <Story st="Employment Disputes"/>
        <Story st="Traffic Violation Help"/>
        <Story st="Property Rights Disputes"/>
        <Story st="Business Contracts"/>
        <Story st="Divorce Guidance"/>
        <Story st="Immigration Issues"/>
        <Story st="Medical Malpractice"/>
        <Story st="Intellectual Property"/>
        <Story st="Environmental Lawsuits"/>
        <Story st="Consumer Rights"/>
        <Story st="Bankruptcy Solutions"/>
      </Flex>
    </Flex>
  );
}

export default History;
