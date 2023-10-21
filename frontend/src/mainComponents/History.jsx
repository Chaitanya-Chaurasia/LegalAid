import { Flex, Heading, Center } from "@chakra-ui/react";
import Story from "./Story";

function History(){
    return(
        <Flex backgroundColor={"#E0E0E0"} h={'95%'} w={'20%'} borderRadius={'20px'} flexDirection={'column'}>
            <Center w={'100%'} h={'80px'}>
                <Heading size="xl" fontWeight={'medium'}>History</Heading>
            </Center>
            <Flex w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'}>
                <Story/>
            </Flex>
        </Flex>

    );
}
export default History;