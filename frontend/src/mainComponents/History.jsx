import { Flex, Heading, Center } from "@chakra-ui/react";

function History(){
    return(
        <Flex backgroundColor={"#E0E0E0"} h={'80%'} w={'20%'}>
            <Center w={'100%'} h={'50px'}>
                <Heading size="xl" fontWeight={'Bold'} as={'h1'}>History</Heading>
            </Center>
        </Flex>

    );
}
export default History;