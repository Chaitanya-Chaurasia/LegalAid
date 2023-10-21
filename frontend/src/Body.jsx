import { Flex } from "@chakra-ui/react";
import History from "./mainComponents/History";

function Body(){
    return(
        <Flex w={'100%'} h={'90vh'} justifyContent={'space-evenly'} alignItems={'center'} className="BodyDiv">
            <History />
        </Flex>
    );
}
export default Body;