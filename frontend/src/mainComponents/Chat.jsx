import { Flex } from "@chakra-ui/react";

function Chat(){
    return(
        <Flex
            width={'50%'}
            height={'95%'}
            backgroundColor={'#E0E0E0'}
            borderRadius={'20px'}
            p={'20px'}
            display={'flex'}
            flexDirection={'column'}>
            <Flex height={'calc(100% - 70px)'} width={'100%'}>

            </Flex>
            <Flex height={'70px'} width={'100%'} backgroundColor={'red'}>

            </Flex>
        </Flex>
    )
}
export default Chat