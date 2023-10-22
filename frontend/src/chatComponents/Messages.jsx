import { Flex, Text, Image, Center } from "@chakra-ui/react";
import Logo from "../assets/balance.png";

function Messages() {
    return (
        <Flex width={'100%'} alignItems={'flex-end'} gap={'8px'}>
            <Center backgroundColor={'#F0F0F0'} h={'40px'} w={'40px'} borderRadius={'40px'}>
                <Image src={Logo} alt="LegalAid Logo" height={'25px'}/>
            </Center>
            <Flex p={'20px'} backgroundColor={'#4A4A4A'} maxWidth={'60%'} borderRadius={'30px 30px 30px 0'}>
                <Text textColor={'#F0F0F0'} fontSize={'15px'}>Bali is predominantly a Hindu country. Bali is known for its elaborate, traditional dancing. The dancing is inspired by its Hindi beliefs. Most of the dancing portrays tales of good versus evil. </Text>
            </Flex>
        </Flex>
    );
}

export default Messages;
