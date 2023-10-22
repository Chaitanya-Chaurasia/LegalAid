import  { Flex, Text }  from "@chakra-ui/react";

function Story(){
    return(
        <Flex width={'80%'} minHeight={'40px'}
        backgroundColor={'#E0E0E0'}
        borderRadius={'15px'}
        alignItems={'center'}
        justifyContent={'center'}
        border={'1px' + ' solid ' + '#F0F0F0'}
        _hover={{backgroundColor: '#F0F0F0'}}>
            <Text fontSize={'15px'}>Hit and run</Text>
        </Flex>
    );
}
export default Story;