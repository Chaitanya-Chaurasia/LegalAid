import { Flex, Heading, Center } from "@chakra-ui/react";

function Actions(){
    return(
        <Flex width={'30%'} height={'95%'} backgroundColor={'#E0E0E0'} borderRadius={'20px'}flexDir={'column'}>
            <Center h={'80px'}>
                <Heading fontWeight={'medium'}>Recommended Actions</Heading>
            </Center>
        </Flex>
    )
}
export default Actions