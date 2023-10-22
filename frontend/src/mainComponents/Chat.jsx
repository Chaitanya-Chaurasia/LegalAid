import { Flex, Input, Center } from "@chakra-ui/react";
import Response from "../chatComponents/Response";
import Messages from "../chatComponents/Messages";

function Chat(){
    return(
        <Flex
            width={'50%'}
            height={'95%'}
            backgroundColor={'#E0E0E0'}
            borderRadius={'20px'}
            p={'30px'}
            pr={'15px'}
            display={'flex'}
            flexDirection={'column'}>
            <Flex height={'calc(100% - 60px)'} width={'100%'} flexDir={'column'} overflowY={'scroll'} gap={'15px'} pr={'15px'}>
                <Messages/>
                <Response/>
                <Response/>
                <Response/>
                <Response/>
                <Response/>
            </Flex>
            <Center height={'60px'} width={'100%'}>
                <Input placeholder='Basic usage' backgroundColor={'#F0F0F0'}/>
            </Center>
        </Flex>
    )
}
export default Chat