import { Flex, Heading, Center } from "@chakra-ui/react";

function History(){
    return(
        <Flex backgroundColor={"#E0E0E0"} h={'95%'} w={'20%'} borderRadius={'20px'}>
            <Center w={'100%'} h={'80px'}>
                <Heading size="xl" fontWeight={'medium'}>History</Heading>
            </Center>
        </Flex>

    );
}
export default History;