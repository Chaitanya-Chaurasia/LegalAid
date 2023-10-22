import { Flex } from "@chakra-ui/react";
import History from "./mainComponents/History";
import Chat from "./mainComponents/Chat";
import Actions from "./mainComponents/Actions";
import { useState } from "react";

function Body() {
  const [actions, setActions] = useState("");
  const [violations, setViolations] = useState([]);
  const [laws, setLaws] = useState([]);
  const [first, setFirst] = useState(true);

  return (
    <Flex
      w={"100%"}
      h={"90vh"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      className="BodyDiv"
    >
      <History />
      <Chat
        setActions={setActions}
        setLaws={setLaws}
        setViolations={setViolations}
        setFirst={setFirst}
      />
      <Actions
        actions={actions}
        laws={laws}
        violations={violations}
        isFirstTime={first}
      />
    </Flex>
  );
}
export default Body;
