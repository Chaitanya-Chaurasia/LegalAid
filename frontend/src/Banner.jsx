import { Center, Heading, Image, Flex, Text } from "@chakra-ui/react"
import { SettingsIcon } from "@chakra-ui/icons"
import Logo from "./assets/balance.png"

function Banner(){
    return(
        <Center backgroundColor={"#E0E0E0"} h={'80px'} gap={5} boxShadow={'md'}>
            <Flex position={'absolute'} left={'50px'}  gap={1.5}>
                <Text color={'#213A83'} fontStyle={'italic'} fontWeight={'bold'} fontSize={'20px'}>Hello</Text>
                <Text fontStyle={'italic'} fontSize={'20px'}>Daniel Chen</Text>
            </Flex>
            <Image src={Logo} alt="LegalAid Logo" height={'60px'}/>
            <Flex alignItems={'flex-end'}>
                <Heading size="3xl" fontWeight={'Bold'} as={'h1'}>L</Heading>
                <Heading size="2xl" fontWeight={'Bold'} >EGAL</Heading>
                <Heading size="3xl" fontWeight={'Bold'} color={'#213A83'}>AI</Heading>
                <Heading size="2xl" fontWeight={'Bold'}>D</Heading>
            </Flex>
            <SettingsIcon position={'absolute'} right={'35px'}  boxSize={'25px'}/>
        </Center>
    )
}
export default Banner