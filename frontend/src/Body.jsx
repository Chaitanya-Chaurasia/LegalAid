import { Flex } from "@chakra-ui/react";
import History from "./mainComponents/History";
import Chat from "./mainComponents/Chat";
import Actions from "./mainComponents/Actions";

function Body(){
    return(
        <Flex w={'100%'} h={'90vh'} justifyContent={'space-evenly'} alignItems={'center'} className="BodyDiv">
            <History />
            <Chat />
            <Actions />
        </Flex>
    );
}
export default Body;