import { Flex, Text, Image, Center } from "@chakra-ui/react";
import User from "../assets/user.png";

function Message(props) {
    const msg=props.msg;
    return (
        <Flex width={'100%'} alignItems={'flex-end'} gap={'8px'} justifyContent={'flex-end'}>
            <Flex p={'16px'} backgroundColor={'#213A83'} maxWidth={'60%'} borderRadius={'30px 30px 0 30px'}>
                <Text textColor={'#F0F0F0'} fontSize={'15px'}>{msg}</Text>
            </Flex>
            <Center backgroundColor={'#F0F0F0'} h={'40px'} w={'40px'} borderRadius={'40px'}>
                <Image src={User} alt="LegalAid Logo" height={'25px'}/>
            </Center>
        </Flex>
    );
}

export default Message;
