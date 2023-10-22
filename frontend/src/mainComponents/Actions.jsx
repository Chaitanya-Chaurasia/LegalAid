import { Flex, Heading, Center, Text } from "@chakra-ui/react";
import Law from "./Law";

function Actions(){
    return(
        <Flex width={'30%'} height={'95%'} backgroundColor={'#E0E0E0'} borderRadius={'20px'}flexDir={'column'} padding={'20px'} gap={'10px'}>
            <Center h={'80px'}>
                <Heading fontWeight={'medium'}>Recommended Actions</Heading>
            </Center>
            <Flex flex={1} alignItems={'center'} flexDirection={'column'} overflowY={'scroll'} p={'10px'} gap={'5px'} backgroundColor={'#F0F0F0'} borderRadius={'20px'}>
                    <Text>1. Contact the policer</Text>
                    <Text>2. Ask for a lawyer</Text>
                    
            </Flex>
            <Flex flex={2} alignItems={'center'} flexDirection={'column'} overflowY={'scroll'} p={'10px'} gap={'5px'}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    
            </Flex>
            <Flex flex={2} alignItems={'center'} flexDirection={'column'} overflowY={'scroll'} p={'10px'} gap={'5px'}>
                    <Law/>
                    <Law/>
            </Flex>
        </Flex>
    )
}
export default Actions